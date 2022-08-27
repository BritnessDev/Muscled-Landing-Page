import Button from "components/Button";
import { Logo1, Logo2 } from "components/Logos";
import styles from "styles/components/Hero.module.css";

function Hero() {
  return (
    <section className={styles.wrapper}>
      <article className={styles.wrapper__content}>
        <h2 className={styles.content__heading}>
          How Much Will Social Media Management Cost in 2022?
        </h2>

        <p className={styles.content__description}>
          The cost of social media is determined by a variety of factors,
          ranging from the platform to the industry. Businesses spend an average
          of $4000 to $7000 per month on social media management, which includes
          marketing and advertising on one or more networks; if outsourced,
          social media services cost $900 to $20,000 per month, and social media
          consultants charge $75 to $500 per hour. Continue reading this social
          media pricing guide to find out more!
        </p>

        <div className={styles.content__btns}>
          <Button inverted label="Social Media Cost Generator" />
          <Button label="Get Custom Pricing" />
        </div>
      </article>

      <article className={styles.logos}>
        <Logo1 />
        <Logo2 />
        <Logo1 />
        <Logo2 />
        <Logo1 />
        <Logo2 />
      </article>
    </section>
  );
}

export default Hero;
