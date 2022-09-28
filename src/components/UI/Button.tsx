import React from "react";
import Icon, { IconProps } from "../UI/Icon";

type ButtonProps = IconProps & {
  buttonClasses?: string;
  text?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`text-white ${
        !props.text
          ? "hover:text-blue-highlight active:text-blue-highlight"
          : ""
      } ${props.buttonClasses}`}
    >
      <Icon icon={props.icon} iconClasses={props.iconClasses} />
      {props.text}
    </button>
  );
};

export default Button;
