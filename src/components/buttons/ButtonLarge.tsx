import { Link } from "react-router-dom";
import styles from "./ButtonLarge.module.css";

interface ButtonLargeProps {
  btnTxt: string;
  isLink?: boolean;
  link?: any;
  showIcon: boolean;
  icon?: string;
  clickHandler?: (event: any) => void;
  modalHandler?: (event: any) => void;
  iconPosition?: string;
  isModal?: boolean;
  modalId?: string;
}

export const ButtonLarge = ({
  isLink,
  btnTxt,
  link,
  showIcon,
  clickHandler,
  modalHandler,
  iconPosition,
  icon,
  isModal,
  modalId,
}: ButtonLargeProps) => {
  if (isLink) {
    if (isModal) {
      return (
        <Link to={link ? link : ""}>
          <button
            className={`${styles.btn_large} btn w-100`}
            data-bs-toggle="modal"
            type="button"
            data-bs-target={`#${modalId}`}
            onClick={modalHandler}
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
          <button className={`${styles.btn_large} btn w-100`}>
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
          className={`${styles.btn_large} btn w-100`}
          data-bs-toggle="modal"
          type="button"
          data-bs-target={`#${modalId}`}
          onClick={modalHandler}
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
    } else {
      return (
        <button
          className={`${styles.btn_large} btn w-100`}
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
  }
};
