import { Avatar } from "../index";
import { Caption } from "../headings/Caption";
import { SubHeadingOne } from "../headings/SubHeadingOne";
import styles from "./ListCardTwo.module.css";

interface ListCardTwoProps {
  name: string;
  subText?: string;
  initialText?: string;
  bgColor?: any;
  clickHandler?: (event: any) => void;
  isSelected?: boolean;
  showAvatar: boolean;
  enableCheck: boolean;
  isChecked?: boolean;
}

export const ListCardTwo = ({
  name,
  subText,
  clickHandler,
  isSelected,
  bgColor,
  initialText,
  showAvatar,
  enableCheck,
  isChecked,
}: ListCardTwoProps) => {
  if (enableCheck) {
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
              <div className="d-flex flex-row">
                {showAvatar && (
                  <Avatar
                    initials={`${initialText}`}
                    bgColor={bgColor}
                    variant="small"
                  />
                )}
                <div className={`${styles.custom_positioning} ms-3`}>
                  <SubHeadingOne title={name} />
                </div>
              </div>
            </div>
            <div className="float-end">
              {isChecked ? (
                <span
                  className={`${styles.custom_icon_pos} material-icons
                `}
                >
                  check_circle_outline
                </span>
              ) : (
                <span
                  className={`${styles.custom_icon_pos} material-icons
              `}
                >
                  radio_button_unchecked
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
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
              <div className="d-flex flex-row">
                {showAvatar && (
                  <Avatar
                    initials={`${initialText}`}
                    bgColor={bgColor}
                    variant="small"
                  />
                )}
                <div className={`${styles.custom_positioning} ms-3`}>
                  <SubHeadingOne title={name} />
                </div>
              </div>
            </div>
            <div className="float-end"></div>
          </div>
        </div>
      </div>
    );
  }
};
