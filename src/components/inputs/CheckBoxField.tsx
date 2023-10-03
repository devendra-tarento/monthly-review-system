import { SubHeadingTwo } from "../index";
import styles from "./CheckBoxField.module.css";

interface CheckBoxFieldProps {
  isChecked: boolean;
  label: string;
  clickHandler?: (event: any) => void;
  subLabel?: string;
}

export const CheckBoxField = ({
  isChecked,
  label,
  clickHandler,
  subLabel,
}: CheckBoxFieldProps) => {
  return (
    <div
      className={`${
        !isChecked ? styles.check_box_field : styles.check_box_field_selected
      }`}
    >
      <div className="p-1" onClick={clickHandler}>
        <div className="clearfix">
          <div className="float-start mx-2">
            {isChecked ? (
              <div className="d-flex">
                <span
                  className={`${
                    subLabel ? "material-icons my-1" : "material-icons"
                  }`}
                >
                  check_circle_outline
                </span>
                <div className="px-2" style={{ paddingTop: "0.43rem" }}>
                  <SubHeadingTwo title={label} />
                </div>
              </div>
            ) : (
              <div className="d-flex">
                <span
                  className={`${
                    subLabel ? "material-icons my-1" : "material-icons"
                  }`}
                >
                  radio_button_unchecked
                </span>
                <div className="px-2" style={{ paddingTop: "0.43rem" }}>
                  <SubHeadingTwo title={label} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
