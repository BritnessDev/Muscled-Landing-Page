import { FC } from "react";
import { CardProps } from "../component.type";

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`shadow-[0_4px_4px_0_#c3c3c3] ${className}`}>
      {children}
    </div>
  );
};

export default Card;