import React, { Fragment, useContext, ReactNode } from "react";
import { Button } from "../../elements";
import Context from "../../../store/context";

type FormWrapperProps = {
  children: ReactNode;
  title: string;
};

export const FormWrapper: React.FC<FormWrapperProps> = (props) => {
  const { modalClose } = useContext(Context);

  return (
    <Fragment>
      <div className="flex flex-row justify-end mt-0.5 mr-0.5">
        <Button
          onClick={modalClose}
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
