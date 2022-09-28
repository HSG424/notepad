import React, { Fragment } from "react";
import FormWrapper from "./FormWrapper";
import InputWrapper from "./InputWrapper";
import FormButton from "./FormButton";
import Input from "../UI/form-elements/Input";
import Label from "../UI/form-elements/Label";

type AddNotepadProps = {
  onClose: () => void;
};

const AddNotepad: React.FC<AddNotepadProps> = (props) => {
  return (
    <FormWrapper title="Create New Notepad" onClose={props.onClose}>
      <form>
        <InputWrapper>
          <Fragment>
            <Label for="notepad_title">Notepad Title</Label>
            <Input placeholder="Title" id="notepad_title" />
          </Fragment>
        </InputWrapper>

        <FormButton />
      </form>
    </FormWrapper>
  );
};

export default AddNotepad;
