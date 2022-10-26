import React, { Fragment, useState, useContext } from "react";
import Context from "../../../../store/context";
import FormWrapper from "./reusable-elements/FormWrapper";
import InputWrapper from "./reusable-elements/InputWrapper";
import FormButton from "./reusable-elements/FormButton";
import Input from "../form-elements/Input";
import Label from "../form-elements/Label";
import TextArea from "../form-elements/TextArea";

type EditNoteProps = {
  notepadID: string;
  noteID: string;
  title: string;
  note: string;
};

const EditNote: React.FC<EditNoteProps> = (props) => {
  const { dispatchNotepadAction, modalClose } = useContext(Context);

  const [title, setTitle] = useState<string>(props.title);

  const [note, setNote] = useState<string>(props.note);

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const noteChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    dispatchNotepadAction({
      type: "EDIT_NOTE",
      payload: {
        title,
        note,
        notepadID: props.notepadID,
        noteID: props.noteID,
      },
    });

    modalClose();
  };

  return (
    <FormWrapper title="Edit Note">
      <form onSubmit={submitHandler}>
        <InputWrapper>
          <Fragment>
            <Label for="note_title">Note Title</Label>
            <Input
              value={title}
              placeholder="Title"
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
              rows={8}
              placeholder="Note Content"
              onChange={noteChangeHandler}
            />
          </Fragment>
        </InputWrapper>

        <FormButton
          text="Save Changes"
          disabled={!title.length || !note.length}
        />
      </form>
    </FormWrapper>
  );
};

export default EditNote;
