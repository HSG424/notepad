import React, { Fragment, useContext } from "react";
import Context from "../../store/context";
import { FormWrapper, InputWrapper } from "./wrappers";
import { FormButton, Input, Label, TextArea } from "./elements";

type DeleteNoteProps = {
  notepadID: string;
  noteID: string;
  title: string;
  note: string;
};

export const DeleteNote: React.FC<DeleteNoteProps> = (props) => {
  const { dispatchNotepadAction, modalClose } = useContext(Context);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    dispatchNotepadAction({
      type: "DELETE_NOTE",
      payload: {
        notepadID: props.notepadID,
        noteID: props.noteID,
        note: "",
        title: "",
      },
    });

    modalClose();
  };

  return (
    <FormWrapper title="Delete Note">
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
              rows={8}
              placeholder="Note Content"
              disabled={true}
            />
          </Fragment>
        </InputWrapper>

        <FormButton text="Delete Note" theme="redDanger" />
      </form>
    </FormWrapper>
  );
};
