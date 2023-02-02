import React, { useState, Fragment, useContext } from "react";
import Context from "../../store/context";
import { FormWrapper, InputWrapper, ButtonGroupWrapper } from "./wrappers";
import { FormButton, FormButtonCancel, Input, Label } from "./elements";

export const AddNotepad: React.FC = () => {
  const { dispatchNotepadAction, modalClose } = useContext(Context);

  const [title, setTitle] = useState<string>("");

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatchNotepadAction({
      type: "ADD_NOTEPAD",
      payload: { title, note: "" },
    });
    modalClose();
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
              placeholder="Notepad Title"
              id="notepad_title"
            />
          </Fragment>
        </InputWrapper>

        <ButtonGroupWrapper>
          <FormButton
            disabled={!title.length}
            text="Create Notepad"
            icon="add"
          />
          <FormButtonCancel />
        </ButtonGroupWrapper>
      </form>
    </FormWrapper>
  );
};
