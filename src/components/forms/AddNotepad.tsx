import React, { Fragment } from "react";
import { FormWrapper, InputWrapper, ButtonGroupWrapper } from "./wrappers";
import { FormButton, FormButtonCancel, Input, Label, Error } from "./elements";
import { useFormHelper } from "../../hooks/use-form-helper";

export const AddNotepad: React.FC = () => {
  const { title, titleChangeHandler, formError, submitHandler } =
    useFormHelper("ADD_NOTEPAD");

  return (
    <FormWrapper title="New Notepad">
      <form onSubmit={submitHandler}>
        <InputWrapper>
          <Fragment>
            <Label for="notepad_title">Notepad Title</Label>
            <Input
              value={title}
              onChange={titleChangeHandler}
              placeholder="Notepad Title"
              id="notepad_title"
            />
          </Fragment>
        </InputWrapper>

        {formError && <Error>{formError}</Error>}

        <ButtonGroupWrapper>
          <FormButton text="Create" />
          <FormButtonCancel />
        </ButtonGroupWrapper>
      </form>
    </FormWrapper>
  );
};
