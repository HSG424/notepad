import React, { useContext } from "react";
import { Button } from "../../elements";
import Context from "../../../store/context";
import { formButtonStyle } from ".";

type FormButtonCancelProps = {
  text?: "Cancel" | "Close";
};

export const FormButtonCancel: React.FC<FormButtonCancelProps> = (props) => {
  const { modalClose } = useContext(Context);

  return (
    <Button
      text={props.text}
      theme="cancel"
      onClick={modalClose}
      buttonClasses={`${formButtonStyle} px-[22px]`}
    />
  );
};

FormButtonCancel.defaultProps = {
  text: "Cancel",
};
