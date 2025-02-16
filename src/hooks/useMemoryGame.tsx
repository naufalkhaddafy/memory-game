import React, { useMemo, useState } from "react";
import { CardCollections, getRandomIndex, ICardInfo, shuffle } from "../utils";
import { v4 as uuid } from "uuid";

const useMemoryGame = () => {
  const firstCardIndexes = useMemo(() => {
    return getRandomIndex({
      amountOfCards: CardCollections.length,
      uniqueCards: 4,
    });
  }, []);

  const [cards, setCards] = useState<ICardInfo[]>(
    shuffle(firstCardIndexes.concat(firstCardIndexes)).map((index) => ({
      ...CardCollections[index],
      id: uuid(),
    }))
  );

  const [selectedCards, setSelectedCards] = useState<ICardInfo[]>([]);

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
  return {
    cards,
    handleOpenCard,
    selectedCards,
  };
};

export default useMemoryGame;
