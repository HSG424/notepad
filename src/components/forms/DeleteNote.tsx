import React, { Fragment, useContext } from "react";
import Context from "../../store/context";
import FormWrapper from "./wrappers/FormWrapper";
import InputWrapper from "./wrappers/InputWrapper";
import FormButton from "./elements/FormButton";
import Input from "./elements/Input";
import Label from "./elements/Label";
import TextArea from "./elements/TextArea";

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
