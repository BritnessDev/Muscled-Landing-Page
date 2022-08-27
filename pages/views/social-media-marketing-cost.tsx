import BlogArticle from "components/BlogArticle";
import FreeQuote from "components/FreeQuote";
import GetStartedForm from "components/GetStartedForm";
import Hero from "components/Hero";
import LearnMore from "components/LearnMore";
import Plans from "components/Plans";
import PricingQuestion from "components/PricingQuestion";
import SocialMeidaAdPricing from "components/SocialMediaAdPricing";
import SocialMediaPricing from "components/SocialMediaPricing";

function IndexPage() {
  return (
    <div>
      <Hero />
      <Plans />
      <PricingQuestion />
      <SocialMediaPricing />
      <SocialMeidaAdPricing />
      <GetStartedForm />
      <BlogArticle />
      <FreeQuote />
      <LearnMore />
    </div>
  );
}

export default IndexPage;
