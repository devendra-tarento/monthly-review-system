import React, { Children } from "react";
import { ButtonText } from "../headings/ButtonText";
import { Caption } from "../headings/Caption";
import styles from "./InputField.module.css";

type InputElement = HTMLInputElement;

interface InputFieldProps {
  id?: any;
  name?: string;
  inputType: string;
  showTitle?: boolean;
  showDescription?: boolean;
  title?: string;
  description?: string;
  placeholder?: string;
  showOptTxt: boolean;
  optionalText?: string;
  value?: any;
  changeHandler?: (event: any) => void;
  className?: string;
}

export const InputField =  React.forwardRef<InputElement,InputFieldProps>(({
  id,
  name,
  inputType,
  showTitle,
  showDescription,
  title,
  description,
  placeholder,
  showOptTxt,
  optionalText,
  value,
  changeHandler,
  className,
}: InputFieldProps, ref) => {
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
      <input
        ref={ref}
        name = {name}
        className={`${styles.custom_input_style} form-control ${className}`}
        type={inputType}
        placeholder={placeholder}
        autoComplete="new-password"
        value={value || ""}
        id={id}
        onChange={changeHandler}
      />
      {showDescription && description && (
        <div className="pt-0 ">
          <Caption text={description} />
        </div>
      )}
    </>
  );
});