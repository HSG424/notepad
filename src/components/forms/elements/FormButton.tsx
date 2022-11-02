import React from "react";
import Button from "../../elements/Button";
import { IconTypes } from "../../elements/Icon";

const themeMap = {
  default: "bg-primary hover:bg-primary-light active:bg-primary-light",
  redDanger: "bg-red-600 hover:bg-red-500 active:bg-red-500",
};

type FormButtonProps = {
  icon?: IconTypes;
  iconClasses?: string;
  text: string;
  disabled?: boolean;
  theme?: "default" | "redDanger";
};

const FormButton: React.FC<FormButtonProps> = (props) => {
  return (
    <Button
      icon={props.icon}
      text={props.text}
      buttonClasses={`${
        themeMap[props.theme!]
      } py-3 px-4 flex items-center rounded drop-shadow-md disabled:opacity-50`}
      iconClasses={props.iconClasses}
      type="submit"
      disabled={props.disabled}
    />
  );
};

FormButton.defaultProps = {
  theme: "default",
  disabled: false,
};

export default FormButton;
