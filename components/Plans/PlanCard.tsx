import Button from "components/Button";
import styles from "styles/components/PlanCard.module.css";

interface Props {
  plan: "Bronze" | "Silver" | "Gold";
  price: number;
  features: JSX.Element[];
  barIcon: JSX.Element;
}

function PlanCard({ plan, price, features, barIcon }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.header__bar}>{barIcon}</div>
        <div className={styles.header__plan}>{plan}</div>
        <div className={styles.header__price}>
          <span>${price} </span> <span> / setup fee</span>
        </div>
      </div>

      <div className={styles.card__body}>{features.map((f) => f)}</div>

      <div className={styles.card__divider}></div>

      <div className={styles.card__info}>
        Include Strategy & Competitive Analysis
      </div>

      <Button text="I'm ready to get started" />
    </div>
  );
}

export default PlanCard;
