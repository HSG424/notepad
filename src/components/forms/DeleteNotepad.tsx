import React, { Fragment } from "react";
import { FormWrapper, InputWrapper, ButtonGroupWrapper } from "./wrappers";
import { FormButton, FormButtonCancel, Input, Label } from "./elements";
import { useFormHelper } from "../../hooks/use-form-helper";

type DeleteNotepadProps = {
  id: string;
  title: string;
};

export const DeleteNotepad: React.FC<DeleteNotepadProps> = (props) => {
  const { submitHandler } = useFormHelper("DELETE_NOTEPAD", {
    notepadID: props.id,
  });

  return (
    <FormWrapper title="Delete?">
      <form onSubmit={submitHandler}>
        <InputWrapper>
          <Fragment>
            <Label for="notepad_title">Notepad Title</Label>
            <Input
              value={props.title}
              placeholder="Title"
              id="notepad_title"
              disabled={true}
            />
          </Fragment>
        </InputWrapper>

        <ButtonGroupWrapper>
          <FormButton text="Delete Notepad" theme="red" />
          <FormButtonCancel />
        </ButtonGroupWrapper>
      </form>
    </FormWrapper>
  );
};
