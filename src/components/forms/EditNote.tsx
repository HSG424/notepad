import React, { Fragment } from "react";
import { FormWrapper, InputWrapper, ButtonGroupWrapper } from "./wrappers";
import {
  FormButton,
  FormButtonCancel,
  Input,
  Label,
  TextArea,
  Error,
} from "./elements";
import { useFormHelper } from "../../hooks/use-form-helper";

type EditNoteProps = {
  notepadID: string;
  noteID: string;
  title: string;
  note: string;
};

export const EditNote: React.FC<EditNoteProps> = (props) => {
  const {
    title,
    titleChangeHandler,
    note,
    noteChangeHandler,
    formError,
    submitHandler,
  } = useFormHelper(
    "EDIT_NOTE",
    {
      notepadID: props.notepadID,
      noteID: props.noteID,
    },
    { title: props.title, note: props.note }
  );

  return (
    <FormWrapper title="Edit Note">
      <form onSubmit={submitHandler}>
        <InputWrapper>
          <Fragment>
            <Label for="note_title">Note Title</Label>
            <Input
              value={title}
              placeholder="Note Title"
              id="note_title"
              onChange={titleChangeHandler}
            />
          </Fragment>
        </InputWrapper>

        <InputWrapper>
          <Fragment>
            <Label for="note_content">Note Content</Label>
            <TextArea
              id="note_content"
              value={note}
              rows={9}
              placeholder="Note Content"
              onChange={noteChangeHandler}
            />
          </Fragment>
        </InputWrapper>

        {formError && <Error formError={formError} />}

        <ButtonGroupWrapper>
          <FormButton text="Save Changes" />
          <FormButtonCancel />
        </ButtonGroupWrapper>
      </form>
    </FormWrapper>
  );
};
