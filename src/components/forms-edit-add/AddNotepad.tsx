import React, { Fragment } from "react";
import Button from "../UI/Button";
import Input from "../UI/form-elements/Input";
import Label from "../UI/form-elements/Label";

const AddNotepad: React.FC = () => {
  return (
    <Fragment>
      <div className="flex flex-row justify-end mt-1 mr-0.5">
        <Button
          icon="close"
          buttonClasses="text-gray-400 focus:text-blue-highlight focus:outline-dashed focus:outline-2 flex items-center"
          iconClasses="text-3xl"
        />
      </div>
      <div className="px-4 md:px-8 mt-4 mb-14">
        <h3 className="mb-3 text-lg text-gray-700">Create New Notepad</h3>
        <form>
          <div className="mb-5">
            <Label for="notepad_title">Notepad Title</Label>
            <Input placeholder="Title" id="notepad_title" />
          </div>

          <Button
            icon="add"
            text="Notepad"
            buttonClasses="bg-primary hover:bg-primary-light active:bg-primary-light py-3 px-4 flex items-center rounded drop-shadow-md"
            iconClasses="mr-1"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default AddNotepad;
