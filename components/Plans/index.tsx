import { Level1Bars } from "components/Icons";
import styles from "styles/components/Plans.module.css";

import PlanCard from "./PlanCard";
import PlanFeature from "./PlenFeature";

function Plans() {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.wrapper__heading}>
        Do you want to know how much Muscled social media services cost?
      </h3>

      <p className={styles.wrapper_description}>
        Browse our prices below, or continue reading to find out how much social
        media costs.
      </p>

      <div className={styles.wrapper__plans}>
        <PlanCard
          plan="Bronze"
          price={4500}
          barIcon={<Level1Bars />}
          features={[
            <PlanFeature key="1-10 social posts / month" label="10 social posts / month" />,
            <PlanFeature key="2-1 social media network" label="1 social media network" />,
            <PlanFeature
              key="2-personal social media consultation"
              label="1 personal social media consultation / month"
            />,
          ]}
        />

        <PlanCard
          plan="Silver"
          price={6300}
          barIcon={<Level1Bars />}
          features={[
            <PlanFeature key="card-item-1" label="10 social posts / month" />,
            <PlanFeature key="card-item-2" label="1 social media network" />,
            <PlanFeature
              key="card-item-3"
              label="1 personal social media consultation / month"
            />,
          ]}
        />

        <PlanCard
          plan="Gold"
          price={7200}
          barIcon={<Level1Bars />}
          features={[
            <PlanFeature key="card-item-4" label="10 social posts / month" />,
            <PlanFeature key="card-item-5" label="1 social media network" />,
            <PlanFeature
              key="card-item-6"
              label="1 personal social media consultation / month"
            />,
          ]}
        />
      </div>

      <div className="underline text-grey text-[20px] leading-[30px] mt-12">
        See Full Deliverables {">"}
      </div>
    </section>
  );
}

export default Plans;
