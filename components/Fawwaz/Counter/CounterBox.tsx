import { FC } from "react";

import { IProps } from "types/types";

const CounterBox: FC<IProps> = ({ className, children }) => {
  return (
    <div
      className={`w-[35px] h-[35px] md:w-[50px] md:h-[60px] flex items-center justify-center bg-gradient-to-r from-[#FFFFFF] to-[#CBDDFF] text-sm md:text-lg rounded-md mt-2 mb-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default CounterBox;
