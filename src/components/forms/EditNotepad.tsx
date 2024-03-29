import React, { Fragment } from "react";
import { FormWrapper, InputWrapper, ButtonGroupWrapper } from "./wrappers";
import { FormButton, FormButtonCancel, Input, Label, Error } from "./elements";
import { useFormHelper } from "../../hooks/use-form-helper";

type EditNotepadProps = {
  id: string;
  title: string;
};

export const EditNotepad: React.FC<EditNotepadProps> = (props) => {
  const { title, titleChangeHandler, formError, submitHandler } = useFormHelper(
    "EDIT_NOTEPAD",
    {
      notepadID: props.id,
    },
    { title: props.title }
  );

  return (
    <FormWrapper title="Edit Notepad">
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
          <FormButton text="Save" />
          <FormButtonCancel />
        </ButtonGroupWrapper>
      </form>
    </FormWrapper>
  );
};
