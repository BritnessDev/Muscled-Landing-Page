import React from "react";
import { NextPage } from "next";

import { Section, Testimonial, Footer, Hero } from "components/Fawwaz/Sections";
import Button from "components/Fawwaz/Button";
import Logo from "components/Fawwaz/Logo";
import { Input } from "components/Fawwaz/Form";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	IconItem,
} from "components/Fawwaz/Card";
import VideoFrame from "components/Fawwaz/VideoFrame";
import { Table, Th, Td, TableOfContent } from "components/Fawwaz/Table";

import SEOAuditSVG from "src/assets/svg/SEOAuditSVG";
import logo from "src/assets/logo/logo1.png";
import sectionIcon from "src/assets/seo-box-icon.png";

import { AiFillPhone, AiFillStar, AiOutlineCheck } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

const Page: NextPage = () => {
	return (
		<div>
			<div className="min-h-[890px] bg-black-70 px-3 lg:px-0">
				<Hero
					title="Get a Complete Audit and Action Plan with SEO Audit
					Services."
					description="A thorough SEO audit is the quickest and most
					efficient way to figure out why your website isn't
					ranking as high as it should. Our SEO audit services
					are entirely transparent and analyze the technical,
					on-page, and off-page SEO of your website. Scroll
					down for more information, or contact us for a
					personalized proposal!"
					heroSVG={<SEOAuditSVG className="w-96 md:w-auto" />}
					input
				/>
			</div>

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

			<Section>
				<h2 className="text-4xl text-center mt-9">
					Explore SEO Marketing Service Plans
				</h2>

				<div className="max-w-[540px] mx-auto mt-10">
					<Card className="rounded-sm border-2">
						<CardHeader title="MARKETLEADERPLAN" rate="$8,000">
							<AiFillStar className="card-icon fill-black-50" />
						</CardHeader>
						<CardContent className="text-left space-y-11 pt-5">
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="70 pages reviewed"
								className="mt-2"
							/>
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="Future site strategy"
								className="mt-4"
							/>
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="Backlink report"
								className="mt-4"
							/>
							<IconItem
								icon={<FaCheckCircle size={15} />}
								title="Complete audit report upon completion"
								className="mt-4"
							/>
						</CardContent>
						<CardFooter />
					</Card>
				</div>
			</Section>

			<Section className="flex flex-wrap md:justify-center xl:justify-start gap-10 mt-60 py-10">
				<div className="max-w-[760px]">
					<h3 className="text-4xl">
						Not ranked first in search results? With SEO audit
						services, you can get answers.
					</h3>
					<p className="mt-5">
						Are you having trouble ranking in the major search
						engines and don't know why? Muscled- a search engine
						optimization leader, provides SEO audit services. We can
						analyze your website and develop a practical strategy to
						help you increase your online visibility.
					</p>

					<h5 className="font-bold text-xl mt-16">
						Our SEO auditing procedure includes <br /> the following
						steps:
					</h5>

					<ul className="list-decimal pl-6 my-8">
						<li>
							An overall assessment to determine your website's
							strengths and an SEO strategy.
						</li>
						<li>
							Identifying the on-page and off-page factors that
							influence search rankings
						</li>
						<li>
							A comprehensive SEO audit report that includes a
							competitive scorecard, backlink report, and site
							strategy for the future.
						</li>
					</ul>

					<p>
						Continue reading to find out more about our website SEO
						audit services and to see our SEO audit packages. If
						you'd like to speak with an SEO expert, please contact
						us.
					</p>
				</div>
				<div className="w-full md:w-[400px]">
					<div className="relative min-w-[200px] w-full max-w-[400px] h-[320px] mx-auto bg-white-gray md:mx-0">
						<VideoFrame className="absolute w-full h-full" />
					</div>
					<Card className="bg-[#3E5661] flex justify-start items-center w-[250px] h-[150px] p-6 mt-10 mx-auto md:mx-0 rounded-md">
						<Button bgColor="bg-black" textColor="text-white">
							Send Proposal
						</Button>
					</Card>
				</div>
			</Section>

			<Testimonial />

			<Section className="text-center pt-32">
				<h2 className="text-4xl text-black-80">
					Muscled provides Site Speed Optimization Services
				</h2>

				<p className="py-8 text-black-70">
					To view additional website speed optimization plans, swipe
					to the right on the table below.
				</p>
			</Section>

			<Section>
				<Table className="table-auto rounded-b-md">
					<thead>
						<tr>
							<Th
								className="text-left text-white rounded-tl-xl"
								content="Total initial project hours to be spent improving site speed, communication, and reporting"
							/>
							<Td
								className="text-center font-bold w-[480px] rounded-tr-xl"
								content="Ultimate One Time 25 hours"
								type="premium"
							/>
						</tr>
					</thead>
					<tbody>
						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Quarterly Hours"
							/>
							<Td content="35 hours" type="ultimate" />
						</tr>
						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Best for websites-"
							/>
							<Td content="500+ pages" type="ultimate" />
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Dedicated Project POC"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white"
								content="Audit of current website performance, optimization hours will be spent on the following items on based on audit results and priority:"
							/>
							<Td type="ultimate" />
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Website Theme & Plugin Optimization"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Website/CSS Optimization"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Set and/or Reduction in http(s) Requests"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Removal of Unused Code"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="450+ SME’s Behind Campaign Driving Results"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Initial Investment"
							/>
							<Td type="ultimate" content="$3,600" />
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Combine, Prioritization & Minification of CSS and JavaScript Files"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Image Size Optimization & Compression"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Gzip Compression"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Website & Browser Caching Setup and/or Configuration"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Optimize/Reduce Number of Redirects"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Font Delivery Optimization"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Performance Testing"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Host Recommendations"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Setup and/or Configuration of a CDN"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Host Migration"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="UX & UI Optimizations"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Quarterly Submission of URL Inspection"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Quarterly Performance Updates to Top 5 Pages with Most Traffic"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Quarterly Core Mertics Reporting & Analytics (LCP, FID & CLS)"
							/>
							<Td
								type="ultimate"
								content={
									<AiOutlineCheck className="mx-auto fill-green-500" />
								}
							/>
						</tr>

						<tr className="text-center text-black-80">
							<Th
								className="text-left text-white font-normal"
								content="Initial Investment"
							/>
							<Td type="ultimate" content="$3,750" />
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
			</Section>

			<Section className="text-center pt-32">
				<h2 className="text-4xl text-black-80">
					Muscled provides Site Speed Optimization Services
				</h2>

				<p className="py-8 text-black-70">
					To view additional website speed optimization plans, swipe
					to the right on the table below.
				</p>
			</Section>

			<Section className="grid grid-cols-1 lg:grid-cols-4 py-32 gap-10">
				<div className="order-2 lg:order-1 lg:col-span-2">
					<div className="space-y-10">
						<div className="space-y-10 seo-audit-article">
							<h2 className="text-4xl">
								How our SEO audit services function
							</h2>

							<p>
								Our website SEO audit services begin with a
								detailed analysis of your website (and your
								website analytics) to determine what action is
								required to best optimize it for search engines.
							</p>
							<p>
								Based on this analysis our company makes
								guidance for improving your website in order to
								improve your overall search engine rankings.
							</p>
							<p>
								These suggestions could include but are not
								limited to:
							</p>
							<ul className="list-disc pl-8">
								<li>Content duplication</li>
								<li>Broken links</li>
								<li>Dangling links</li>
								<li>Identical Tags</li>
								<li>Validation of HTML</li>
								<li>Web Copy editing</li>
								<li>Duplicate meta description</li>
								<li>
									Compatibility with browsers and resolutions
								</li>
								<li>Site statistics</li>
								<li>Error pages</li>
							</ul>

							<p>
								All of this is included in our off-page and
								on-page SEO audits.
							</p>
							<p>
								The elements listed above are just a few of the
								many that we will address as part of your SEO
								audit package. Each of these factors has an
								impact on attracting search engine crawlers and,
								as a result, customers to your site.
							</p>
							<p>
								Our comprehensive SEO audit will show you
								exactly where you can improve to begin ranking
								higher in search engines.
							</p>
						</div>

						<div className="space-y-10 seo-audit-article">
							<h2 className="text-4xl">
								How long does SEO auditing take?
							</h2>

							<p>
								The SEO audit project will last about one month.
							</p>
							<p>
								Our basic SEO audit service takes 30 days and
								the market leader option takes 45 days. During
								this time Muscled will totally analyze and
								assess your website using our SEO audit services
								to determine the best strategy for your website
								moving forward, as well as provide guidance on
								what to change to improve your site's organic
								search rankings.
							</p>
							<p>
								Following that, we'll show you our SEO audit
								report in detail so you can see areas for
								potential progress.
							</p>
						</div>

						<div className="space-y-10 seo-audit-article">
							<h2 className="text-4xl">
								Why should you invest in an SEO audit package?
							</h2>

							<p>
								Our SEO site audit services are designed for
								clients who are having difficulty ranking for
								target keywords but are unsure why. Perhaps you
								suspect that your website is too slow, but you
								can't prove it. Perhaps you suspect there is a
								problem with content duplication but lack the
								tools to investigate. This is where we step in.
							</p>
							<p>
								Our SEO auditing plans include a thorough
								investigation of all potential factors, ranging
								from critical on-page elements like title tags
								to comprehensive sitemaps. We'll examine your
								website to determine where and how your
								marketing strategy can be improved.
							</p>
							<p>
								SEO audits are recommended for anyone who is
								having difficulty ranking and needs solid,
								actionable advice on what to do next. An SEO
								audit package can also help businesses that have
								recently launched a website and want to know how
								to improve on their initial pages.
							</p>
							<p>
								Regardless of your requirements, SEO audits are
								the first step in developing a successful online
								marketing strategy.
							</p>
							<p>
								Here, at Muscled we specialize in several
								critical areas of SEO, ranging from traditional
								to local to e-commerce. This makes it simple for
								our team (and yours) to evaluate your SEO
								strategy and recognize opportunities.
							</p>
						</div>

						<div className="seo-audit-services-ads">
							<div className="relative z-10 text-white grid grid-cols-3 gap-10">
								<div className="col-span-2 space-y-10">
									<h3 className="text-4xl">
										Build Up Your Sales Game.
									</h3>
									<p>
										Our long list of services is here to
										help you grow your business with
										marketing strategies that are sure to
										pump your bottom-line metrics.
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

						<div className="space-y-10 seo-audit-article">
							<h2 className="text-4xl">
								SEO audits: The on-page factors that influence
								your SEO
							</h2>

							<p>
								What's the point of having a visually attractive
								website if no one ever visits it? There are a
								lot of websites that are beautiful, engaging,
								and well-crafted but simply won't rank in search
								engines, and the clients don't know why. Why
								doesn't a website rank well if it's visually
								appealing and offers a lot?
							</p>
							<p>
								The issue in these situations is frequently
								content in some form or another.
							</p>
							<p>
								This could mean that there isn't enough content
								on each page ("thin content"), that title tags
								and meta descriptions are similar or missing, or
								that multiple URLs point to the same page
								("duplicate content").
							</p>
							<p>
								With our SEO auditing services, Muscled will
								identify these on-page ranking barriers and
								recommend the necessary changes. Identifying and
								correcting these on-page factors can have an
								immediate and significant impact on your
								rankings.
							</p>
						</div>

						<div className="space-y-10 seo-audit-article">
							<h2 className="text-4xl">
								SEO audits: The off-page factors that influence
								your SEO
							</h2>

							<p>
								Off-page factors affect your organic search
								rankings in addition to on-page factors.
								Off-page factors account for nearly 80% of
								search engine ranking algorithms, making
								accurate off-page analysis critical. These
								factors are primarily concerned with links — the
								number of links you have, the anchor text used,
								and the location of these links.
							</p>
							<p>
								These off-page factors are invisible to the
								average web visitor and difficult to identify
								manually. Fortunately, here at Muscled we offer
								a suite of services that enable off-page
								analysis and comparison. Muscled will identify
								these difficult-to-identify factors and
								recommend a strategy to help you build your
								reputation and increase your online presence.
							</p>
						</div>

						<div className="space-y-10 seo-audit-article">
							<h2 className="text-4xl">
								SEO audits: The server files that influence your
								SEO
							</h2>

							<p>
								Several files on your server, such as .htaccess,
								robots.txt, and sitemap.xml, to name a few,
								govern how search engines access and index your
								content. Optimizing these files so that they are
								properly configured can have a significant
								impact on your rankings.
							</p>
							<ul className="list-decimal pl-6">
								<li>
									<strong>.htaccess:</strong> The .htaccess
									file is a configuration file that is
									distributed. You can use this file to
									specify and apply configuration directives
									to your site. This file allows you to direct
									how users and search engines are directed to
									specific pages on your site, as well as
									enable custom error pages and 301 redirects.
								</li>
								<li>
									<strong>robots.txt:</strong> The robots.txt
									file, which is placed in the root directory
									of a website, prevents web spiders from
									accessing specific folders on your website.
									When optimizing this file, it is critical to
									adhere to a specific format. This file is
									typically used for folders that dilute your
									website's theme or folders that provide a
									dead-end to robots, such as PDF files.
								</li>
								<li>
									<strong>Sitemap:</strong> The creation,
									optimization, and submission of a
									sitemap.xml file allow search engine spiders
									to crawl your site more effectively. It also
									allows visitors to scan your entire site for
									relevant information more quickly. This file
									provides a link and a brief description of
									that link for each page of your site,
									prioritizing each page and providing a
									hierarchy from the most important pages to
									the least important pages
								</li>
								<li>
									<strong>
										Other Server Configuration Elements:
									</strong>{" "}
									Other server configurations, such as
									accurate HTTP headers, accurate 404 error
									pages, and page load times, have an impact
									on your search engine traffic. Muscled will
									identify and recommend the best way for you
									to optimize these files in order to achieve
									the best results.
								</li>
							</ul>
						</div>

						<div className="space-y-10 seo-audit-article">
							<h2 className="text-4xl">
								FAQs about SEO Audit Services
							</h2>

							<p>
								Do you want to know more about SEO audit
								services? Check out our frequently asked
								questions:{" "}
							</p>

							{/* Cards */}
							<div className="bg-white p-4 space-y-6 rounded-lg">
								<div className="flex justify-between items-center ">
									<h3 className="text-semibold">
										What exactly are SEO audit services?
									</h3>
									<div className="border border-black-80 w-4" />
								</div>
								<p>
									SEO audit services are professional services
									that assess your site's SEO, including
									technical, off-page, and on-page SEO, and
									make recommendations for improving your
									site's SEO. In some cases, SEO audit
									services (such as those provided by our
									company) will include the implementation of
									these recommendations.
								</p>
							</div>

							<div className="bg-white p-4 space-y-6 rounded-lg">
								<div className="flex justify-between items-center ">
									<h3 className="text-semibold">
										How much does an SEO audit service cost?
									</h3>
									<div className="border border-black-80 w-4" />
								</div>
								<p>
									The cost of an SEO audit service is
									determined by several factors, including the
									size of your website. SEO audit services
									range in price from $650 to $14,000 per
									audit.
								</p>
							</div>

							<div className="bg-white p-4 space-y-6 rounded-lg">
								<div className="flex justify-between items-center ">
									<h3 className="text-semibold">
										What exactly are SEO audit services?
									</h3>
									<div className="border border-black-80 w-4" />
								</div>
								<p className="space-y-4">
									<span>
										To begin your SEO site audit, simply
										call or connect with one of our Internet
										marketing experts via this contact form.
									</span>
									<span>
										Our team will collaborate with you to
										determine which of our two SEO audit
										service plans is best for your website,
										and then we will schedule the process
										when it is convenient for you. Finally,
										we'll give you a report on our findings
										and walk you through the next steps in
										getting your website ranked highly.
									</span>
									<span>
										Whether you need a local SEO audit or a
										third party to conduct an online SEO
										audit, Muscled is your trustworthy,
										professional, and affordable solution.
									</span>
									<span>
										Don't forget that we offer SEO services
										to clients in Charlotte, SEO campaigns
										to clients in Cleveland, and pretty much
										everywhere in between!
									</span>
								</p>
							</div>
							{/* Cards end */}
						</div>
					</div>
				</div>
				<TableOfContent />
			</Section>

			<Section className="grid mt-10 gap-8 lg:grid-cols-3 mb-44">
				<div className="bg-white-bluish p-10">
					<h4 className="text-lg font-bold">Services</h4>
					<div className="text-sm space-y-5 mt-6">
						<p>Digital marketing Services</p>
						<p>SEO Services</p>
						<p>PPC Services</p>
						<p>Web Design Services</p>
						<p>Social Media Services</p>
						<p>Digital Advertising Services</p>
						<p>Content Marketing Services</p>
					</div>
				</div>
				<div className="bg-white-bluish p-10">
					<h4 className="text-lg font-bold">Knowledge Base</h4>
					<div className="text-sm space-y-5 mt-6">
						<p>Digital Marketing</p>
						<p>Content Marketing </p>
						<p>Social Media</p>
						<p>Web Design</p>
						<p>SEO</p>
						<p>PPC</p>
						<p>Amazon</p>
					</div>
				</div>
				<div className="bg-white-bluish p-10">
					<h4 className="text-lg font-bold">Our Company</h4>
					<div className="text-sm space-y-5 mt-6">
						<p>Digital Marketing Agency</p>
						<p>SEO Agency</p>
						<p>PPC Agency</p>
						<p>Content Marketing Agency</p>
						<p>Social Media Agency</p>
						<p>Web Design Agency</p>
						<p>Industries We Serve</p>
					</div>
				</div>
			</Section>

			<Footer />
		</div>
	);
};

export default Page;
