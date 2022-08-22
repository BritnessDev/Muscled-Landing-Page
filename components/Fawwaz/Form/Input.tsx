import { FC } from "react";
import { InputProps } from "../component.type";

const Input: FC<InputProps> = ({ type, placeholder, className, ...props }) => {
  return (
    <input
      className={`border border-[#828282] px-4 py-3 rounded-md outline-none ${className ? className : ''}`}
      {...props}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
