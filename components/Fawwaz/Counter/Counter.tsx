import { FC } from "react";

import { IProps } from "types/types"

const Counter: FC<IProps> = ({ children, className }) => {
	return <div className={`${className}`}>{children}</div>;
};

export default Counter;