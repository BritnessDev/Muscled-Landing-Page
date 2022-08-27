import PrimaryButton from "components/PrimaryButton";
import styles from "styles/components/GetStartedForm.module.css";

function GetStartedForm() {
  return (
    <div className={styles.wrapper}>
      <h3 className="text-white text-center">
        Ready to Grow? Get your FREE Quote Today!
      </h3>

      <form action="#" className={styles.wrapper__form}>
        <input
          className={styles.form__input}
          type="text"
          placeholder="Enter your website link"
        />

        <PrimaryButton label="Get Started" />
      </form>
    </div>
  );
}

export default GetStartedForm;
