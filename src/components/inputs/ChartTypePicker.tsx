import { ButtonText } from "../headings/ButtonText";
import styles from "./ChartTypePicker.module.css";

interface ChartTypePickerProps {
  showTitle: boolean;
  title?: string;
  itemList: any;
  isImage: boolean;
  clickHandler: (event: any, selectedValue: any) => void;
}

export const ChartTypePicker = ({
  itemList,
  showTitle,
  title,
  isImage,
  clickHandler,
}: ChartTypePickerProps) => {
  return (
    <>
      {showTitle && title && <ButtonText text={title} />}
      <div className={`${styles.chart_type_picker} col-12`}>
        <div className="d-flex flex-column flex-md-row flex-lg-row m-0 p-0">
          {!isImage &&
            itemList.length > 0 &&
            itemList.map((item: any, j: number) => {
              return (
                <div
                  className={`${
                    !item.isSelected
                      ? styles.chart_type_picker_btn
                      : styles.chart_type_picker_btn_selected
                  } m-1`}
                  key={j}
                  title={item.itemName}
                  onClick={(e) => clickHandler(e, item)}
                >
                  <span
                    className={`${
                      !item.isSelected
                        ? styles.chart_type_picker_icon
                        : styles.chart_type_picker_icon_selected
                    } ${
                      item.isInverted ? styles.chart_type_picker_icon_inverted : ""
                    } material-icons`}
                  >
                    {item.iconUrl}
                  </span>
                </div>
              );
            })}
          {isImage &&
            itemList.length > 0 &&
            itemList.map((item: any, j: number) => {
              return (
                <div
                  className={`${
                    !item.isSelected
                      ? styles.chart_type_picker_btn
                      : styles.chart_type_picker_btn_selected_one
                  } m-1`}
                  key={j}
                  title={item.itemName}
                  role={"button"}
                  onClick={(e) => clickHandler(e, item)}
                >
                  <img
                    className={`${
                      !item.isSelected
                        ? styles.chart_type_picker_btn
                        : styles.chart_type_picker_btn_selected_one
                    } p-1`}
                    src={item.iconUrl}
                    alt={item.itemName}
                    width="25"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
