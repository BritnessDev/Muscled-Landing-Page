import { FC } from "react";

import { Section } from ".";
import Button from "../Button";
import { Counter, CounterBox } from "../Counter";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import { Input } from "../Form";

import footerIcon from "../../../src/assets/footer-roket 1.png";
import userPhoto from "../../../src/assets/user.png";
import partnerLogo from "../../../src/assets/partner.png";

import { IProps } from "../../../types/types";

const Footer: FC<IProps> = ({ className }) => {
	return (
		<>
			<div
				className={`bg-red-600 text-white flex flex-wrap ${
					className ? className : ""
				}`}>
				<Section className="py-10">
					<div className="grid grid-cols-3 gap-5">
						<img
							className="col-span-1"
							src={footerIcon.src}
							alt="footer-icon"
						/>
						<div className="flex items-center gap-10 flex-wrap ml-0 col-span-2">
							<Counter className="text-white">
								<h4 className="text-lg md:text-2xl">
									We've driven over
								</h4>
								<div className="flex gap-2 md:gap-4">
									<CounterBox className="text-[#C40000]">
										6
									</CounterBox>
									<CounterBox className="text-[#C40000]">
										6
									</CounterBox>
									<CounterBox className="text-[#C40000]">
										6
									</CounterBox>
									<CounterBox className="text-[#C40000]">
										6
									</CounterBox>
									<CounterBox className="text-[#C40000]">
										6
									</CounterBox>
									<CounterBox className="text-[#C40000]">
										6
									</CounterBox>
								</div>
								<h4 className="text-lg md:text-2xl">
									leads for clients.
								</h4>
							</Counter>
						</div>
					</div>
					<p className="font-semibold text-2xl py-6">
						Discover how we can help your business grow
					</p>
					<div className="relative w-full max-w-[600px]">
						<Input
							placeholder="Enter your website"
							className="w-full md:py-6"
							type="text"
						/>
						<Button
							bgColor="bg-[#000000]"
							textColor="text-white"
							className="md:absolute md:top-3 md:right-4 mt-4 md:mt-0">
							Send me a Proposal
							<BiRightArrowAlt />
						</Button>
					</div>
				</Section>
				<div className="w-full lg:w-4/12 bg-red-800 pt-24 pl-4 pr-24 text-right pb-12">
					<p className="text-2xl">
						MUSCLED has been a pleasure to work with on our SEO
						needs and I look forward to working with them on future
						projects.
					</p>
					<div className="font-bold mt-9">
						<h4>Owner</h4>
						<p>ARIZONA GARAGE DOOR SUPPLIER</p>
					</div>
					<div className="flex items-center gap-4 justify-end mt-9">
						<Button
							bgColor="bg-white-70"
							textColor="text-black"
							rounded>
							<AiOutlineArrowLeft size={15} />
						</Button>
						<Button
							bgColor="bg-white"
							textColor="text-black"
							rounded>
							<AiOutlineArrowRight size={15} />
						</Button>
					</div>
				</div>
			</div>
			<div className="w-full bg-red-900 py-10 rounded-t-3xl -mt-6 relative flex items-center">
				<Section>
					<div className="flex flex-wrap justify-center items-center gap-10 xl:gap-32">
						<div className="flex flex-wrap gap-10 justify-center items-center md:justify-start">
							<div className="relative">
								<div className="footer-img" />
								<div className="footer-img-border" />
							</div>
							<div className="text-white flex flex-col justify-between">
								<p>
									Ready to speak with a marketing expert? Give
									us a ring
								</p>
								<h3 className="text-4xl">508-504-9466</h3>
							</div>
						</div>
						<div className="flex text-white gap-10 items-center">
							<div className="flex flex-col font-semibold">
								<h4 className="text-xl text-right">
									1.6 million
								</h4>
								<p className="text-xs">Hours of expertise</p>
							</div>
							<div className="flex flex-col font-semibold">
								<h4 className="text-xl text-right">450+</h4>
								<p className="text-xs">
									Digital Marketing
									<br />
									Masters On Staff
								</p>
							</div>
							<div className="flex flex-col font-semibold">
								<h4 className="text-xl text-right">1,128 </h4>
								<p className="text-xs">Website Launched</p>
							</div>
						</div>
					</div>
				</Section>
			</div>
			<div className="w-full bg-black-footer">
				<Section className="grid lg:grid-cols-5 py-16 gap-10">
					<div className="text-white">
						<h3 className="font-semibold text-2xl">Services</h3>
						<div className="text-white-70 space-y-10 mt-11">
							<p>Digital Marketing Services</p>
							<p>SEO Services</p>
							<p>PPC Services</p>
							<p>Web Design Services</p>
							<p>Social Media Services</p>
							<p>Digital Advertising Services</p>
							<p>Content Marketing Services</p>
						</div>
					</div>
					<div className="text-white">
						<h3 className="font-semibold text-2xl">
							Knowledge Base
						</h3>
						<div className="text-white-70 space-y-10 mt-11">
							<p>Digital Marketing</p>
							<p>Content Marketing</p>
							<p>Social Media</p>
							<p>Web Design </p>
							<p>SEO</p>
							<p>PPC</p>
							<p>Amazon</p>
						</div>
					</div>
					<div className="text-white">
						<h3 className="font-semibold text-2xl">Company</h3>
						<div className="text-white-70 space-y-10 mt-11">
							<p>Digital Marketing Agency</p>
							<p>SEO Agency</p>
							<p>PPC Agency</p>
							<p>Content Marketing Agency</p>
							<p>Social Media Agency</p>
							<p>Web Design Agency</p>
							<p>Industries We Serve</p>
						</div>
					</div>
					<div className="text-white">
						<h3 className="font-semibold text-2xl">Resources</h3>
						<div className="text-white-70 space-y-10 mt-11">
							<p>About Us</p>
							<p>Contact Us</p>
							<p>Careers</p>
							<p>Phishing Scam Alert</p>
							<p>Locations</p>
							<p>Community Impact</p>
							<p>Tools</p>
						</div>
					</div>
					<div className="text-white space-y-10">
						<p className="text-white-70 text-xs">
							REVENUE DRIVEN FOR OUR CLIENTS
						</p>
						<h3 className="font-semibold text-2xl">
							$3,021,182,299
						</h3>
					</div>
				</Section>
				<Section>
					<div className="border border-white" />
					<div className="grid md:grid-cols-2">
						<div className="py-16 text-white-70 space-y-4">
							<p className="text-xs">
								WebFX® 1995-2022 | Celebrating 25+ Years of
								Digital Marketing Excellence
							</p>
							<div className="text-xs flex space-x-4">
								<p>Call Toll Free: 508-504-9466</p>
								<p>Privacy & Terms of Use</p>
								<p> Sitemap</p>
							</div>
						</div>
						<div className="grid grid-cols-3 lg:grid-cols-5 items-center gap-6">
							<img
								src={partnerLogo.src}
								alt="partner-logo"
								className="object-cover"
							/>
							<img
								src={partnerLogo.src}
								alt="partner-logo"
								className="object-cover"
							/>
							<img
								src={partnerLogo.src}
								alt="partner-logo"
								className="object-cover"
							/>
							<img
								src={partnerLogo.src}
								alt="partner-logo"
								className="object-cover"
							/>
							<img
								src={partnerLogo.src}
								alt="partner-logo"
								className="object-cover"
							/>
						</div>
					</div>
				</Section>
			</div>
		</>
	);
};

export default Footer;
