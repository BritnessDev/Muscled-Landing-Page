import React from "react";
import { NextPage } from "next";

// components
import { Section, Testimonial, Footer, Hero } from "components/Fawwaz/Sections";
import { Input } from "components/Fawwaz/Form";
import Button from "components/Fawwaz/Button";
import Logo from "components/Fawwaz/Logo";
import {
	Card,
	CardHeader,
	CardContent,
	IconItem,
	CardFooter,
} from "components/Fawwaz/Card";

import { Table, TableOfContent, Td, Th } from "components/Fawwaz/Table";

// assets
// SVG
import SEOMarketingSVG from "components/assets/svg/SEOMarketingSVG";
import logo from "components/assets/logo/logo1.png";
import cardBg from "components/assets/qwe.png";
import sectionIcon from "components/assets/1.png";

import { AiFillPhone, AiFillStar, AiOutlineCheck } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

const Page: NextPage = () => {
	return (
		<>
			{/* First Section */}
			<div className="min-h-[890px] bg-black-70 px-3 lg:px-0">
				<Hero
					title="Build Your Page’s SEO with MUSCLED: Boost Your
					Company’s Performance & Profit"
					description="MUSCLED DIGITAL AGENCY is one of the most reliable
					SEO Services Agencies in the market, and that came
					from our clients. We are a complex
					first-principles-approach, e-commerce agency. We
					track data, read data, and make decisions based on
					data. You are to expect a world-class strategy
					tailored for your company, a plan focused on results
					and revenue through the services and technology we
					offer with SEO."
					heroSVG={<SEOMarketingSVG className="w-80 lg:w-full" />}
					input
				/>
			</div>

			{/* Second section */}
			<Section className="text-center pt-16">
				<h3 className="text-black-50 text-2xl">SEO TOOLS</h3>

				<div className="pt-5 flex flex-wrap justify-center lg:justify-between pb-12 gap-6">
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
					Explore SEO Marketing Service Plans
				</h2>

				<p className="py-14 flex flex-wrap justify-center gap-1">
					Need help?
					<span className="underline cursor-pointer">
						Schedule a call now
					</span>
				</p>

				<div className="flex flex-wrap justify-center lg:justify-between gap-2">
					<Card className="rounded-sm border-2 max-w-[400px] w-full">
						<CardHeader title="STANDARD PLAN" rate="2,500">
							<AiFillStar className="card-icon fill-black-50" />
						</CardHeader>
						<CardContent className="space-y-11">
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="4 initial website user testing videos"
								className="mt-2 justify-center"
							/>
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="Shopping cart abandonment testing"
								className="mt-4 justify-center"
							/>
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="Heatmap and click stream testing on 8 pages"
								className="mt-4 justify-center"
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
								title="4 initial website user testing videos"
								className="mt-2 justify-center"
							/>
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="Shopping cart abandonment testing"
								className="mt-4 justify-center"
							/>
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="Heatmap and click stream testing on 8 pages"
								className="mt-4 justify-center"
							/>
						</CardContent>
						<CardFooter />
					</Card>
					<Card className="rounded-sm border-2 max-w-[400px] w-full">
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
								title="4 initial website user testing videos"
								className="mt-2 justify-center"
							/>
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="Shopping cart abandonment testing"
								className="mt-4 justify-center"
							/>
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="Heatmap and click stream testing on 8 pages"
								className="mt-4 justify-center"
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
							The Digital Workout That Grows Your Traffic and
							Revenue through SEO
						</h2>
						<p className="md:text-xl">
							<span>
								Don’t let your page be buried. If you’re looking
								for ways to improve your website, your best bet
								will be SEO.
							</span>
							<br />
							<br />
							<span>But What is SEO?</span>
							<br />
							<br />
							<span>
								SEO is a digital marketing strategy that helps
								your website rank higher on Google, Bing, and
								other search engines on the internet. Some of
								its known techniques are optimizing your page’s
								keywords to building your internal links. The
								more visible your website is, the more you’re
								likely to accumulate the attention of your
								prospective customers, hence, the more likely
								you’ll be able to increase your revenue.
							</span>
							<br />
							<br />
							<span>
								Muscled Digital Agency is the only workout your
								page needs when it comes to SEO. From on-page
								SEO, off-page SEO, and technical SEO, you’re
								sure to hook those warm and hot customers to
								your business without investing a lot of work.
							</span>
							<br />
							<br />
							<span>
								How about you boost your performance today
							</span>
							<br />
							<br />
							<span>
								Reach out to us and chat with an expert from our
								SEO team about developing your website’s
								performance and profit.
							</span>
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

			{/* Section Sixth */}
			<Section>
				<div className="text-center mt-24 mb-10">
					<h2 className="text-4xl">
						Muscled Digital Agency Services
					</h2>
					<p className="mt-10">
						Our plans are tailored specifically for our partners,
						but help yourself and scroll a bit down to see the
						deliverables you can expect from our SEO team. We have
						many SEO techniques to work with, and our SEO team
						checks each one’s effectiveness to push your business
						further and stand atop its competitors.
					</p>
					<p className="mt-10">
						{" "}
						You can get those SEO techniques today!
					</p>
				</div>

				<div>
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
			</Section>

			<Section className="grid grid-cols-1 lg:grid-cols-4 py-32 gap-10">
				<div className="order-2 lg:order-1 lg:col-span-2">
					<div className="space-y-10">
						{/* First */}
						<div className="space-y-10">
							<h2 className="text-4xl">
								Our First-Principle and Data-Driven SEO Process
							</h2>
							<div>
								Take a look at our SEO process, which improved
								the performance and capacity of our client’s
								websites and businesses.
							</div>

							<ul className="list-disc pl-10">
								<li>Client and Competitor Analysis</li>
								<li>Website Optimization</li>
								<li>Content Creation</li>
								<li>Keyword Research</li>
								<li>Link Building</li>
								<li>Testing</li>
							</ul>

							<h4 className="text-lg font-bold">
								Client and Competitor Analysis
							</h4>

							<div>
								<p>
									A dedicated SEO consultant will look into
									your company, your website, and your
									competitors in the same industry. Questions
									will be asked to see what works and what
									doesn't. Trends and previous market patterns
									will be examined. These data will pave the
									way for your website’s SEO roadmap.
								</p>
								<ul className="list-disc pl-10">
									<li>In-depth Competitor Analysis</li>
									<li>Site & Server Analysis</li>
									<li>Analyze 200+ On-Site SEO Factors</li>
								</ul>
							</div>

							<h4 className="text-lg font-bold">
								Website Optimization
							</h4>

							<div>
								<p>
									Hundreds of changes from the biggest design
									choices down to the finest detail will be
									made to your website. Google needs to be
									familiarized with your site’s identity. The
									more Google knows you, the more they’re
									inclined to refer you to people searching
									for the products and services you provide. A
									dedicated web development team will handle
									it, and our SEO Team will be there to take
									care of your technical SEO needs to boost
									the speed, structure, and functionality of
									your website.
								</p>
								<ul className="list-disc pl-10">
									<li>
										Attention-grabbing titles & meta
										descriptions
									</li>
									<li>Improve usability</li>
									<li>Update Site Architecture</li>
								</ul>
							</div>

							<h4 className="text-lg font-bold">
								Content Mapping
							</h4>
							<div>
								<p>
									The meat of your website is what would lead
									users into the purchasing funnel. Topic
									suggestions will be mapped and be provided
									along with a professional copy and quality
									short and long-form content, not to only
									boost your website’s search engine ranking
									but also your website’s authority, bringing
									more attention and growth to your business.
								</p>
								<ul className="list-disc pl-10">
									<li>Website SEO Copy That Converts</li>
									<li>Longform Copy That Educates</li>
									<li>
										Informative Blog Posts That Intrigue
									</li>
								</ul>
							</div>

							<h4 className="text-lg font-bold">
								Keyword Research
							</h4>
							<div>
								<p>
									A thorough keyword research process is
									essential. The data that we’ll acquire will
									help us define your audience and direct the
									hottest traffic to your site. You’re sure to
									secure fresher leads, high-value sales, and
									customers, among others.
								</p>
								<ul className="list-disc pl-10">
									<li>Competitor Keyword Analysis</li>
									<li>Keyword Mapping Report</li>
									<li>Advanced Rank Tracking</li>
								</ul>
							</div>

							<h4 className="text-lg font-bold">
								Earned media & links
							</h4>
							<div>
								<p>
									Off-page SEO is also crucial to get your
									page right at the top of your target’s
									search results. A dedicated content
									marketing team will help you create new
									options and opportunities for you to build
									links and relationships with trusted experts
									in your industry.
								</p>
								<ul className="list-disc pl-10">
									<li>Content Promotion</li>
									<li>Relevant Mentions From Blogs/Press</li>
									<li>Viral Marketing Campaigns</li>
								</ul>
							</div>

							<h4 className="text-lg font-bold">Testing</h4>
							<div>
								<p>
									Relevant, warm to hot customers, and organic
									search traffic is where we start. Muscled
									Digital Agency offers a partnership. We will
									make sure that your website will continue to
									function at its best as we make continual
									improvements to your SEO marketing
									strategies.
								</p>
								<ul className="list-disc pl-10">
									<li>Conversion Path Analysis</li>
									<li>Calls-to-action Improvements</li>
									<li>
										Continual Improvements VIA ROI Tracking
									</li>
								</ul>
							</div>

							<div className="seo-marketing-services-ads">
								<div className="relative z-10 text-white grid grid-cols-3 gap-10">
									<div className="col-span-2 space-y-10">
										<h3 className="text-4xl">
											Build Up Your Sales Game.
										</h3>
										<p>
											Our long list of services is here to
											help you grow your business with
											marketing strategies that are sure
											to pump your bottom-line metrics.
										</p>
									</div>
									<div className="col-span-1 self-end">
										<img src={sectionIcon.src} alt="1" />
									</div>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-2 relative z-10 mt-24">
									<Input
										type="text"
										placeholder="Enter Your Website Link"
										className="text-sm md:col-span-2"
									/>
									<Button
										bgColor="bg-black"
										textColor="text-white">
										<span className="text-sm md:col-span-1">
											Send Proposal
										</span>
									</Button>
								</div>
							</div>
						</div>

						{/* Second */}
						<div className="space-y-10">
							<h2 className="text-4xl">
								What does the MUSCLED SEO Management Service
								look like?
							</h2>

							<p>
								SEO is what you need to build your online
								presence. And having a better online presence
								means more traffic, better leads, and more
								revenue. SEO is critical to the success of any
								company’s business model.
							</p>

							<p>
								But SEO is more complicated than you think. SEO
								is an umbrella term for many smaller strategies
								that work to improve your search engine rankings
								to ultimately make your website an effective
								money-making machine.
							</p>

							<div>
								<p>
									Here are the core SEO strategies that we use
									to optimize our websites.
								</p>
								<ul className="list-disc pl-10">
									<li>Client Site SEO Auditing</li>
									<li>Keyword Research</li>
									<li>Content creation and implementation</li>
									<li>On-page optimization</li>
								</ul>
							</div>

							<h4 className="text-lg font-bold">
								Client Site SEO Auditing
							</h4>
							<p>
								We need to know what works and what doesn’t. We
								always start with our team doing a technical
								audit. Your dedicated SEO expert is set to
								discover your areas of improvement and
								opportunities to mold your own SEO strategy.
							</p>
							<div>
								<p>We will be looking at:</p>
								<ul className="list-disc pl-10">
									<li>Conversion Path Analysis</li>
									<li>Calls-to-action Improvements</li>
									<li>
										Continual Improvements VIA ROI Tracking
									</li>
								</ul>
							</div>
							<p>
								Equipped with SEO tools, our team of experts
								will take a multi-pronged approach to your
								site’s SEO audit to procure a competitive SEO
								strategy for your company.
							</p>

							<h4 className="text-lg font-bold">
								Keyword research
							</h4>
							<p>
								You need to be able to have the highest chance
								to reach your target audience. It will be
								essential for us to tailor your keywords, among
								your other strategies, to your ideal client or
								customer.
							</p>
							<p>
								Your content, blog posts, sales pages, and
								landing pages alike, are built by keywords and
								phrases that people search for online. Our job
								starts with providing topics to optimize your
								content to not only reach your potential
								customers but also persuade them that your page
								has the answer to their problems. If all goes
								well, phone calls, schedules, and purchases
								should follow.
							</p>
							<p>But what is Keyword Research?</p>
							<p>
								Keyword Research is investigating what people
								put in their search engines like Google, and
								using them strategically in your content to make
								them more relevant to your users, should they
								search for something related to your company. It
								is a fundamental practice that will let you gain
								insight into what to use in your title, tags,
								content structure, and more.
							</p>

							<h4 className="text-lg font-bold">
								Content Mapping and Creation
							</h4>
							<p>
								Content is as important in search engine
								rankings. An effective SEO strategy won’t work
								without it. The content to be made will depend
								on the keywords that are relevant to your
								business and industry. Online or offline,
								effective content will allow you to reach your
								target audience.
							</p>
							<p>
								Here are a few of the types of content that you
								can produce in your site.
							</p>
							<ul className="list-disc pl-10">
								<li>
									<strong>Blogs</strong> are usually short
									pieces of content, around 1500 words or
									less. People love to follow niche blogs if
									they’ve deemed it reliable and easy to read.
									Blogs that are over 2000 words long that
									provides extensive information about a given
									subject is called longform content.
								</li>
								<li>
									<strong>Service pages</strong> details the
									servies you offer to your customers. They’re
									most beneficial to clients that would like
									to read what they could be paying for.{" "}
								</li>
								<li>
									<strong>Product pages</strong> provide the
									descriptions and specifications of the
									products that you offer. The quality of
									these product pages make or break sales.
								</li>
							</ul>

							<h4 className="text-lg font-bold">
								On-page optimization
							</h4>

							<p>
								On-page SEO is also essential among all the
								other SEO strategies. It also refers to how you
								optimize your SEO elements on your website.
							</p>
							<p>
								Content is a part of it as much as the page’s
								speed and overall design. With Muscled being
								your partner, we will take a full-circle
								approach to on-page SEO by focusing on:
							</p>
							<ul className="list-disc pl-10">
								<li>
									<strong>Page speed.</strong> Keeping the
									attention and patience of your site’s
									viewers is important so the page needs to
									load in three seconds or less. Your page
									load times sets your prospect customer’s
									expectations, and Google appreciates it if
									your site is perceived as reliable.
								</li>
								<li>
									<strong>Multimedia Presence.</strong>{" "}
									Engagement will also be a priority. Images,
									videos and other graphics will be used among
									the sites other interactive elements to keep
									the user to be fully engaged with your
									website.
								</li>
								<li>
									<strong>Device Accessibility.</strong> We
									will ensure that your website is responsive
									to the point that smartphone and tablet
									users will feel as though they’re using a
									desktop computer. This includes scaling all
									the other graphics on your page dependingon
									the device’s dimensions. This is a huge plus
									for new users and Google as well.
								</li>
								<li>
									<strong>Quality Content.</strong> Good
									quality content is essential for receiving
									high-quality links. Establishing your site’s
									reliability through the content you produce
									and how you display them through structure
									and readability makes Google push you higher
									through the search engine rankings.
								</li>
							</ul>

							<p>
								These are one of the many on-page SEO tactics
								that we use to boost your website’s performance.
							</p>
						</div>

						{/* Third */}
						<div className="space-y-10">
							<h2 className="text-4xl">
								How do I choose the BEST SEO company to help me?
							</h2>
							<p>
								You have to consider a few qualities that are
								common with most SEO companies. You’re expected
								to compare one to other SEO agencies, but its
								essential for you to think about the services
								they offer because SEO optimization is a
								long-term strategy that could make or break your
								business.
							</p>

							<p>
								Working with that scale, you want an experienced
								hand guiding your steps with care, not a person
								selling the idea of SEO for easy money. Here are
								the two essential qualities that you could look
								for your potential partners.
							</p>

							<h4 className="text-lg font-bold">
								1. Transparency and Integrity
							</h4>
							<p>
								You want an agency that’ll explain to you what
								they’ll do to help you until everything is done.
								They’re pricing needs to be justified. Even if
								you’re a small business looking to have an
								online presence, you want an SEO agency that’s
								open and honest.
							</p>
							<p>
								Look for a company that sets their price
								up-front. This doesn’t only help them establish
								their integrity as a partner, it also saves both
								of your time as it will let you know if the
								company is even good for your budget.
							</p>

							<h4 className="text-lg font-bold">
								2. Portfolio and Testimonials
							</h4>
							<p>
								Testimonials are a clear sign of what the SEO
								agency has done for its customers in the past.
								Most SEO agencies aren’t backed by their
								services, they’re backed by their previous
								clients that enjoyed and were satified by their
								work.
							</p>
							<p>
								Less testimonials and even a thinner portfolio
								means that they may not have been in business
								long enough to gague how they could serve their
								clients better. There is also a chance that they
								couldn’t provide what they had promised.
							</p>
							<p>
								One thing to look at too, is if they had won any
								awards. Were they recognized for their
								strategies? If that’s a yes, then they’re
								probably an SEO agency that’s worth your time.
							</p>
						</div>

						{/* Fourth */}
						<div className="space-y-10">
							<h2 className="text-4xl">
								How can SEO help my business grow?
							</h2>
							<p>
								There’s no way to be sure about how much your
								site will grow through SEO, but you can rest
								easy that your site will at least have better
								search engine rankings, see more internet
								trafic, and even have more customers making that
								sale.
							</p>

							<p>Here’s how that can happen:</p>

							<ul className="list-decimal pl-10">
								<li>
									Having the right keyword and building your
									content around it down to your meta tags,
									alternate tags and URL, you’ll have the best
									chance of ranking for it when people start
									searching that word or term in Google.
								</li>
								<li>
									Ranking high means more traffic. Studies
									show that the page that took first place in
									the first results page receives 33% of the
									clicks, while the second one receives around
									15%. If you can get to the top position,
									more and more user interaction is bound to
									go your way.
								</li>
								<li>
									A boost in site traffic means a boost in
									potential customers. If you’ve attracted
									organic traffic into your page and what it
									contained was content that are informative,
									interactive, and high quality, you’ll have
									more time and opportunities to persuade them
									to purchase your products or services.
								</li>
								<li>
									Increased interaction and user conversion is
									a telltale sign of a growing business. It
									shows that your SEO strategies are working
									and driving results. The more your business
									thrive, the more potential it has to grow
									bigger.
								</li>
							</ul>

							<p>
								With SEO plans tailored to fit your business the
								best, your business will be able to make the
								best out of your company’s sudden boost in
								performance. SEO is everywhere. Whether you’re
								just looking to a local pizza place or a gourmet
								restaurant on another city, what appears to you
								first is those that make the best of their SEO
								strategy.
							</p>
						</div>

						{/* Fifth */}
						<div className="space-y-10">
							<h2 className="text-4xl">
								Your SEO Strategy Needs to be Competitive
							</h2>
							<p>
								Wether you’re new or experienced with SEO, a
								dedicated team will help your company be at its
								fullest. Boost your performance, get better
								rankings, and see greater profit margins. Get
								your website Muscled today!
							</p>
						</div>

						{/* Sixth */}
						<div className="space-y-10">
							<h2 className="text-4xl">
								FAQs about SEO services
							</h2>
							<h4 className="text-lg font-bold">What is SEO?</h4>
							<p>
								SEO or search engine optimization is a set of
								strategies that allows websites to rank well on
								search engine results when people search for a
								certain topic.
							</p>

							<h4 className="text-lg font-bold">
								How does SEO work?
							</h4>

							<p>
								SEO provides a structure to be referenced for
								your website and content that should suit the
								user’s needs, which goes in line with the most
								relevant and useful content based on the topic
								they’re looking for. SEO strategies aim to make
								your site more accessible to users by allowing
								Google to understand what makes your site
								valuable.
							</p>

							<h4 className="text-lg font-bold">
								What are SEO services?
							</h4>
							<p>
								Search engine optimization or SEO services are
								digital marketing services that improve a
								website’s rankings in search results for
								keywords relevant to a given industry or topic.
								These improved rankings increase the business’s
								visibility in search engines and drive qualified
								traffic to its website. For the best results,
								SEO services should include a custom strategy
								and various types of SEO tactics, including
								on-page, off-page, and technical SEO.
							</p>

							<h4 className="text-lg font-bold">
								How do I know which type of SEO service I need?
							</h4>
							<p>
								There are various factors that should be
								examined to identify what’s ideal for your
								business. Here’s a small list that should help
								you decide.
							</p>

							<ul className="list-disc pl-10">
								<li>
									Local SEO is for reaching users in your
									local area. This is best for businesses with
									physical locations.{" "}
								</li>
								<li>
									Ecommerce SEO is for online businnses. This
									will help your business be discovered by
									relevant shoppers.
								</li>
								<li>
									Enterprise SEO is for large businesses with
									massive websites. They have more freedom on
									chasing on short-tail keywords.
								</li>
							</ul>

							<p>
								Still, nothing beats an SEO plan that covers the
								three essential aspects of SEO such has on-page
								optimization, off-page optimization and
								technical SEO, especially when it was provided
								by an SEO expert that took their time to study
								your business in the light of its competitors.
							</p>

							<p>
								Muscled Digital Agency offers far more than just
								SEO. We also work with internet marketing
								services, which works the best with our SEO
								plans.
							</p>

							<ul className="list-disc pl-10">
								<li>
									<strong>Content Marketing.</strong> Let our
									team of experts help your business make
									content that your users will read, act on,
									and even share with their friends.
								</li>
								<li>
									<strong>Web Design and Development.</strong>{" "}
									Make your website attractive, easy to use,
									and more accessible with other devices
									without compromising our SEO practices.
								</li>
								<li>
									<strong>Email Marketing.</strong> Let our
									team connect with your potential clients via
									search results and build relationships with
									them through email.
								</li>
								<li>
									<strong>Social Media Marketing.</strong> Our
									team will be ready if you’re looking to
									expand your online presence through Facebook
									ads and many more.
								</li>
							</ul>

							<p>
								Our services also include landing page design,
								video marketing, and more, making us the best
								fit to power up your website in terms of
								performance and potential profit. If you’re
								interested in maximizing your business’
								potential through SEO that’s driven by results,
								Muscled Digital Agency is here for you, and
								we’re only one call away!
							</p>
						</div>
					</div>
				</div>
				<TableOfContent />
			</Section>

			<Footer />
		</>
	);
};

export default Page;
