import React from "react";
import { NextPage } from "next";
import { Hero, Section } from "components/Fawwaz/Sections";
import SEOMarketingSVG from "components/assets/svg/SEOMarketingSVG";
import logo from "components/assets/logo/logo1.png";
import Logo from "components/Fawwaz/Logo";

 const Page: NextPage = () => {

	return (<div>
        {/* First Section */}
			<div className=" bg-black-70 px-3 lg:px-0">
				<Hero
					title="With Muscled D2C Social Advertising Services, you can attract, engage, and sell."
					description="With over 5 billion active users on social media today, social platforms are prime territory for reaching a large direct-to-consumer (D2C) audience. If you sell B2C products, social ads increase your online reach, engage customers, and help you sell, all of which contribute to your bottom line. Continue reading to find out how Muscled fyi, a Meta Business Partner agency, can drive results with our direct-to-consumer social media advertising services!"
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
    </div>)
}


export default Page