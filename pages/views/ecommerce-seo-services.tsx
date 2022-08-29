import React from "react";
import { NextPage } from "next";
import { Hero, Section, Testimonial, Footer  } from "components/Fawwaz/Sections";
import SEOMarketingSVG from "components/assets/svg/SEOMarketingSVG";
import Logo from "components/Fawwaz/Logo";
import logo from "components/assets/logo/logo1.png";
import Button from "components/Fawwaz/Button";
import {
	Card,
	CardHeader,
	CardContent,
	IconItem,
	CardFooter,
} from "components/Fawwaz/Card";
import cardBg from "components/assets/qwe.png";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillPhone, AiFillStar, AiOutlineCheck } from "react-icons/ai";
import { Input } from "components/Fawwaz/Form";
import { Table, TableOfContent, Td, Th } from "components/Fawwaz/Table";
import { FC } from "react";
import { FaListAlt } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";
import { BsDot } from "react-icons/bs"

 const Page: NextPage = () => {

	return (<div>
        {/* First Section */}
			<div className=" bg-black-70 px-3 lg:px-0">
				<Hero
					title="Ecommerce SEO Services: Earn More Sales With SEO Experts"
					description="Capture more online sales with ecommerce SEO services from WebFX. Access the team and tech that have helped our clients earn $3 billion in revenue, and use them to accelerate your earnings from the web. Learn more about our tech-enabled ecommerce SEO services now, or request a custom proposal for your store."
					heroSVG={<SEOMarketingSVG className="w-80 lg:w-full" />}
					input
				/>
			</div>
		{/* Our partner section */}
		<Section className="text-center pt-16">
            <h3 className="text-black-50 text-2xl">Our Partners</h3>

            <div className="pt-5 flex flex-wrap justify-between pb-12 gap-6">
                <Logo src={logo.src} width={154} height={34} />
                <Logo src={logo.src} width={154} height={34} />
                <Logo src={logo.src} width={154} height={34} />
                <Logo src={logo.src} width={154} height={34} />
                <Logo src={logo.src} width={154} height={34} />
            </div>
        </Section>

        			{/* Third section */}
			<Section>
				<h2 className="text-4xl text-center">
					Explore Ecommerece SEO Service Packages
				</h2>

				<p className="py-14 flex flex-wrap justify-center gap-1">

				</p>

				<div className="flex flex-wrap justify-center lg:justify-between gap-2">
					<Card className="rounded-sm border-2 max-w-[400px] w-full">
						<CardHeader title="STANDARD PLAN" rate="2,500">
							<AiFillStar className="card-icon fill-black-50" />
						</CardHeader>
						<CardContent className="space-y-11">
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="150 keyphrases optimized"
								className="mt-2"
							/>
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="30 pages optimized"
								className="mt-4"
							/>
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="6 content, outreach, UX or CRO assets per quarter"
								className="mt-4"
							/>
                            <IconItem
								icon={<FaCheckCircle size={15} />}
								title="8 custom dashboards"
								className="mt-4"
							/>
                            <IconItem
								icon={<FaCheckCircle size={15} />}
								title="Phone call, lead and revenue tracking dashboard"
								className="mt-4"
							/>

						</CardContent>
						<CardFooter />
					</Card>
					<Card className="rounded-sm border-2 max-w-[400px] w-full">
						<CardHeader
							title="PREMIUM PLAN"
							rate="5,000"
							type="premium">
							<div className="flex">
								<AiFillStar className="card-icon fill-black-70" />
								<AiFillStar className="card-icon fill-black-70" />
							</div>
						</CardHeader>
						<CardContent className="space-y-11">
                            <IconItem
								icon={<FaCheckCircle size={15} />}
								title="150 keyphrases optimized"
								className="mt-2"
							/>
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="30 pages optimized"
								className="mt-4"
							/>
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="6 content, outreach, UX or CRO assets per quarter"
								className="mt-4"
							/>
                            <IconItem
								icon={<FaCheckCircle size={15} />}
								title="8 custom dashboards"
								className="mt-4"
							/>
                            <IconItem
								icon={<FaCheckCircle size={15} />}
								title="Phone call, lead and revenue tracking dashboard"
								className="mt-4"
							/>
						</CardContent>
						<CardFooter />
					</Card>
					<Card className="rounded-sm border-2 max-w-[370px] w-full">
						<CardHeader
							title="ULTIMATE PLAN"
							rate="8,000"
							type="ultimate">
							<div className="flex">
								<AiFillStar className="card-icon fill-black-80" />
								<AiFillStar className="card-icon fill-black-80" />
								<AiFillStar className="card-icon fill-black-80" />
							</div>
						</CardHeader>
						<CardContent className="space-y-11">
                            <IconItem
								icon={<FaCheckCircle size={15} />}
								title="150 keyphrases optimized"
								className="mt-2"
							/>
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="30 pages optimized"
								className="mt-4"
							/>
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="6 content, outreach, UX or CRO assets per quarter"
								className="mt-4"
							/>
                            <IconItem
								icon={<FaCheckCircle size={15} />}
								title="8 custom dashboards"
								className="mt-4"
							/>
                            <IconItem
								icon={<FaCheckCircle size={15} />}
								title="Phone call, lead and revenue tracking dashboard"
								className="mt-4"
							/>
						</CardContent>
						<CardFooter />
					</Card>
				</div>

				<p className="underline text-center mt-14 mb-24 cursor-pointer">
					See Full Deliverables
				</p>
			</Section>

			{/* Section Fourth */}
			<div className="p-3 bg-red-10">
				<div className="flex flex-wrap gap-10 justify-center py-20">
					<div className="max-w-[760px] space-y-7">
						<h2 className="text-4xl">
							Ecommerce SEO Services That Just Supercharges Sales
						</h2>
						<p className="md:text-xl">
							<span>
								SEO has been one of the most effective ways to drive traffic up, but SEO can also be used to boost sales.
							</span>
							<br />
							<br />
							<span> With a client retention rate of along with a client recommendation score that flies over the industry average by We are the ecommerce SEO agency for businesses worldwide.</span>
							<br />
							<br />
                            <span>
                                Partner with Muscled for ecommerce SEO to unlock:
                            </span>
                            <br/>
                            <br/>
                            <ul>
                                <li>
                                A do-it-all solution to ecommerce SEO
                                </li>
                                <li>
                                A wide range of skillsets, including SEO, copywriting, development, and design
                                </li>
                                <li>
                                “MuscledSoftware”, a platform that leverages IBM Watson, Google AI, and billions of data points to provide instant recommendations for driving revenue. Bonus: “MuscledSoftware” will track and measure your ROI, too.
                                </li>
                                <li>
                                A custom strategy tailored to your business, industry, and goals
                                </li>
                            </ul>
							<span>
                             Your website will rank higher in search results for the terms used by your target audience thanks to our award-winning ecommerce SEO services and team, which will increase qualified visitors, conversions, and revenue.
							</span>
							<br />
							<br />
							<span>
                            With the help of our ecommerce digital marketing agency, you can now begin expanding your online business. Contact us right away to discuss our SEO services for e-commerce websites with a strategist in person.
							</span>
							<br />
							<br />
						</p>
					</div>
					<Card className="max-w-[440px] w-full p-6 rounded-md relative self-start">
						<img
							src={cardBg.src}
							alt={cardBg.src}
							className="absolute top-0 left-0 w-full h-full z-10"
						/>
						<p className="relative text-white max-w-[190px] z-20">
							Looking for custom plans and pricing? Request a
							proposal to receive yours.
						</p>
						<Button
							bgColor="bg-black"
							textColor="text-white"
							className="mt-6 relative z-20">
							Request a Proposal
						</Button>
					</Card>
				</div>
			</div>

			{/* Section Fifth */}
			<Testimonial />

            <div className="flex flex-col justify-center items-center mt-28">
                <p className="Poppins text-4xl font-bold">
                    Our Cost for Ecommerce SEO Services
                </p>
                <p className="Poppins text-xl font-thin w-9/12 mt-10">
                Learn more about what our ecommerce SEO services include by exploring our four ecommerce SEO packages, which we can customize to your business. All our ecommerce SEO experts are familiar with using and optimizing platforms like Shopify, WordPress, BigCommerce, and more for ecommerce SEO.
                </p>
                <div className="w-11/12 mt-10">
					<Table className="table-fixed">
						<thead>
							<tr>
								<Th
									className="text-left text-white rounded-tl-xl"
									content="Features"
								/>
								<Td
									className="text-center font-bold"
									content="Basic"
									type="basic"
								/>
								<Td
									className="text-center font-bold"
									content="Standard"
									type="standard"
								/>
								<Td
									className="text-center font-bold"
									content="Premium"
									type="premium"
								/>
								<Td
									className="text-center font-bold rounded-tr-xl"
									content="Ultimate"
									type="ultimate"
								/>
							</tr>
						</thead>
						<tbody>
							<tr className="text-center text-black-80">
								<Th
									className="text-left text-white font-normal"
									content="Quarterly Hours"
								/>
								<Td content="15 hours" type="basic" />
								<Td content="25 hours" type="standard" />
								<Td content="35 hours" type="premium" />
								<Td content="35 hours" type="ultimate" />
							</tr>
							<tr className="text-center text-black-80">
								<Th
									className="text-white text-left font-normal"
									content="Best for websites-"
								/>

								<Td content="Under 250 pages" type="basic" />
								<Td content="Under 500 pages" type="standard" />
								<Td content=">500+ pages" type="premium" />
								<Td content="500+ pages" type="ultimate" />
							</tr>
							<tr className="text-center text-black-80">
								<Th
									className="text-white text-left font-normal"
									content="Dedicated Project POC"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left"
									content="Audit of current website performance, optimization hours will be spent on the following items on based on audit results and priority:"
								/>
								<Td type="basic" />
								<Td type="standard" />
								<Td type="premium" />
								<Td type="ultimate" />
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Website Theme & Plugin Optimization"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Website/CSS Optimization"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Set and/or Reduction in http(s) Requests"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Removal of Unused Code"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Combine, Prioritization & Minification of CSS and JavaScript Files"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Image Size Optimization & Compression"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Gzip Compression"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Website & Browser Caching Setup and/or Configuration"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Optimize/Reduce Number of Redirects"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Font Delivery Optimization"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Performance Testing"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Host Recommendations"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Setup and/or Configuration of a CDN"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr className="text-center">
								<Th
									className="text-white text-left font-normal"
									content="Host Migration"
								/>
								<Td type="basic" content="One-time $1,500" />
								<Td type="standard" content="One-time $1,500" />
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="UX & UI Optimizations"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Quarterly Submission of URL Inspection"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Quarterly Performance Updates to Top 5 Pages with Most Traffic"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="Quarterly Core Mertics Reporting & Analytics (LCP, FID & CLS)"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr>
								<Th
									className="text-white text-left font-normal"
									content="450+ SME’s Behind Campaign Driving Results"
								/>
								<Td
									type="basic"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="standard"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="premium"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
								<Td
									type="ultimate"
									content={
										<AiOutlineCheck className="mx-auto fill-green-500" />
									}
								/>
							</tr>
							<tr className="text-center">
								<Th
									className="text-white text-left font-normal"
									content="Initial Investment"
								/>
								<Td type="basic" content="$3,125" />
								<Td type="standard" content="$6,250" />
								<Td type="premium" content="$3,750" />
								<Td type="ultimate" content="$3,750" />
							</tr>
							<tr className="text-center">
								<Th
									className="text-white text-left font-normal"
									content="Initial Investment"
								/>
								<Td type="basic" content="$1,800" />
								<Td type="standard" content="$3,600" />
								<Td type="premium" content="$4,800" />
								<Td type="ultimate" content="$4,800" />
							</tr>
							<tr className="text-center">
								<Th
									className="text-white text-left font-normal rounded-bl-xl"
									content={
										<>
											<p>
												Give Us a Call if You Need
												Information
											</p>
											<div className="flex gap-2 items-center mt-2 cursor-pointer">
												<AiFillPhone className="fill-sky-500" />
												<p className="text-sky-500 font-bold">
													888-601-5359
												</p>
											</div>
										</>
									}
								/>
								<Td
									type="basic"
									content={
										<Button
											bgColor="bg-black"
											textColor="text-white"
											className="mx-auto">
											Get Started
										</Button>
									}
								/>
								<Td
									type="standard"
									content={
										<Button
											bgColor="bg-black"
											textColor="text-white"
											className="mx-auto">
											Get Started
										</Button>
									}
								/>
								<Td
									type="premium"
									content={
										<Button
											bgColor="bg-black"
											textColor="text-white"
											className="mx-auto">
											Get Started
										</Button>
									}
								/>
								<Td
									type="ultimate"
									className="rounded-br-xl"
									content={
										<Button
											bgColor="bg-black"
											textColor="text-white"
											className="mx-auto">
											Get Started
										</Button>
									}
								/>
							</tr>
						</tbody>
					</Table>
                </div>
                <div className="w-11/12 mt-12 flex flex-row items-start justify-between">
                    <div className="w-2/3">
                        <h1 className="text-4xl">
                        What do our ecommerce SEO <br/>
                        services include?
                        </h1>
                    </div>
                    <div className="w-1/3">
                    <div className="order-1 col-span-1 lg:order-2 lg:col-span-2 lg:ml-auto md:w-full lg:max-w-[400px]">
			<div className="bg-[#F2F2F2] text-white rounded-md p-4 flex justify-between items-center">
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
				
			</ul>
		</div>
                    </div>
                </div>
            </div>
    </div>
)}


export default Page