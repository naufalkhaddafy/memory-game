import React from "react";
import useMemoryGame from "./hooks/useMemoryGame";
import Card from "./components/Card";
import CompleteModal from "./components/CompleteModal";
import useTimer from "./hooks/useTimer";
import { formatTime } from "./utils/utils";

const MemoryGame: React.FC = () => {
  const { timer, stopTimer, resetTimer } = useTimer();

  const { cards, handleOpenCard, hasComplete, goToNextLevel, attempt, level } =
    useMemoryGame({ stopTimer: stopTimer, resetTimer: resetTimer, timer });

  return (
    <section className="flex-grow content-center">
      <div className="flex justify-between font-mono font-bold text-xl w-full p-3">
        <div className="text-xl">Attempt {attempt}</div>
        <div className="text-xl">
          {formatTime({ minutes: timer.minutes, seconds: timer.seconds })}
        </div>
      </div>
      <CompleteModal
        open={hasComplete}
        showNext={true}
        onClickNext={goToNextLevel}
        time={timer}
        attempt={attempt}
        level={level}
      />
      <div className="p-2 my-5 grid grid-cols-4 gap-2 justify-self-center place-items-center">
        {cards.map((card) => (
          <Card
            onClick={() => handleOpenCard(card)}
            key={card.id}
            open={card.open}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
};

export default MemoryGame;
