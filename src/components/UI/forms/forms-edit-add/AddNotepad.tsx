import React, { useState, Fragment, useContext } from "react";
import Context from "../../../../store/cart-context";
import FormWrapper from "./reusable-elements/FormWrapper";
import InputWrapper from "./reusable-elements/InputWrapper";
import FormButton from "./reusable-elements/FormButton";
import Input from "../form-elements/Input";
import Label from "../form-elements/Label";

const AddNotepad: React.FC = () => {
  const { dispatchNotepadAction } = useContext(Context);

  const [title, setTitle] = useState<string>("");

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatchNotepadAction({ type: "ADD_NOTEPAD", payload: { title } });
  };

  return (
    <FormWrapper title="Create New Notepad">
      <form onSubmit={submitHandler}>
        <InputWrapper>
          <Fragment>
            <Label for="notepad_title">Notepad Title</Label>
            <Input
              value={title}
              onChange={titleChangeHandler}
              placeholder="Title"
              id="notepad_title"
            />
          </Fragment>
        </InputWrapper>

        <FormButton disabled={!title.length} text="Notepad" />
      </form>
    </FormWrapper>
  );
};

export default AddNotepad;
