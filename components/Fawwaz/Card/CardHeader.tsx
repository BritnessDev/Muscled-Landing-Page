import { FC } from "react";
import { CardHeaderProps } from "../component.type";

const CardHeader: FC<CardHeaderProps> = ({ title, rate, type, children }) => {
	return (
		<div
			className={`bg-[#fdf7f7] flex flex-col items-center  rounded-t-md justify-center py-10 ${
				type === "premium"
					? "bg-red-6"
					: type === "ultimate"
					? "bg-red-9"
					: "bg-red-3"
			}`}>
			{children}
			<h4 className="mt-4 mb-10 font-bold">{title}</h4>
			<h1 className="mb-2 text-center">
				<span className="text-[#C40000] text-3xl font-bold">
					${rate}
				</span>
				<span className="block text-black text-opacity-50">
					per month
				</span>
			</h1>
		</div>
	);
};

export default CardHeader;
