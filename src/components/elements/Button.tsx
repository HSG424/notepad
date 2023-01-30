import React from "react";
import { Icon, IconTypes } from ".";

type ButtonProps = {
  icon?: IconTypes;
  iconClasses?: string;
  buttonClasses?: string;
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      className={`text-gray-300 ${
        !props.text
          ? "hover:text-yellow-highlight active:text-yellow-highlight focus:text-yellow-highlight"
          : ""
      } ${props.buttonClasses}`}
    >
      {props.icon && <Icon icon={props.icon} iconClasses={props.iconClasses} />}
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  disabled: false,
};
