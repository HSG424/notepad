import React, { Fragment } from "react";
import { FormWrapper, InputWrapper, ButtonGroupWrapper } from "./wrappers";
import {
  FormButton,
  FormButtonCancel,
  Input,
  Label,
  TextArea,
} from "./elements";
import { useFormHelper } from "../../hooks/use-form-helper";

type DeleteNoteProps = {
  notepadID: string;
  noteID: string;
  title: string;
  note: string;
};

export const DeleteNote: React.FC<DeleteNoteProps> = (props) => {
  const { submitHandler } = useFormHelper("DELETE_NOTE", {
    notepadID: props.notepadID,
    noteID: props.noteID,
  });
  return (
    <FormWrapper title="Delete?">
      <form onSubmit={submitHandler}>
        <InputWrapper>
          <Fragment>
            <Label for="note_title">Note Title</Label>
            <Input
              value={props.title}
              placeholder="Title"
              id="note_title"
              disabled={true}
            />
          </Fragment>
        </InputWrapper>

        <InputWrapper>
          <Fragment>
            <Label for="note_content">Note Content</Label>
            <TextArea
              id="note_content"
              value={props.note}
              rows={9}
              placeholder="Note Content"
              disabled={true}
            />
          </Fragment>
        </InputWrapper>

        <ButtonGroupWrapper>
          <FormButton text="Delete Note" theme="red" />
          <FormButtonCancel />
        </ButtonGroupWrapper>
      </form>
    </FormWrapper>
  );
};
