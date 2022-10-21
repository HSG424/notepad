import React, { Fragment, useContext } from "react";
import Context from "../../../../store/cart-context";
import FormWrapper from "./reusable-elements/FormWrapper";
import InputWrapper from "./reusable-elements/InputWrapper";
import FormButton from "./reusable-elements/FormButton";
import Input from "../form-elements/Input";
import Label from "../form-elements/Label";

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

        <FormButton disabled={false} text="Delete Notepad" theme="redDanger" />
      </form>
    </FormWrapper>
  );
};

export default DeleteNotepad;
