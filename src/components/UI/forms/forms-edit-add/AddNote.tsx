import React, { Fragment } from "react";
import FormWrapper from "./reusable-elements/FormWrapper";
import InputWrapper from "./reusable-elements/InputWrapper";
import FormButton from "./reusable-elements/FormButton";
import Input from "../form-elements/Input";
import Label from "../form-elements/Label";
import TextArea from "../form-elements/TextArea";

type AddNoteProps = {
  onClose: () => void;
};

const AddNote: React.FC<AddNoteProps> = (props) => {
  return (
    <FormWrapper title="Create New Note" onClose={props.onClose}>
      <form>
        <InputWrapper>
          <Fragment>
            <Label for="note_title">Note Title</Label>
            <Input placeholder="Title" id="note_title" />
          </Fragment>
        </InputWrapper>

        <InputWrapper>
          <Fragment>
            <Label for="note_content">Note Content</Label>
            <TextArea id="note_content" rows={8} placeholder="Note Content" />
          </Fragment>
        </InputWrapper>

        <FormButton />
      </form>
    </FormWrapper>
  );
};

export default AddNote;
