import { FC } from "react";
import { IconProps } from "../component.type";

const IconItem: FC<IconProps> = ({ icon, title, className, full }) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <div>{icon}</div>
      <h3 className={`${!full && `font-normal max-w-[250px] text-xl`}`}>{title}</h3>
    </div>
  );
};

export default IconItem