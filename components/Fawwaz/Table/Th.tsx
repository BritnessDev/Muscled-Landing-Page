import React, { FC } from "react";
import { TableHeadChildProps } from "../component.type";

const Th: FC<TableHeadChildProps> = ({ content, className }) => {
	return (
		<th
			className={`bg-black-80 py-4 px-2 lg:py-7 lg:px-5 ${
				className ? className : ""
			}`}>
			{content}
		</th>
	);
};

export default Th;
