import styles from "styles/components/BlogArticle.module.css";

import { BookIcon, MenuIcon } from "./Icons";
import TableOfContents from "./TableOfContents";
import Outsirce from 'components/assets/outsirce.png'
import CostTable from 'components/assets/cost-table.png'
import FlowChart1 from 'components/assets/flow-chart-1.png'

function BlogArticle() {
  return (
    <section className={styles.wrapper}>
      <aside className={styles.wrapper__aside}>
        <TableOfContents
          iconSVG={<MenuIcon />}
          title="Table of content"
          contents={[
            "How much should you spend on social media marketing?",
            "FAQs about social media pricing",
            "What does Muscled base its social media marketing pricing on?",
            "Muscled is a leader in social media marketing",
            "What's the Next Step",
          ]}
        />

        <TableOfContents
          iconSVG={<BookIcon />}
          title="Additional Reading"
          contents={[
            "3 Ways to determine the cost of social media marketing",
            "Facebook Advertising Rates",
            "How Much Does Facebook Advertising Cost in 2022?",
            "How Much Does It Cost To Advertise on Instagram?",
            "How Much Does It Cost to Advertise on Facebook?",
            "How Much Does It Cost to Advertise on Twitter?",
            "How Much Does LinkedIn Advertising Cost in 2022?",
            "How Much Does Pinterest Advertising Cost?",
            "How Much Does Social Media Advertising Cost in 2022?",
            "How Much Does YouTube Advertising Cost?",
            "How Much Should I Spend on Facebook Ads? Facebook Budget Breakdown",
            "Influencer Marketing Pricing",
          ]}
        />
      </aside>

      <div className={styles.wrapper__articles}>
        <article>
          <h3>How much money should you invest in social media marketing?</h3>

          <img src={Outsirce.src} alt="Promotion" />

          <p>
            The amount you spend on social media is determined by a variety of
            factors, including the number of platforms you use, the paid
            advertisements you create, and whether you choose to outsource your
            social media marketing.
          </p>

          <p>
            Companies that outsource their social media marketing spend between
            $200 and $350 per day on average. This works out to $4,000-$7,000
            per month or $48,000-$84,000 per year.
          </p>

          <p>
            In 2016, businesses spent 11.7 percent of their total marketing
            budgets on social media.
          </p>

          <p>
            Finally, you must select a budget that is appropriate for your
            company needs and goals. Muscled provides affordable social media
            plans to assist you in managing and optimizing your social presence
            in order to reach more customers and generate more revenue online.
          </p>

          <p>
            Each social media pricing level offered by Muscled includes a wide
            range of services.
          </p>

          <p>
            We will collaborate with you to assess your objectives, marketing
            budget, and industry to determine the best social media pricing
            marketing package for you. That way, we can ensure that we are
            providing social media management packages that meet your needs at a
            price that works for your business.
          </p>

          <p>
            If you have never used social media before, we recommend starting
            with our basic plan.
          </p>

          <p>
            Muscled will create a Facebook page for your business, optimize it
            for likes and engagement, and install any Facebook apps you desire.
            We plan to publish three weekly updates and launch an advertising
            campaign. This low-cost social media pricing level is ideal for
            small businesses that are new to social media.
          </p>

          <p>
            If you have a larger company and are serious about social media, our
            aggressive or market leader social media marketing pricing packages
            are ideal.
          </p>

          <p>
            We intend to create profiles on additional social media platforms
            such as Twitter, Pinterest, LinkedIn, and others. Every day, a
            dedicated team of social media strategists will post content for
            you. They will most likely use a social media content calendar to
            keep track of when they need to post.
          </p>
        </article>

        <article>
          <h3>Frequently Asked Questions About Social Media Pricing</h3>

          <p>
            You are bound to have questions about social media pricing if you
            are considering outsourcing your social media marketing or
            advertising efforts. That is why we have compiled this social media
            cost FAQ. To get started, check it out!
          </p>

          <img src={CostTable.src} alt="Cost Table" />

          <h4>1. How much does social media marketing cost?</h4>

          <p>
            The average monthly cost of outsourcing a social media marketing
            campaign is $900 to $7000. Pricing for social media marketing
            typically includes campaign development as well as full-time
            management of one to five social media networks.
          </p>

          <h4>2. How much does social media advertising cost?</h4>

          <p>
            Outsourcing a social media advertising campaign costs $450 to $6000
            per month on average, with monthly ad spending ranging from $200 to
            $50,000 or more. Your social media advertising costs will be
            determined by a variety of factors, including your company size,
            strategy, and budget.
          </p>

          <h4>3. How much does social media management cost?</h4>

          <p>
            The average monthly cost of outsourcing social media management is
            $900 to $20,000. Social media management services typically include
            the creation and management of your company social media marketing
            and advertising strategy across one to five social networks.
          </p>

          <p>
            When requesting custom social media pricing from agencies, ensure
            that their social media marketing and advertising services include
            the features and platforms you require and desire.
          </p>

          <p>
            For example, if you want to take a hands-off approach to managing
            your social media advertising and marketing campaigns, you must work
            with an agency that provides a turn-key solution, including strategy
            development, launch, and management.
          </p>

          <p>
            If you have any further questions about social media management
            pricing, please contact us online!
          </p>
        </article>

        <article>
          <h3>
            What factors influence Muscled social media marketing pricing?
          </h3>

          <p>
            Unlike other forms of Internet marketing, social media should
            concentrate on providing valuable content to your target audience
            that encourages them to recommend your site to others. The goal is
            viral word-of-mouth.
          </p>

          <p>
            Muscled has discovered that converting social media visitors to
            subscribers is the most cost-effective way to capitalize on the
            massive social media traffic potential.
          </p>

          <p>
            Our social media management pricing packages are based on the
            various approaches we employ to accomplish this. Muscled social
            media pricing is based on all of the different strategies we use to
            create an effective online presence for your company, from Twitter
            and Facebook to online contests.
          </p>

          <img src={FlowChart1.src} alt="Flow Chart" />

          <p>
            Overall, our social media prices are determined by what we provide
            for your company and how well your campaign performs.
          </p>

          <p>
            Even though it may be tempting to go with a less expensive social
            media campaign, less expensive rarely means better. For example, if
            an agency promises social media plans for $99 per month, they most
            likely lack the tools and experience to assist you in getting the
            best possible ROI from your social campaigns.
          </p>

          <p>
            Muscled is a social media marketing leading light.
            <br />
            Muscled, as one of the industry leading social media firms, can
            assist you in establishing, growing, and maintaining your company
            online interactions with customers.
          </p>

          <p>
            We offer a variety of social marketing bundles, so you can find the
            best social media marketing package for your needs. When you work
            with us, you would not get a generic, cookie-cutter solution for
            your company needs; instead, you will get the social media services
            that are right for you.
          </p>

          <p>
            Furthermore, we believe that transparency aids in the formation and
            maintenance of client relationships. As a result, our social media
            pricing and rates for our social media consulting services are
            available right on the page.
          </p>

          <p>
            We want you to know exactly what you get for your social media fee,
            and we want to make sure you get the most bang for your buck. When
            you know what you are buying, you can spend with more confidence —
            and we want our clients to feel at ease with us while also knowing
            all of our social media marketing pricing.
          </p>

          <p>
            Muscled, a leading social media firm, understands what it takes to
            generate online buzz by reaching out to your target audience through
            a systematic social media strategy. Muscled can help you with:
          </p>

          <p>
            Create a social presence on the most popular social media channels
            and networks. <br />
            Engage users actively to build new relationships that compel them to
            buy and encourage them to recommend your site to others. <br />
            With an effective social media pricing plan, create valuable content
            to meet your needs and expectations.
          </p>
        </article>

        <article>
          <h3>What will be the next step?</h3>

          <p>
            When you work with Muscled, we focus on meeting your objectives and
            increasing revenue for your company through effective social media
            management. To date, we have generated over $3 billion in sales and
            7.8 million leads for our clients.
          </p>

          <p>
            We are the digital marketing agency for you if you want to establish
            a more influential presence on social media, engage more effectively
            with customers, create helpful content, or drive more customers to
            your website.
          </p>

          <p>
            We have worked with a variety of industries and have the experience
            and knowledge you are looking for.
          </p>

          <p>
            If you want to reap the benefits of social media, please contact our
            for a free quote and to learn more about how social media can
            benefit your business!
          </p>

          <h4>Pricing for Muscled social media management</h4>

          <p>
            Muscled provides social media management plans to assist you in
            developing a custom strategy and social media pages that produce
            results for your company. We also make our social media management
            pricing available online.
          </p>

          <p>
            Our social media management plans allow you to select the number of
            platforms you want to use to create a social strategy that is
            tailored to your budget and objectives. Here is a breakdown of what
            you can expect to pay.
          </p>

          <p>
            You will receive network setup and optimization, a social media
            competitive analysis and brand reputation analysis, a social media
            audit and custom recommendations, a dedicated social media account
            manager, daily monitoring of your social media account, access to
            Muscled editorial calendar, content publishing tools, and social
            media contest tools, monthly reporting, MarketingCloud, cover photo
            and profile photo design, and more.
          </p>

          <p>
            Standard consultation and reporting plans for social media
            management (Monthly) <br />
            To learn more about what our plans include, take a look at our
            social media management services pricing:
          </p>

          <p>
            Pricing for Muscled social media advertising <br />
            Muscled also provides social media advertising plans if you want to
            fine-tune your social media ads. Custom ad images, advanced
            targeting options, a dedicated account manager, and much more are
            included in all of our social ad plans.
          </p>

          <p>
            Let take a closer look at what is included and the pricing for
            Muscled social media advertising plans.
          </p>

          <p>
            Standard consultation and reporting plans for social media
            advertising
          </p>
        </article>
      </div>
    </section>
  );
}

export default BlogArticle;
