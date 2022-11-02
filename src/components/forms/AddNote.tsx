import React, { Fragment, useState, useContext } from "react";
import Context from "../../store/context";
import FormWrapper from "./wrappers/FormWrapper";
import InputWrapper from "./wrappers/InputWrapper";
import FormButton from "./elements/FormButton";
import Input from "./elements/Input";
import Label from "./elements/Label";
import TextArea from "./elements/TextArea";

type AddNoteProps = {
  id: string;
};

const AddNote: React.FC<AddNoteProps> = (props) => {
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
          text="Note"
          disabled={!title.length || !note.length}
          icon="add"
          iconClasses="mr-1"
        />
      </form>
    </FormWrapper>
  );
};

export default AddNote;
