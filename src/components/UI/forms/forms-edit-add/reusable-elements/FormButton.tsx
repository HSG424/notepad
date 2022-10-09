import React from "react";
import Button from "../../../Button";

type FormButtonProps = {
  text: string;
};

const FormButton: React.FC<FormButtonProps> = (props) => {
  return (
    <Button
      icon="add"
      text={props.text}
      buttonClasses="bg-primary hover:bg-primary-light active:bg-primary-light py-3 px-4 flex items-center rounded drop-shadow-md"
      iconClasses="mr-1"
    />
  );
};

export default FormButton;
