import React, { useState, Fragment, useContext } from "react";
import Context from "../../store/context";
import FormWrapper from "./wrappers/FormWrapper";
import InputWrapper from "./wrappers/InputWrapper";
import FormButton from "./elements/FormButton";
import Input from "./elements/Input";
import Label from "./elements/Label";

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
