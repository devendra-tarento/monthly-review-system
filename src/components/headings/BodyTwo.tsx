import styles from "../../style-guide/TypographyGuide.module.css";

interface BodyTwoProps {
  content: string;
  textColor?: any;
}

export const BodyTwo = ({ content, textColor }: BodyTwoProps) => {
  return (
    <h4
      className={`${styles.body_two}`}
      style={{ color: `${textColor && textColor}` }}
    >
      {content}
    </h4>
  );
};
