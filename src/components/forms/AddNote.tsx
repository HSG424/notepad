import React, { Fragment, useState, useContext } from "react";
import Context from "../../store/context";
import { FormWrapper, InputWrapper } from "./wrappers";
import { FormButton, Input, Label, TextArea } from "./elements";

type AddNoteProps = {
  id: string;
};

export const AddNote: React.FC<AddNoteProps> = (props) => {
  const { dispatchNotepadAction, modalClose } = useContext(Context);

  const [title, setTitle] = useState<string>("");

  const [note, setNote] = useState<string>("");

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const noteChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatchNotepadAction({
      type: "ADD_NOTE",
      payload: { title, note, id: props.id },
    });
    modalClose();
  };

  return (
    <FormWrapper title="Create New Note">
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

        <FormButton
          text="Create Note"
          disabled={!title.length || !note.length}
          icon="add"
        />
      </form>
    </FormWrapper>
  );
};
