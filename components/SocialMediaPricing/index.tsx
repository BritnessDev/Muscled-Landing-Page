import styles from "styles/components/SocialMediaPricing.module.css";

export function Video() {
  const PlayBtn = ({ fill }: { fill: string }) => (
    <svg
      className="h-[60px] w-[80px]"
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 50V10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0H70C72.6522 0 75.1957 1.05357 77.0711 2.92893C78.9464 4.8043 80 7.34784 80 10V50C80 52.6522 78.9464 55.1957 77.0711 57.0711C75.1957 58.9464 72.6522 60 70 60H10C7.34784 60 4.8043 58.9464 2.92893 57.0711C1.05357 55.1957 0 52.6522 0 50ZM33.95 15.465C33.5762 15.1988 33.1363 15.0407 32.6786 15.0079C32.2209 14.9751 31.763 15.069 31.355 15.2791C30.9471 15.4893 30.6049 15.8077 30.3659 16.1994C30.1269 16.5912 30.0003 17.0411 30 17.5V42.5C30.0003 42.9589 30.1269 43.4088 30.3659 43.8006C30.6049 44.1923 30.9471 44.5107 31.355 44.7209C31.763 44.931 32.2209 45.0249 32.6786 44.9921C33.1363 44.9593 33.5762 44.8012 33.95 44.535L51.45 32.035C51.7741 31.8037 52.0382 31.4984 52.2205 31.1445C52.4028 30.7905 52.4978 30.3981 52.4978 30C52.4978 29.6019 52.4028 29.2095 52.2205 28.8555C52.0382 28.5016 51.7741 28.1963 51.45 27.965L33.95 15.465Z"
        fill={fill}
      />
    </svg>
  );

  return (
    <div className="relative w-full lg:w-[506px] lg:h-[284px]">
      <div className="h-[60px] w-[80px] absolute left-[50%] top-[50%] md:top-[45%] -translate-x-2/4 -translate-y-2/4 z-10">
        <PlayBtn fill="#C40000" />
      </div>

      <video
        className="w-full"
        controls
        src="https://www.youtube.com/watch?v=yIzCBU0_LyY&list=RDyIzCBU0_LyY&start_radio=1"
      ></video>
    </div>
  );
}

function SocialMediaPricing() {
  return (
    <section className={styles.wrapper}>
      <aside className={styles.wrapper__aside}>
        <Video />
      </aside>

      <div className={styles.wrapper__articles}>
        <article>
          <h3 className="leading-[154%]">
            Pricing for social media management services: How much do they cost?
          </h3>

          <p>
            Social media sites are becoming increasingly popular, and they are
            extremely effective for marketing. You can connect with current and
            potential customers using social media. It also allows you to build
            relationships with them, which encourages them to buy your products
            and services.
          </p>

          <p>
            The majority of people want to know how much social media marketing
            costs. What is the solution? It is determined by a number of
            factors, including the experience of the employees at the agency you
            hire, the plan you select, the number of social networks you use to
            market your business, and others.
          </p>

          <p>
            Most businesses, on the other hand, spend $4000 to $7000 per month
            on social media management, which typically includes a monthly ad
            spend as well as a custom marketing and advertising strategy for one
            or more networks.
          </p>

          <p>
            Muscled, an award-winning social media agency, provides a variety of
            social media plans to help you customize your strategy and make the
            most of your budget. You can view Muscled social media rates at any
            time.
          </p>

          <p>
            On this page, we will look at how much it will cost you to market
            your business on each social network. If you did like to learn more
            about our social media management fees, scroll down to use our cost
            estimate calculator!
          </p>
        </article>

        <article>
          <h3>Social Media Pricing</h3>

          <h4>What Does Social Media Marketing & Advertising Cost?</h4>

          <p>
            Our Muscled team discusses the importance of social media marketing
            and how much you can expect to pay for it.
          </p>

          <p>
            How much does social media marketing cost? Signing up for a social
            media account is free — anyone can set up a business Facebook page
            or a Twitter account. However, monitoring social media can be
            time-consuming.
          </p>

          <p>
            It may also be difficult to find someone on your team with the
            necessary experience and knowledge to manage your social media
            accounts. A social media campaign can be very costly to your brand
            if not executed correctly.
          </p>

          <p>
            Muscled provides social media marketing plans for the most popular
            social networks, such as Facebook, Twitter, LinkedIn, Instagram, and
            Pinterest. Our plans are a fraction of the cost of hiring a
            dedicated social media manager, and you will receive a fully managed
            campaign.
          </p>

          <p>
            Our knowledgeable and experienced staff will not only assist you in
            developing an effective online presence but will also ensure that it
            is monitored and updated on a regular basis.
          </p>

          <p>
            Do you know how much you should budget for social media marketing?
            Let look at the costs of marketing your business through each
            channel, as well as Muscled custom social media pricing.
          </p>
        </article>
      </div>
    </section>
  );
}

export default SocialMediaPricing;
