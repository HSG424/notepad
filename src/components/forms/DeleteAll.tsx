import React from "react";
import { FormWrapper, ButtonGroupWrapper, formBigFont } from "./wrappers";
import { FormButton, FormButtonCancel } from "./elements";
import { useFormHelper } from "../../hooks/use-form-helper";

export const DeleteAll: React.FC = () => {
  const { submitHandler } = useFormHelper("DELETE_ALL");

  return (
    <FormWrapper>
      <form onSubmit={submitHandler}>
        <p className={`${formBigFont} mt-[32px] mb-[24px]`}>
          Delete All Notepad Data?
        </p>

        <ButtonGroupWrapper>
          <FormButton text="Delete All Data" theme="red" />
          <FormButtonCancel />
        </ButtonGroupWrapper>
      </form>
    </FormWrapper>
  );
};
