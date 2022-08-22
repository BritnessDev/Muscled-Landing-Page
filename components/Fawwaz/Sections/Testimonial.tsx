import { FC } from "react";

import { Section } from "../Sections";
import Button from "../Button";
import VideoFrame from "components/Fawwaz/VideoFrame";


const Testimonials: FC = () => {
	return (
		<div className="bg-black">
			<Section className="flex flex-wrap justify-center py-20 px-3 gap-32">
				<div className="max-w-[560px] text-accent-white">
					<p className="text-xl md:text-2xl mb-8">
						“Muscled has gone above and beyond to make me happy. So
						far, after a few months, I have already seen significant
						improvement in rankings and conversions, and they have
						also greatly improved the speed of my site.”
					</p>

					<p className="font-bold text-xl md:text-2xl mb-8">Owner</p>

					<p className="font-bold text-base md:text-xl mb-14">
						Company Name
					</p>

					<Button bgColor="bg-[#C40000]" textColor="text-white">
						See Our Client's Testimonials
					</Button>
				</div>
				<div className="w-[500px] min-h-[400px] h-full bg-white-gray relative">
					<VideoFrame className="w-full h-full absolute" allowFullScreen frameBorder="0" />
				</div>
			</Section>
		</div>
	);
};

export default Testimonials;
