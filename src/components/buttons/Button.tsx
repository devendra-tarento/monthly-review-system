import styles from "./Button.module.css";
import React from "react";

export enum ButtonVariant{
    contained,
    outline,
}

export enum ButtonSize {
    small,
    large,
    default,
}

export enum ButtonType {
    primary,
    secondary
}

interface ButtonProps {
  onClick?: (event: any) => void;
  variant?: ButtonVariant,
  size?: ButtonSize,
  type?: ButtonType,
  className?: string,
  disabled?: boolean,
  children?: React.ReactNode,
}

const getSizeClass = (size: ButtonSize) => {
    let className= "";
    switch(size) {
        case ButtonSize.small:
            className = "btn-sm";
            break;
        case ButtonSize.large:
            className = "btn-lg";
            break;
    }
    return className;
}

const getTypeVariantClass = (type: ButtonType, variant: ButtonVariant) => {
    let className= "";
    switch(type) {
        case ButtonType.primary:
            className = variant === ButtonVariant.outline ? "btn-outline-primary" : `${styles.btn_primary}`;
            break;
        case ButtonType.secondary:
            className = variant === ButtonVariant.outline ? "btn-outline-secondary" : `${styles.btn_secondary}`;
            break;
    }
    return className;
    
}

export const Button = ({
    onClick,
    variant = ButtonVariant.contained,
    type= ButtonType.primary,
    size= ButtonSize.default,
    className = "",
    disabled = false,
    children,
}: ButtonProps) => {
    return (
        <button
            className={`${getTypeVariantClass(type,variant)} ${getSizeClass(size)} ${className} ${styles.no_radius} btn`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
  

