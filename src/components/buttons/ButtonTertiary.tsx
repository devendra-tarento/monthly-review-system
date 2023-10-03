import { Link } from "react-router-dom";
import styles from "./ButtonTertiary.module.css";

interface ButtonTertiaryProps {
  btnTxt: string;
  isLink?: boolean;
  link?: any;
  showIcon: boolean;
  icon?: string;
  clickHandler?: (event: any) => void;
  iconPosition?: string;
  isSelected?: boolean;
}

export const ButtonTertiary = ({
  isLink,
  btnTxt,
  link,
  showIcon,
  clickHandler,
  iconPosition,
  icon,
  isSelected,
}: ButtonTertiaryProps) => {
  if (isLink) {
    return (
      <Link to={link ? link : ""}>
        <button
          className={`${
            isSelected ? styles.btn_tertiary_selected : styles.btn_tertiary
          } btn`}
        >
          {showIcon && iconPosition && iconPosition === "left" && (
            <span className={`${styles.material_icon_one} material-icons pe-1`}>
              {icon ? icon : "add"}
            </span>
          )}
          {btnTxt}
          {showIcon && iconPosition && iconPosition === "right" && (
            <span className={`${styles.material_icon_one} material-icons ps-1`}>
              {icon ? icon : "add"}
            </span>
          )}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        className={`${
          isSelected ? styles.btn_tertiary_selected : styles.btn_tertiary
        } btn`}
        onClick={clickHandler}
      >
        {" "}
        {showIcon && iconPosition && iconPosition === "left" && (
          <span className={`${styles.material_icon_one} material-icons pe-1`}>
            {icon ? icon : "add"}
          </span>
        )}
        {btnTxt}
        {showIcon && iconPosition && iconPosition === "right" && (
          <span className={`${styles.material_icon_one} material-icons ps-1`}>
            {icon ? icon : "add"}
          </span>
        )}
      </button>
    );
  }
};
