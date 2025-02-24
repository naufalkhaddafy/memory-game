import { useEffect, useMemo, useState } from "react";
import {
  CardCollections,
  getRandomIndex,
  ICardInfo,
  shuffle,
} from "../utils/utils";
import { v4 as uuid } from "uuid";

interface MemoryGameParams {
  stopTimer: () => void;
  resetTimer: () => void;
  timer: object;
}

interface IDataSave {
  level: number;
  score: {
    minutes: number;
    seconds: number;
    attempt: number;
    score: number;
  };
  scoreAmount: number;
}

const useMemoryGame = ({ stopTimer, resetTimer, timer }: MemoryGameParams) => {
  const firstCardIndexes = useMemo(() => {
    return getRandomIndex({
      amountOfCards: CardCollections.length,
      uniqueCards: 4,
    });
  }, []);

  const shuffleTwinCardWithId = (CardsIndex: number[]) => {
    const random = shuffle(CardsIndex.concat(CardsIndex)).map((index) => ({
      ...CardCollections[index],
      id: uuid(),
    }));
    return random;
  };

  const [cards, setCards] = useState<ICardInfo[]>(
    shuffleTwinCardWithId(firstCardIndexes)
  );
  const [selectedCards, setSelectedCards] = useState<ICardInfo[]>([]);
  const [attempt, setAttempt] = useState(0);
  const [hasComplete, setHasComplete] = useState(false);
  const [level, setLevel] = useState(1);

  const handleOpenCard = (card: ICardInfo) => {
    if (selectedCards.length < 2 && card.open === false) {
      setCards((cards) =>
        cards.map((item) => {
          if (item.id === card.id) {
            return { ...item, open: true };
          }
          return item;
        })
      );

      setSelectedCards((prevSelected) => {
        const newSelectedCards = [...prevSelected, card];
        if (newSelectedCards.length === 2) {
          setAttempt(attempt + 1);
          const isMatch = newSelectedCards[0].code === newSelectedCards[1].code;
          if (!isMatch) {
            setTimeout(() => {
              setCards((cards) =>
                cards.map((item) => {
                  if (
                    item.id === newSelectedCards[0].id ||
                    item.id === newSelectedCards[1].id
                  ) {
                    return { ...item, open: false };
                  }
                  return item;
                })
              );
              setSelectedCards([]);
            }, 500);
          } else {
            setSelectedCards([]);
          }
        }
        return newSelectedCards;
      });
    }
  };

  useEffect(() => {
    const allCardsOpen = cards.every((card) => card.open === true);
    if (allCardsOpen) {
      stopTimer();
      setHasComplete(allCardsOpen);
      saveLevelToLocal();
    }
  }, [cards, stopTimer]);

  const goToNextLevel = () => {
    const nextAmountCard = cards.length / 2;
    const levelUp = getRandomIndex({
      amountOfCards: CardCollections.length,
      uniqueCards: nextAmountCard + 2,
    });
    setCards(shuffleTwinCardWithId(levelUp));
    setHasComplete(false);
    setAttempt(0);
    resetTimer();
    setLevel((level) => level + 1);
  };

  const saveLevelToLocal = () => {
    const getDataSaved = JSON.parse(
      localStorage.getItem("score-memory-game") ?? "[]"
    );

    const data = getDataSaved;

    console.log(data);

    const saveData = {
      level: level,
      score: {
        time: timer,
        attempt: attempt,
        score: 10,
      },
      scoreAmount: 1000,
    };

    localStorage.setItem("score-memory-game", JSON.stringify(saveData));
  };

  return {
    cards,
    handleOpenCard,
    selectedCards,
    hasComplete,
    goToNextLevel,
    attempt,
    level,
  };
};

export default useMemoryGame;
