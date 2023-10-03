import styles from "../../style-guide/TypographyGuide.module.css";

interface ButtonTextProps {
  text: string;
  textColor?: any;
}

export const ButtonText = ({ text, textColor }: ButtonTextProps) => {
  return (
    <h4
      className={`${styles.button_one}`}
      style={{ color: `${textColor && textColor}` }}
    >
      {text}
    </h4>
  );
};
