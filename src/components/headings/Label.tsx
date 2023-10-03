import styles from "../../style-guide/TypographyGuide.module.css";

interface LabelProps {
  text: string;
  textColor?: any;
  htmlFor?: string;
}

export const Label = ({ text, textColor, htmlFor }: LabelProps) => {
  return (
    <label
      className={`${styles.label_one}`}
      style={{ color: `${textColor && textColor}` }}
      htmlFor={htmlFor}
    >
      {text}
    </label>
  );
};
