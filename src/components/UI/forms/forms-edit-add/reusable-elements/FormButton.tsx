import React from "react";
import Button from "../../../Button";
import { IconProps } from "../../../../UI/Icon";

type FormButtonProps = IconProps & {
  text: string;
  disabled: boolean;
};

const FormButton: React.FC<FormButtonProps> = (props) => {
  return (
    <Button
      icon={props.icon}
      text={props.text}
      buttonClasses="bg-primary hover:bg-primary-light active:bg-primary-light py-3 px-4 flex items-center rounded drop-shadow-md disabled:opacity-50"
      iconClasses={props.iconClasses}
      type="submit"
      disabled={props.disabled}
    />
  );
};

export default FormButton;
