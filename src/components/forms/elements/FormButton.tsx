import React from "react";
import { Button, IconTypes } from "../../elements";
import { buttonBlue, buttonRed } from "../../main/Notepads";

const themeMap = {
  default: buttonBlue,
  redDanger: buttonRed,
};

type FormButtonProps = {
  icon?: IconTypes;
  iconClasses?: string;
  text: string;
  disabled?: boolean;
  theme?: "default" | "redDanger";
};

export const FormButton: React.FC<FormButtonProps> = (props) => {
  return (
    <Button
      icon={props.icon}
      text={props.text}
      buttonClasses={`${
        themeMap[props.theme!]
      } text-gray-100 mt-[18px] py-[12px] px-[19px] flex items-center rounded drop-shadow-md cursor-pointer`}
      iconClasses={`text-[20px] mr-1 ${props.iconClasses}`}
      type="submit"
      disabled={props.disabled}
    />
  );
};

FormButton.defaultProps = {
  theme: "default",
  disabled: false,
};
