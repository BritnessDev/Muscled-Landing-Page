import styles from "@styles/components/Button.module.css";

interface Props {
  inverted?: boolean;
  label: string;
}

function Button({ inverted, label }: Props) {
  const bgColor = inverted ? "bg-white" : "bg-black";
  const textColor = inverted ? "text-black" : "text-white";

  return (
    <button className={`${bgColor} ${textColor} ${styles.btn}`}>{label}</button>
  );
}

export default Button;
