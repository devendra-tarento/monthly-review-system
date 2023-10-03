import { Link } from "react-router-dom";
import styles from "./ButtonSmall.module.css";

interface ButtonSmallProps {
  btnTxt: string;
  isLink?: boolean;
  link?: any;
  showIcon: boolean;
  icon?: string;
  clickHandler?: (event: any) => void;
  iconPosition?: string;
  isDisabled?: boolean;
  isModal?: boolean;
  modalId?: string;
}

export const ButtonSmall = ({
  isLink,
  btnTxt,
  link,
  showIcon,
  clickHandler,
  iconPosition,
  icon,
  isDisabled,
  isModal,
  modalId,
}: ButtonSmallProps) => {
  if (isLink) {
    if (isModal) {
      return (
        <Link to={link ? link : ""}>
          <button
            className={`${styles.btn_small} btn`}
            disabled={isDisabled}
            data-bs-toggle="modal"
            type="button"
            data-bs-target={`#${modalId}`}
            onClick={clickHandler}
          >
            {showIcon && iconPosition && iconPosition === "left" && (
              <span
                className={`${styles.material_icon_one} material-icons pe-1`}
              >
                {icon ? icon : "add"}
              </span>
            )}
            {btnTxt}
            {showIcon && iconPosition && iconPosition === "right" && (
              <span
                className={`${styles.material_icon_one} material-icons ps-1`}
              >
                {icon ? icon : "add"}
              </span>
            )}
          </button>
        </Link>
      );
    } else {
      return (
        <Link to={link ? link : ""}>
          <button
            className={`${styles.btn_small} btn`}
            disabled={isDisabled}
            onClick={clickHandler}
          >
            {showIcon && iconPosition && iconPosition === "left" && (
              <span
                className={`${styles.material_icon_one} material-icons pe-1`}
              >
                {icon ? icon : "add"}
              </span>
            )}
            {btnTxt}
            {showIcon && iconPosition && iconPosition === "right" && (
              <span
                className={`${styles.material_icon_one} material-icons ps-1`}
              >
                {icon ? icon : "add"}
              </span>
            )}
          </button>
        </Link>
      );
    }
  } else {
    if (isModal) {
      return (
        <button
          className={`${styles.btn_small} btn`}
          disabled={isDisabled}
          data-bs-toggle="modal"
          type="button"
          data-bs-target={`#${modalId}`}
          onClick={clickHandler}
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
      );
    } else {
      return (
        <button className={`${styles.btn_small} btn`} disabled={isDisabled}  onClick={clickHandler}>
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
  }
};
