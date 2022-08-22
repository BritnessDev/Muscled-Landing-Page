import React, { FC } from "react";

import IconItem from "./IconItem"

import { CardContent } from "../component.type";



const CardContent: FC<CardContent> = ({ className, children }) => {
	return (
		<div className={`px-7 mt-4 ${className ? className : ''} `}>
			{children}
		</div>
	);
};

export default CardContent;
