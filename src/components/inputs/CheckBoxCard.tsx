import { Caption } from "../headings/Caption";
import { SubHeadingTwo } from "../headings/SubHeadingTwo";
import styles from "./CheckBoxCard.module.css";

interface CheckBoxCardProps {
  isChecked: boolean;
  label: string;
  clickHandler?: (event: any) => void;
  subLabel?: string;
}

export const CheckBoxCard = ({
  isChecked,
  label,
  clickHandler,
  subLabel,
}: CheckBoxCardProps) => {
  return (
    <div
      className={`${
        !isChecked ? styles.check_box_card : styles.check_box_card_selected
      }`}
    >
      <div className="col-12 p-4" onClick={clickHandler}>
        <div className="clearfix mt-1">
          <div className="float-start" style={{ paddingTop: "0.18rem" }}>
            <SubHeadingTwo title={label} />
            {subLabel && <Caption text={`${subLabel}`} />}
          </div>
          <div className="float-end">
            {isChecked ? (
              <span
                className={`${
                  subLabel ? "material-icons pt-2 mt-1" : "material-icons"
                }`}
              >
                check_circle_outline
              </span>
            ) : (
              <span
                className={`${
                  subLabel ? "material-icons pt-2 mt-1" : "material-icons"
                }`}
              >
                radio_button_unchecked
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
