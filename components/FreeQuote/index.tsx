import PrimaryButton from "components/PrimaryButton";
import styles from "styles/components/FreeQuote.module.css";
import jumpImage from 'components/assets/img-jump-start-career-1.png'

function FreeQuote() {
  return (
    <section className={styles.wrapper}>
      <h3>Social media strategies that produce real results</h3>

      <div className={styles.wrapper__content}>
        <article className={styles.content__article}>
          <p>
            Are you curious about how social media can help your business grow?
          </p>

          <p>
            Muscled is a multi-award-winning digital marketing firm with over
            two decades of experience. We know what it takes to create effective
            social media campaigns, and we work with clients from a variety of
            industries.
          </p>

          <p>
            To learn more about Muscled award-winning social media services, or
            talk to an expert.
          </p>

          <p>
            Are you curious about how social media can help your business grow?
          </p>

          <PrimaryButton label="Get a free quote" />
        </article>

        <img src={jumpImage.src} alt="Jump start career" />
      </div>
    </section>
  );
}

export default FreeQuote;
