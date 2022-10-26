import React, { useState, Fragment, useContext } from "react";
import Context from "../../../../store/context";
import FormWrapper from "./reusable-elements/FormWrapper";
import InputWrapper from "./reusable-elements/InputWrapper";
import FormButton from "./reusable-elements/FormButton";
import Input from "../form-elements/Input";
import Label from "../form-elements/Label";

type EditNotepadProps = {
  id: string;
  title: string;
};

const EditNotepad: React.FC<EditNotepadProps> = (props) => {
  const { dispatchNotepadAction, modalClose } = useContext(Context);

  const [title, setTitle] = useState<string>(props.title);

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatchNotepadAction({
      type: "EDIT_NOTEPAD",
      payload: { title, id: props.id, note: "" },
    });
    modalClose();
  };

  return (
    <FormWrapper title="Notepad Title">
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

        <FormButton disabled={!title.length} text="Save Changes" />
      </form>
    </FormWrapper>
  );
};

export default EditNotepad;
