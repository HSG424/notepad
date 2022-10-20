import React from "react";
import Icon, { IconProps } from "../UI/Icon";

type ButtonProps = IconProps & {
  buttonClasses?: string;
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      className={`text-white ${
        !props.text
          ? "hover:text-blue-highlight active:text-blue-highlight"
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

export default Button;
