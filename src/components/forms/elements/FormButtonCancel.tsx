import React, { useContext } from "react";
import { Button } from "../../elements";
import Context from "../../../store/context";
import { formButtonStyle } from ".";

export const FormButtonCancel: React.FC = () => {
  const { modalClose } = useContext(Context);

  return (
    <Button
      text="Cancel"
      theme="cancel"
      onClick={modalClose}
      buttonClasses={`${formButtonStyle} ml-3 px-[22px]`}
    />
  );
};
