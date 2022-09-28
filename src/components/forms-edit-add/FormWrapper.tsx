import React, { Fragment } from "react";
import Button from "../UI/Button";

type FormWrapperProps = {
  children: React.ReactElement;
  title: string;
  onClose: () => void;
};

const FormWrapper: React.FC<FormWrapperProps> = (props) => {
  return (
    <Fragment>
      <div className="flex flex-row justify-end mt-1 mr-0.5">
        <Button
          onClick={props.onClose}
          icon="close"
          buttonClasses="text-gray-400 focus:text-blue-highlight focus:outline-dashed focus:outline-2 flex items-center"
          iconClasses="text-3xl"
        />
      </div>
      <div className="px-4 md:px-8 mt-4 mb-14">
        <h3 className="mb-3 text-lg text-gray-700">{props.title}</h3>
        {props.children}
      </div>
    </Fragment>
  );
};

export default FormWrapper;
