import styles from "styles/components/LearnMore.module.css";

function LearnMore() {
  const Card = ({ title, contents }) => (
    <div className={styles.wrapper__card}>
      <h4>{title}</h4>

      <ul>
        {contents.map((content, i) => (
          <li key={i}>{content}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className={styles.wrapper}>
      <h3 className="text-center">
        Learn more about social media pricing, services, and industry tips!
      </h3>

      <div className={styles.wrapper__cards}>
        <Card
          title="Social Media Marketing and Design Services"
          contents={[
            "Social Media Advertising",
            "How Much Does Social Media Advertising Cost?",
            "Influencer Marketing",
            "Online Review Management",
            "Social Media Profile Design",
            "Web Video Production",
          ]}
        />

        <Card
          title="Social Media Network Pricing"
          contents={[
            "How Much Does ",
            "Facebook Advertising Cost?",
            "How Much Does Instagram ",
            "Advertising Cost?",
            "How Much Does ",
            "Instagram Advertising Cost?",
            "How Much Does ",
            "Pinterest Advertising Cost?",
          ]}
        />

        <Card
          title="Learn More About Social Media"
          contents={[
            "Social Media Agency",
            "Advantages of Social Media",
            "Tips for Social Media Platforms",
            "KPIs for Social Media",
            "When Should I ",
            "Outsource Social Media?",
            "How to Advertise on Social Media: ",
            "Stop Scrollin'. Here's What to Know",
          ]}
        />
      </div>
    </section>
  );
}

export default LearnMore;
