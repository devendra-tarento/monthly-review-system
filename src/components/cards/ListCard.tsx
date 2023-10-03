import { Caption } from "../headings/Caption";
import { SubHeadingOne } from "../headings/SubHeadingOne";
import styles from "./ListCard.module.css";
import pinIcon from "../../assets/images/Pin.svg";

interface ListCardProps {
  showDrag?: boolean;
  showPin?: boolean;
  heading: string;
  subHeading?: string;
  timestamp?: string;
  clickHandler?: (event: any) => void;
  pinHandler?: (event: any) => void;
  isSelected?: boolean;
  isPinned?: boolean;
}

export const ListCard = ({
  showDrag,
  showPin,
  heading,
  subHeading,
  timestamp,
  clickHandler,
  isSelected,
  pinHandler,
  isPinned,
}: ListCardProps) => {
  return (
    <div
      className={`${
        isSelected ? styles.list_card_selected : styles.list_card_one
      } card`}
      onClick={clickHandler}
    >
      <div className="col-12 p-0 m-0">
        <div className="clearfix p-3">
          <div className="float-start">
            <div className="">
              <SubHeadingOne title={heading} />
            </div>
            <div className="">
              <label className={`${styles.custom_label}`}>
                {subHeading ? subHeading : ""}
              </label>
            </div>
            <div className="">
              <Caption text={timestamp ? timestamp : ""} />
            </div>
          </div>

          <div className="float-end">
            {showPin && !isPinned && (
              <span
                className={`${styles.drag_handler} ${styles.pin_icon} material-icons pe-3`}
                onClick={pinHandler}
              >
                <img src={pinIcon} alt="Pin item" />
              </span>
            )}
            {showPin && isPinned && (
              <span
                className={`${styles.drag_handler} ${styles.pin_icon_selected} material-icons pe-3`}
                onClick={pinHandler}
              >
                <img src={pinIcon} alt="Pin item" />
              </span>
            )}
            {showDrag && (
              <span className={`${styles.drag_handler} material-icons`}>
                drag_handle
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
