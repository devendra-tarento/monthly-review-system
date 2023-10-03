import { Link } from "react-router-dom";
import styles from "./ButtonSmallOutline.module.css";

interface ButtonSmallOutlineProps {
  btnTxt: string;
  isLink?: boolean;
  link?: any;
  showIcon: boolean;
  icon?: string;
  clickHandler?: (event: any) => void;
  iconPosition?: string;
  isDisabled?: boolean;
}

export const ButtonSmallOutline = ({
  isLink,
  btnTxt,
  link,
  showIcon,
  clickHandler,
  iconPosition,
  icon,
  isDisabled,
}: ButtonSmallOutlineProps) => {
  if (isLink) {
    return (
      <Link to={link ? link : ""}>
        <button className={`${styles.btn_small} btn`} disabled={isDisabled}>
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
      <button className={`${styles.btn_small} btn`} disabled={isDisabled} onClick={clickHandler}>
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
