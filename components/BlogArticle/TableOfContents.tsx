import styles from "styles/components/TableOfContents.module.css";

interface Props {
  iconSVG: React.ReactNode;
  title: string;
  contents: string[];
}

function TableOfContents({ iconSVG, title, contents }: Props) {
  const ChevronDown = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="#141010"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__header}>
        <span>{iconSVG}</span>
        <span className="font-semibold text-[20px] leading-[30px]">
          {title}
        </span>
        <ChevronDown />
      </div>

      <ul className={styles.wrapper__content}>
        {contents.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;
