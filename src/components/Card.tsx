import { ReactNode } from "react";

interface CardProps {
  metadata: { title: ReactNode; description?: string };
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ metadata, children }) => {
  return (
    <div className="w-52 aspect-square rounded-xl bg-slate-500">
      {metadata.title}
      <p>{metadata.description}</p>
      {children}
    </div>
  );
};

export default Card;
