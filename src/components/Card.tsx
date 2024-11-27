import { useState } from "react";
import BackCard from "../assets/back-cover-2.jpg";
import Astro from "../assets/cards/astro.jpg";

const Card: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  if (open) {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`relative w-32 aspect-[3/4] cursor-pointer [transform-style:preserve-3d] transition-all duration-300 ${
        open ? "[transform:rotateY(180deg)]" : "hover:scale-105"
      }`}
    >
      <div className="w-full h-full bg-blue-50 absolute [backface-visibility:hidden]">
        <img src={BackCard} alt="" />
      </div>
      <div className="w-full h-full bg-blue-50">
        <img src={Astro} alt="" />
      </div>
    </div>
  );
};

export default Card;
