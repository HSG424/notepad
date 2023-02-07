import React from "react";
import { Icon, IconTypes } from ".";

const buttonOpacity = "bg-opacity-60 hover:bg-opacity-60";
const buttonThemeMap = {
  blue: `bg-blue-900 hover:bg-blue-800 ${buttonOpacity}`,
  red: `bg-red-900 hover:bg-red-800 ${buttonOpacity}`,
  cancel: `bg-gray-700 hover:bg-gray-600 ${buttonOpacity}`,
};

type ButtonProps = {
  icon?: IconTypes;
  iconClasses?: string;
  buttonClasses?: string;
  text?: string;
  title?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  theme?: undefined | "blue" | "red" | "cancel";
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      title={props.title}
      onClick={props.onClick}
      className={`${
        !props.text
          ? "hover:text-yellow-highlight active:text-yellow-highlight focus:text-yellow-highlight"
          : ""
      } ${props.theme ? buttonThemeMap[props.theme!] : ""} ${
        props.buttonClasses
      }`}
    >
      {props.icon && <Icon icon={props.icon} iconClasses={props.iconClasses} />}
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  theme: undefined,
};
