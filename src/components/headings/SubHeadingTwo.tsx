import styles from "../../style-guide/TypographyGuide.module.css";

interface SubHeadingTwoProps {
  title: string;
  textColor?: any;
}

export const SubHeadingTwo = ({ title, textColor }: SubHeadingTwoProps) => {
  return (
    <h3
      className={`${styles.sub_heading_two}`}
      style={{ color: `${textColor && textColor}` }}
    >
      {title}
    </h3>
  );
};
