import styles from "../../style-guide/TypographyGuide.module.css";

interface CaptionProps {
  text: string;
  textColor?: any;
}

export const Caption = ({ text, textColor }: CaptionProps) => {
  return (
    <h4
      className={`${styles.caption_one}`}
      style={{ color: `${textColor && textColor}` }}
    >
      {text}
    </h4>
  );
};
