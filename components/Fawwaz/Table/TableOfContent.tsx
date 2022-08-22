import { FC } from "react";

import { IconItem } from "../Card";

import { FaListAlt } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";
import { BsDot } from "react-icons/bs"

const TableOfContent: FC = () => {
	return (
		<div className="order-1 col-span-1 lg:order-2 lg:col-span-2 lg:ml-auto md:w-full lg:max-w-[400px]">
			<div className="bg-[#3E5661] text-white rounded-md p-4 flex justify-between items-center">
				<h2 className="flex items-center text-lg gap-2">
					<FaListAlt size={20} />
					Table of Contents
				</h2>
				<BiUpArrowAlt size={25} />
			</div>
			<ul className="w-full">
				<IconItem
					icon={<BsDot />}
					title="Our Process"
					className="underline decoration-[#5F27BD] text-[#5F27BD] mt-2"
				/>
				<IconItem
					icon={<BsDot size={20} />}
					title="How Long D SEO Audit Services Take?"
					className="underline decoration-[#5F27BD] text-[#5F27BD] mt-2"
				/>
				<IconItem
					icon={<BsDot size={20} />}
					title="Why Invest In An SEO Package?"
					className="underline decoration-[#5F27BD] text-[#5F27BD] mt-2"
				/>
				<IconItem
					icon={<BsDot size={20} />}
					title="SEO Auditd: The On-Page Factors Affecting Your SEO"
					className="underline decoration-[#5F27BD] text-[#5F27BD] mt-2"
				/>
				<IconItem
					icon={<BsDot size={20} />}
					title="SEO Audits: The Off-Page Factors Affecting Your SEO"
					className="underline decoration-[#5F27BD] text-[#5F27BD] mt-2"
				/>
				<IconItem
					icon={<BsDot size={20} />}
					title="SEO Audits: The Off-Page Factors Affecting Your SEO"
					className="underline decoration-[#5F27BD] text-[#5F27BD] mt-2"
				/>
				<IconItem
					icon={<BsDot size={20} />}
					title="FAQs"
					className="underline decoration-[#5F27BD] text-[#5F27BD] mt-2"
				/>
			</ul>
		</div>
	);
};

export default TableOfContent;
