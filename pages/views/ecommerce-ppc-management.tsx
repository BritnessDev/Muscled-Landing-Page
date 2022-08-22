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
					title="Ecommerce PPC Management Services: Give your ROAS a Workout!"
					description="People are now shopping online, and pay-per-click (PPC) ads can help you catch up. Muscled PPC Management Services will allow your store to use Google and Bing to get traffic and make sales. Why not see how much we can help you by requesting a free ecommerce PPC proposal today?"
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