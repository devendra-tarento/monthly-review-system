import React from "react";
import { ButtonText } from "../headings/ButtonText";
import { Caption } from "../headings/Caption";
import styles from "./InputField.module.css";

type InputElement = HTMLInputElement;

export const Input = React.forwardRef<InputElement,any>(({ 
    className, 
    showTitle, 
    title, 
    showOptTxt, 
    optionalText,
    showDescription,
    description,  
    ...rest }: any, ref) => {
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
           className={`${styles.custom_input_style} form-control ${className}`}
           {...rest}
         />
        {showDescription && description && (
           <div className="pt-2">
            <Caption text={description} />
          </div>
        )}
     </>
    );
  });