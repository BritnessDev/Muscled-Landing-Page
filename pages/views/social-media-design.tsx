import React from "react";
import { NextPage } from "next";
import { Hero, Section } from "components/Fawwaz/Sections";
import SEOMarketingSVG from "src/assets/svg/SEOMarketingSVG";
import Logo from "components/Fawwaz/Logo";
import logo from "src/assets/logo/logo1.png";

 const Page: NextPage = () => {

	return (<div>
        {/* First Section */}
			<div className=" bg-black-70 px-3 lg:px-0">
				<Hero
					title="Social Media Design Services provided by  Muscled"
					description="High-quality content and consistent branding are essential components of effective social media marketing. Because social media is a visual platform for your business, neither is possible without proper design work.  Muscled can assist-  our pricing for design services is completely transparent, so you always know where your money is going. Scroll down for more information, or fill out the form for a precise quote!"
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