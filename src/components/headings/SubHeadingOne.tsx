import styles from "../../style-guide/TypographyGuide.module.css";

interface SubHeadingOneProps {
  title: string;
  textColor?: any;
  subTitle?: string;
}

export const SubHeadingOne = ({ title, textColor, subTitle }: SubHeadingOneProps) => {
  return (
    <div  style={{ color: `${textColor && textColor}`, display: "inline-block" }}
    >
      <span className={`${styles.sub_heading_one}`}> {title} </span>
      <span> {subTitle} </span>

    </div>
  );
};
