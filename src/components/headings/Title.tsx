import styles from "../../style-guide/TypographyGuide.module.css";

interface TitleProps {
  title: string;
  textColor?: any;
}

export const Title = ({ title, textColor }: TitleProps) => {
  return (
    <h1
      className={`${styles.title_one}`}
      style={{ color: `${textColor && textColor}` }}
    >
      {title}
    </h1>
  );
};
