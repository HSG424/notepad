import React from "react";
import Button from "../../../Button";

const FormButton: React.FC = () => {
  return (
    <Button
      icon="add"
      text="Notepad"
      buttonClasses="bg-primary hover:bg-primary-light active:bg-primary-light py-3 px-4 flex items-center rounded drop-shadow-md"
      iconClasses="mr-1"
    />
  );
};

export default FormButton;
