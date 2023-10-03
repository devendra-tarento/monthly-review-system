import { ButtonText } from "../headings/ButtonText";
import { Caption } from "../headings/Caption";
import styles from "./InputField.module.css";

interface TextAreaFieldProps {
  id?: any;
  showTitle?: boolean;
  showDescription?: boolean;
  title?: string;
  description?: string;
  placeholder?: string;
  rows?: number;
  descriptionPos?: string;
  showOptTxt: boolean;
  optionalText?: string;
  value?: any;
  changeHandler?: (event: any) => void;
}

export const TextAreaField = ({
  id,
  showTitle,
  showDescription,
  title,
  description,
  placeholder,
  rows,
  descriptionPos,
  showOptTxt,
  optionalText,
  value,
  changeHandler,
}: TextAreaFieldProps) => {
  return (
    <div className="mt-2">
      <div className="d-flex flex-row">
        {showTitle && title && <ButtonText text={title} />}
        {showOptTxt && optionalText && (
          <div className="ps-1 align-self-center">
            <Caption text={optionalText} />
          </div>
        )}
      </div>
      {showDescription && description && descriptionPos === "top" && (
        <div className="pb-1">
          <Caption text={description} />
        </div>
      )}
      <textarea
        className={`${styles.custom_input_style} form-control`}
        rows={rows}
        placeholder={placeholder}
        autoComplete="new-password"
        value={value || ""}
        onChange={changeHandler}
        id={id}
      />
      {showDescription &&
        description &&
        (descriptionPos === "bottom" || !descriptionPos) && (
          <div className="pt-2">
            <Caption text={description} />
          </div>
        )}
    </div>
  );
};
