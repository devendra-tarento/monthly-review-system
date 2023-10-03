import { Link } from "react-router-dom";
import styles from "./ButtonSmallSecondary.module.css";

interface ButtonSmallSecondaryProps {
  btnTxt: string;
  isLink?: boolean;
  link?: any;
  showIcon: boolean;
  icon?: string;
  clickHandler?: (event: any) => void;
  iconPosition?: string;
  isDisabled?: boolean;
}

export const ButtonSmallSecondary = ({
  isLink,
  btnTxt,
  link,
  showIcon,
  clickHandler,
  iconPosition,
  icon,
  isDisabled,
}: ButtonSmallSecondaryProps) => {
  if (isLink) {
    return (
      <Link to={link ? link : ""}>
        <button className={`${styles.btn_small} btn`} disabled={isDisabled} type={"submit"}>
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
      <button className={`${styles.btn_small} btn`} disabled={isDisabled} onClick={clickHandler}  type={"submit"}>
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
