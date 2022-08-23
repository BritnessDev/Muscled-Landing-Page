import React from "react";
import { NextPage } from "next";
import { Hero, Section } from "components/Fawwaz/Sections";
import SEOMarketingSVG from "components/assets/svg/SEOMarketingSVG";
import Logo from "components/Fawwaz/Logo";
import logo from "components/assets/logo/logo1.png";

 const Page: NextPage = () => {

	return (<div>
        {/* First Section */}
			<div className=" bg-black-70 px-3 lg:px-0">
				<Hero
					title="Social Media Services: Increase Your ROI With Social Media Marketing"
					description="Increase your return on investment (ROI) from social media platforms like Instagram, Facebook, and LinkedIn with services from Muscled. Our competitive social media management services give your business a head start in growing its brand awareness and revenue from social media."
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