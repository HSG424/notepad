import React from "react";
import Button from "../UI/Button";
import Input from "../UI/form-elements/Input";
import Label from "../UI/form-elements/Label";

const AddNotepad: React.FC = () => {
  return (
    <form className="px-7 pt-6 pb-8">
      <div className="mb-5">
        <Label for="notepad_title">Give your new notepad a title:</Label>
        <Input placeholder="Title" id="notepad_title" />
      </div>

      <Button
        icon="add"
        text="Create Notepad"
        buttonClasses="bg-primary hover:bg-primary-light active:bg-primary-light py-2.5 px-3.5 flex items-center rounded"
        iconClasses="mr-1"
      />
    </form>
  );
};

export default AddNotepad;
