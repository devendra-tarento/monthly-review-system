import React from "react";
import { ButtonText } from "../headings/ButtonText";
import { Caption } from "../headings/Caption";
import styles from "./InputField.module.css";

type TextAreaElement = HTMLTextAreaElement;

export const TextArea = React.forwardRef<TextAreaElement,any>(({
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
  className,
  ...rest
}:  any, ref) => {
  return (
    <>
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
        ref={ref}
        className={`${styles.custom_input_style} form-control  ${className}`}
        rows={rows}
        placeholder={placeholder}
        autoComplete="new-password"
        id={id}
        {...rest}
      />
      {showDescription &&
        description &&
        (descriptionPos === "bottom" || !descriptionPos) && (
          <div className="pt-2">
            <Caption text={description} />
          </div>
        )}
    </>
  );
});
