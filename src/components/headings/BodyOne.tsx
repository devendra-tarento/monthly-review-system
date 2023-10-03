import styles from "../../style-guide/TypographyGuide.module.css";

interface BodyOneProps {
  content: string;
  textColor?: any;
}

export const BodyOne = ({ content, textColor }: BodyOneProps) => {
  return (
    <h4
      className={`${styles.body_one}`}
      style={{ color: `${textColor && textColor}` }}
    >
      {content}
    </h4>
  );
};
