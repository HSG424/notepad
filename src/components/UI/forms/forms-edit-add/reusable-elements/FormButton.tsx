import React from "react";
import Button from "../../../Button";

type FormButtonProps = {
  text: string;
  disabled: boolean;
};

const FormButton: React.FC<FormButtonProps> = (props) => {
  return (
    <Button
      icon="add"
      text={props.text}
      buttonClasses="bg-primary hover:bg-primary-light active:bg-primary-light py-3 px-4 flex items-center rounded drop-shadow-md disabled:opacity-50"
      iconClasses="mr-1"
      type="submit"
      disabled={props.disabled}
    />
  );
};

export default FormButton;
