import React, { Fragment, useContext } from "react";
import Context from "../../store/context";
import FormWrapper from "./wrappers/FormWrapper";
import InputWrapper from "./wrappers/InputWrapper";
import FormButton from "./elements/FormButton";
import Input from "./elements/Input";
import Label from "./elements/Label";

type DeleteNotepadProps = {
  id: string;
  title: string;
};

const DeleteNotepad: React.FC<DeleteNotepadProps> = (props) => {
  const { dispatchNotepadAction, modalClose } = useContext(Context);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    dispatchNotepadAction({
      type: "DELETE_NOTEPAD",
      payload: { id: props.id, note: "", title: "" },
    });

    modalClose();
  };

  return (
    <FormWrapper title="Delete Notepad">
      <form onSubmit={submitHandler}>
        <InputWrapper>
          <Fragment>
            <Label for="notepad_title">Notepad Title</Label>
            <Input
              value={props.title}
              placeholder="Title"
              id="notepad_title"
              disabled={true}
            />
          </Fragment>
        </InputWrapper>

        <FormButton text="Delete Notepad" theme="redDanger" />
      </form>
    </FormWrapper>
  );
};

export default DeleteNotepad;
