import React from "react";
import useMemoryGame from "./hooks/useMemoryGame";
import Card from "./components/Card";
const MemoryGame: React.FC = () => {
  const { cards, handleOpenCard } = useMemoryGame();
  return (
    <section className="flex-grow content-center">
      <div className="text-center font-mono font-bold text-xl">
        {/* <Timer /> */}
        tess
      </div>
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
