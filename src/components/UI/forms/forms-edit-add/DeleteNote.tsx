import React, { Fragment, useContext } from "react";
import Context from "../../../../store/context";
import FormWrapper from "./reusable-elements/FormWrapper";
import InputWrapper from "./reusable-elements/InputWrapper";
import FormButton from "./reusable-elements/FormButton";
import Input from "../form-elements/Input";
import Label from "../form-elements/Label";
import TextArea from "../form-elements/TextArea";

type DeleteNoteProps = {
  notepadID: string;
  noteID: string;
  title: string;
  note: string;
};

const DeleteNote: React.FC<DeleteNoteProps> = (props) => {
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

export default DeleteNote;
