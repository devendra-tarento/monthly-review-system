import { Link } from "react-router-dom";
import styles from "./ButtonLargePrimary.module.css";

interface ButtonLargePrimaryProps {
  btnTxt: string;
  isLink?: boolean;
  link?: any;
  showIcon: boolean;
  icon?: string;
  clickHandler?: (event: any) => void;
  iconPosition?: string;
  disabled?: boolean;
}

export const ButtonLargePrimary = ({
  isLink,
  btnTxt,
  link,
  showIcon,
  clickHandler,
  iconPosition,
  icon,
  disabled,
}: ButtonLargePrimaryProps) => {
  if (isLink) {
    return (
      <Link to={link ? link : ""}>
        <button className={`${styles.btn_large} btn w-100`} disabled={disabled}>
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
      <button className={`${styles.btn_large} btn w-100`}>
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
