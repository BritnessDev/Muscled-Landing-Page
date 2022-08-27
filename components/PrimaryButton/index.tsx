import styles from "styles/components/PrimaryButton.module.css";

interface Props {
  inverted?: boolean;
  label: string;
}

function PrimaryButton({ inverted, label }: Props) {
  const bgColor = inverted ? "bg-white" : "bg-black";
  const textColor = inverted ? "text-black" : "text-white";

  return (
    <button className={`${bgColor} ${textColor} ${styles.btn}`}>{label}</button>
  );
}

export default PrimaryButton;
