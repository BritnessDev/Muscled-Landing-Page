import React from "react";
import { NextPage } from "next";
import { Hero, Section } from "components/Fawwaz/Sections";
import SpeedOptimizationSVG from "src/assets/svg/SpeedOptimizationSVG";
import Logo from "components/Fawwaz/Logo";
import logo from "src/assets/logo/logo1.png";
import Card from "components/Card";

 const Page: NextPage = () => {

	const list = [{"icon":true, "text":"15 hours quarterly"}, {"icon":true, "text":"$1,800 monthly investment"}, {"icon":true, "text":"Best for websites under 250 pages"}]
	const list2 = [{"icon":true, "text":"25 hours quarterly"}, {"icon":true, "text":"$3,600 monthly investment"}, {"icon":true, "text":"Best for websites under 250 pages"}]
	const list3 = [{"icon":true, "text":"35 hours quarterly"}, {"icon":true, "text":"$4,800 monthly investment"}, {"icon":true, "text":"Best for websites under 250 pages"}]

	return (<div>
        {/* First Section */}
			<div className=" bg-black-70 px-3 lg:px-0">
				<Hero
					title="Services for Improving Site Speed"
					description="Website speed optimization services are an often-overlooked strategy for great SEO. Your website will probably lose sales and income if it does not load quickly for visitors. Almost half of the web searchers will abandon a site after three seconds of waiting for it to load. Is your website fast enough to keep users coming back? If not, Muscled site speed optimization services can help. To speak with a specialist, please contact us."
					heroSVG={<SpeedOptimizationSVG className="w-80 lg:w-full" />}
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

		{/* pricing card section */}
		<Section>
			<h2 className="text-center py-10 text-3xl">Explore Site Speed Optimization Service Packages</h2>
			<div className="flex py-2 space-x-5">
				<Card subtitle="Standard Plan" description="$3,125 INITIAL INVESTMENT" title="25 hours" list={list} className="text-red-400 w-full max-w-[400px]" starIcon={1} type='pricing' />
				<Card subtitle="Standard Plan" description="$3,125 INITIAL INVESTMENT"  title="40 hours" list={list2} className="text-red-400 w-full max-w-[400px]" starIcon={2} type='pricing' />
				<Card subtitle="Standard Plan" description="$3,125 INITIAL INVESTMENT" title="50 hours" list={list3} className="text-red-400 w-full max-w-[400px]" starIcon={3} type='pricing' />
			</div>
		</Section>
    </div>)
}


export default Page