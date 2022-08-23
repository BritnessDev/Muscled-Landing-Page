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
    </div>)
}


export default Page