import React, { useState, Fragment, useContext } from "react";
import Context from "../../store/context";
import { FormWrapper, InputWrapper, ButtonGroupWrapper } from "./wrappers";
import { FormButton, FormButtonCancel, Input, Label } from "./elements";

type EditNotepadProps = {
  id: string;
  title: string;
};

export const EditNotepad: React.FC<EditNotepadProps> = (props) => {
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
    <FormWrapper title="Edit Notepad Title">
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
          <FormButton disabled={!title.length} text="Save Changes" />
          <FormButtonCancel />
        </ButtonGroupWrapper>
      </form>
    </FormWrapper>
  );
};
