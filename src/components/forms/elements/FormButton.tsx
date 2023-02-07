import React from "react";
import { Button, IconTypes } from "../../elements";

type FormButtonProps = {
  icon?: IconTypes;
  iconClasses?: string;
  text: string;
  theme?: "blue" | "red";
};

export const formButtonStyle =
  "text-gray-100 py-[12px] flex items-center rounded drop-shadow-md cursor-pointer";

export const FormButton: React.FC<FormButtonProps> = (props) => {
  return (
    <Button
      icon={props.icon}
      text={props.text}
      theme={props.theme}
      buttonClasses={`${formButtonStyle} px-[18px] mr-3`}
      iconClasses={`text-[20px] mr-1 ${props.iconClasses}`}
      type="submit"
    />
  );
};

FormButton.defaultProps = {
  theme: "blue",
};
