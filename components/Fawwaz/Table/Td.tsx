import { FC } from "react";
import { TableBodyChildProps } from "../component.type";

const Td: FC<TableBodyChildProps> = ({ className, content, type }) => {
	return (
		<td
			className={`${
				className ? className : ""
			} ${
				type === "basic"
					? "bg-red-3"
					: type === "standard"
					? "bg-red-6"
					: type === "premium"
					? "bg-red-9"
					: type === "ultimate"
					? "bg-red-12"
					: "bg-white"
			}`}>
			{content}
		</td>
	);
};

export default Td;

/*
    default td has 
        padding:
            < 1020px
                y: 1rem
                x: 0.5rem

            > 1020px
                y: 1.75rem
                x: 1.25rem
        
        background-color: white

        there's 4 different colors based on what type is it
*/
