import React, { Fragment } from "react";
import FormWrapper from "./reusable-elements/FormWrapper";
import InputWrapper from "./reusable-elements/InputWrapper";
import FormButton from "./reusable-elements/FormButton";
import Input from "../form-elements/Input";
import Label from "../form-elements/Label";

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
