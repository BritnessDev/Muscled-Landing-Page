import PrimaryButton from "components/PrimaryButton";
import { Video } from "components/SocialMediaPricing";
import styles from "styles/components/SocialMediaAdPricing.module.css";
import Facebook from "components/assets/facebook.png"
import Linkd from "components/assets/linkd.png"

function SocialMeidaAdPricing() {
  const Header = () => (
    <article className={styles.wrapper__header}>
      <h3>
        How much does it cost to advertise on various social media platforms?
      </h3>

      <p>
        Do you want to know how much it will cost to advertise your company on
        social media?
      </p>

      <p>
        The platforms you choose to market your business from, like other
        marketing services, have a significant impact on how much social media
        costs. For example, because a specific platform has more users, you may
        find that you will pay a little more in ads because there more
        competition for ad space.
      </p>

      <p>
        Your campaign cost will vary depending on which social platforms you
        want to market on. Let look at the cost of marketing on each social
        media platform.
      </p>
    </article>
  );

  const AsideContent = () => (
    <aside className={styles.wrapper__aside}>
      <div>
        <h4 className="mb-6">Social Media Costs by Platform</h4>

        <ul className="flex flex-col gap-5">
          <li className="underline text-grey text-[20px] leading-[30px]">
            Facebook
          </li>
          <li className="underline text-grey text-[20px] leading-[30px]">
            Twitter
          </li>
          <li className="underline text-grey text-[20px] leading-[30px]">
            Linkedin
          </li>
          <li className="underline text-grey text-[20px] leading-[30px]">
            Instagram
          </li>
          <li className="underline text-grey text-[20px] leading-[30px]">
            Pinterest
          </li>
        </ul>
      </div>

      <div className={styles.aside__promotion_card}>
        <h4 className="text-white">Drive more revenue for your company</h4>

        <div className="flex justify-between items-center">
          <PrimaryButton inverted label="Get a Proposal" />

          <svg
            width="110"
            height="79"
            viewBox="0 0 110 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 60L50 78.7V18.7L0 0V60Z" fill="#C40000" />
            <path d="M110 78.7002H50V18.7002L110 78.7002Z" fill="white" />
          </svg>
        </div>
      </div>
    </aside>
  );

  return (
    <section className={styles.wrapper}>
      <Header />

      <div className={styles.wrapper__content}>
        <AsideContent />

        <div className={styles.wrapper__articles}>
          <article>
            <h3>Social media pricing for Facebook</h3>

            <Video />

            <p>
              Facebook is one of the most popular social media platforms, with
              over 1 billion daily active users. You have a good chance of
              reaching at least a portion of your target audience when you
              market your business on Facebook.
            </p>

            <p>
              Setting up a business account on Facebook is completely free. If
              you want to connect with more customers, there are a few paid
              advertising options on Facebook.
            </p>

            <p>
              So, how much does it cost to promote your company on Facebook?
            </p>
          </article>

          <img src={Facebook.src} alt="Plans" />

          <article>
            <h4>Facebook advertisements</h4>

            <p>
              When you generate paid ads on Facebook, you can optimize them to
              achieve a variety of objectives, including:
            </p>

            <p>
              Likes on the page <br />
              Website visits <br />
              Website conversions, <br />
              Website conversions,
            </p>

            <p>
              Facebook also provides options for controlling your ad costs. You
              can, for example, ask Facebook for the best conversions at the
              best prices, or you can set a budget for your campaigns. You can
              also choose between CPM and CPC models.
            </p>

            <p>
              You pay for every 1000 views of your ad with the CPM model. In
              other words, you will pay a set amount every time 1000 Facebook
              users see your ad, even if they do not click on it. The
              cost-per-click (CPC) model, on the other hand, allows you to pay
              only when people click on your ads.
            </p>

            <p>
              CPC prices are typically higher, but you will only pay for
              interested users — those who click on your Facebook ads.
            </p>

            <p>
              The cost-per-click (CPC) for Facebook ads varies depending on your
              objectives and the audience you want to reach. The average CPC for
              a Facebook ad in 2015 was $0.27.
            </p>
          </article>

          <article>
            <h4>Likes on Facebook</h4>

            <p>
              Many businesses want to increase the number of page likes on their
              Facebook ads.
            </p>

            <p>
              Buffer, a social app that helps businesses manage their social
              accounts, conducted some Facebook tests to determine the cost of
              Facebook likes. What were the outcomes? Buffer discovered that
              they paid an average of $0.57 per Facebook like. So, if you want
              to increase your Facebook following without breaking the bank,
              this is a great way to connect with more users.
            </p>
          </article>

          <article>
            <h4>Boosted Posts</h4>

            <p>
              You can also boost existing posts to show them to more users based
              on the targeting options you select.
            </p>

            <p>
              The cost of boosted posts is determined by your target audience
              and the number of people you want to reach. In addition, Facebook
              charges for boosted posts using the CPM model. For boosted posts,
              you can expect to pay $6.35 per 1000 views on average.
            </p>
          </article>

          <article>
            <h4>Professional Facebook management</h4>

            <p>
              Facebook social media services typically cost $450 to $1600 per
              month or more. The average cost of social media marketing ranges
              from $900 to $1600. In comparison, Facebook advertising services
              range from $450 to $850 per month or more, with a minimum ad spend
              of $200.
            </p>
          </article>

          <article>
            <h3>Social media pricing for Twitter</h3>

            <Video />

            <p>
              Setting up a business account on Twitter, like on Facebook, is
              completely free. However, if you want to reach a larger audience,
              you can pay for Twitter ads. Lets look at some possibilities.
            </p>
          </article>

          <article>
            <h4>Twitter promotions</h4>

            <p>
              You can choose to promote your tweets to get them in front of more
              people. When you promote your tweets, they will appear in users
              timelines as promoted.
            </p>

            <p>
              Promoted tweets work on a bidding system, and you will be charged
              based on the amount of engagement they generate for your company,
              such as clicks, replies, retweets, and favorites. A tweet
              promotion will cost you $1.35 on average.
            </p>
          </article>

          <article>
            <h4>Accounts promoted</h4>

            <p>
              In addition to individual tweets, you can promote your account.
              This is an excellent option for increasing brand awareness and
              gaining more followers.
            </p>

            <p>
              Instead of bidding on engagements, you will enter a bid for each
              new follower. This will vary depending on your targeting, but you
              should expect to pay between $2.50 and $4 per follower.
            </p>
          </article>

          <article>
            <h4>Promoted trends</h4>

            <p>
              You can also choose to promote trends on Twitter if you have a
              larger marketing budget. Twitter displays a list of Trending
              Topics to inform users of the most popular hashtags and topics.
              And promoted trends are usually at the top of the list, labeled as
              promoted.
            </p>

            <p>
              You can place a bid on specific keywords for around $200,000 per
              day, ensuring that your promoted trend appears at the top of the
              list.
            </p>

            <p>
              You can also use a combination of promoted tweets, accounts, and
              trends to reach out to even more Twitter users and educate them
              about your company.
            </p>
          </article>

          <article>
            <h4>Professional Twitter management</h4>

            <p>
              Twitter social media management can range from $450 to $1600 per
              month. Expect monthly costs ranging from $900 to $1600 if you
              focus on social media marketing. Budget $200 per month for social
              media advertising and $450 to $850 per month for management.
            </p>
          </article>

          <article>
            <h3>Social media pricing for LinkedIn</h3>

            <Video />

            <p>
              Just like Facebook and Twitter, it costs nothing to set up a
              profile for your business on LinkedIn. However, you have several
              paid options to help you boost connections and brand awareness.
            </p>

            <img src={Linkd.src} alt="LinkedIn Plans" />
          </article>

          <article>
            <h4>LinkedIn advertisements</h4>

            <p>
              LinkedIn allows you to create sidebar ads that appear next to
              users feeds and pages they visit. These brief advertisements
              include a thumbnail image and are intended to entice people to
              click and visit your website. You can make up to 15 LinkedIn ads,
              each with a 25-character headline and a 75-character description.
            </p>

            <p>
              You can also target LinkedIn ads based on a users company size,
              industry, name, job title, category, and seniority.
            </p>

            <p>
              LinkedIn, like Facebook, offers both cost per click (CPC) and cost
              per 1000 impressions (CPM). The CPC model requires you to pay
              every time someone clicks on your ad. While the minimum bid is $2,
              LinkedIn suggests that you bid between $5.55 and $9.33. You can
              also set a daily budget of at least $10 and specify whether your
              ad should run indefinitely or until a specific date.
            </p>

            <p>
              If you choose to use the CPM model, you must submit a minimum bid
              of $2, but LinkedIn recommends that you bid between $2.85 and
              $4.62.
            </p>

            <p>
              Updates from sponsors <br />
              Your company can also sponsor LinkedIn updates. This feature is
              very similar to sponsored posts on Facebook and sponsored tweets
              on Twitter.
            </p>

            <p>
              Sponsored updates appear alongside other posts in users feeds, but
              they are labeled Sponsored under your companys name.
            </p>

            <p>
              To sponsor an update, first select an existing update from your
              LinkedIn. The targeting options are the same as they are for
              regular ads.
            </p>

            <p>
              The pricing model for sponsored posts is similar to that of
              regular ads, but the suggested bids are slightly different.
            </p>

            <p>
              If you select the CPC option, you must pay a minimum bid of $2.50,
              but LinkedIn recommends that you bid between $5.67 and $10.09. The
              CPM option, on the other hand, will cost you a minimum of $10.50
              and a suggested bid of $18.55 - $28.91. In addition, you must have
              a daily budget of at least $10 for sponsored updates.
            </p>
          </article>

          <article>
            <h4>Professional LinkedIn administration</h4>

            <p>
              A professional social media advertising campaign for LinkedIn can
              cost anywhere from $450 to $850 per month. In most cases,
              businesses will spend at least $200 per month on advertising.
              Expect to spend at least $900 per month on LinkedIn marketing
              campaigns.
            </p>
          </article>

          <article>
            <h3>Social media pricing for Instagram</h3>

            <Video />

            <p>
              Setting up an Instagram page for your business is completely free,
              but you can create Instagram ads that appear in users feeds as
              Sponsored posts.
            </p>

            <p>
              Initially, these advertisements were only available to large
              corporations. However, Instagram advertising options for your
              business are now available through the Facebook ad manager.
            </p>

            <p>
              You can expect to pay $6.70 per thousand views of your Instagram
              photo ad on average. You can also create video ads on Instagram
              and pay around $3 per thousand video views, with some businesses
              reporting paying $0.02 per view.
            </p>

            <p>
              They even have their own Instagram analytics platform to help you
              figure out how to get the most out of your money.
            </p>
          </article>

          <article>
            <h4>Professional Instagram management</h4>

            <p>
              The cost of Instagram social media services varies. Professional
              Instagram ad campaign management can range from $450 to $850 per
              month, with monthly ad spends starting at $200. Instagram social
              media marketing services, on the other hand, range from $900 to
              $1600 or more per month.
            </p>
          </article>

          <article>
            <h3>Social media pricing for Pinterest</h3>

            <Video />

            <p>
              While creating a Pinterest account for your business is free, you
              can choose to promote your pins to reach more users.
            </p>

            <p>
              All you have to do is select a pin to promote. With promoted pins,
              you can choose which keywords your pin should appear for in search
              results. You can also target your audience based on their
              location, language, gender, and device.
            </p>

            <p>
              Because Pinterest uses CPC pricing, you will only be charged when
              someone clicks on the pin and visits your website. First, youll
              determine your maximum CPC bid, or the most youre willing to pay
              for a click to your website. You will never be charged more than
              your maximum bid, and you may pay less than your bid. Social Media
              Examiner discovered, for example, that a client bid $1 and was
              only charged $0.13 per click.
            </p>

            <p>
              You can also set a daily marketing budget and decide how long your
              campaign will last.
            </p>
          </article>

          <article>
            <h4>Professional Pinterest management</h4>

            <p>
              The cost of using social media services is several hundred dollars
              per month. Pinterest, for example, has social media marketing
              rates ranging from $900 to $1600 per month. Meanwhile, Pinterests
              social media advertising costs range from $450 to $850 per month,
              with a monthly ad spend of $200 on average.
            </p>

            <p>
              As you can see, social media advertising and marketing services
              are generally the same regardless of the platform. However, many
              businesses advertise and market on multiple platforms, which is
              why businesses spend an average of $4000 to $7000 per month on
              social media services.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SocialMeidaAdPricing;
