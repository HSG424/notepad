import React from "react";
import { FormWrapper, ButtonGroupWrapper, formBigFont } from "./wrappers";
import { FormButton, FormButtonCancel } from "./elements";
import { useFormHelper } from "../../hooks/use-form-helper";

export const DeleteAll: React.FC = () => {
  const { submitHandler } = useFormHelper("DELETE_ALL");

  return (
    <FormWrapper>
      <form onSubmit={submitHandler}>
        <p className={`${formBigFont} mt-[31px] mb-[-9px]`}>Delete all data?</p>

        <ButtonGroupWrapper>
          <FormButton text="Delete All" theme="red" />
          <FormButtonCancel />
        </ButtonGroupWrapper>
      </form>
    </FormWrapper>
  );
};
