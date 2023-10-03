import styles from "../../style-guide/TypographyGuide.module.css";

interface HeadlineProps {
  title: string;
  textColor?: any;
}

export const Headline = ({ title, textColor }: HeadlineProps) => {
  return (
    <h1
      className={`${styles.headline_one}`}
      style={{ color: `${textColor && textColor}` }}
    >
      {title}
    </h1>
  );
};
