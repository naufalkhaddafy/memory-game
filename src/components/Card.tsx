import BackCard from "../assets/back-cover-2.jpg";

interface CardProps {
  image: string;
  open: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ image, open, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative w-max-32 aspect-[3/4] cursor-pointer [transform-style:preserve-3d] transition-all duration-300 ${
        open ? "[transform:rotateY(180deg)]" : "hover:scale-105"
      }`}
    >
      <div className="w-full h-full bg-blue-50 absolute">
        <img src={BackCard} alt="" />
      </div>
      <div className="w-full h-full bg-blue-50 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Card;
