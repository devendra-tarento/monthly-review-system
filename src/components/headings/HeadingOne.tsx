import styles from "../../style-guide/TypographyGuide.module.css";

interface HeadingOneProps {
  title: string;
  textColor?: any;
}

export const HeadingOne = ({ title, textColor }: HeadingOneProps) => {
  return (
    <h1
      className={`${styles.display_one}`}
      style={{ color: `${textColor && textColor}` }}
    >
      {title}
    </h1>
  );
};
