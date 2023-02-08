import React, { Fragment, useContext, ReactNode } from "react";
import { Button } from "../../elements";
import Context from "../../../store/context";

type FormWrapperProps = {
  children: ReactNode;
  title?: string;
};

export const formBigFont = "font-normal font-caveat text-[37px] text-gray-300";

export const FormWrapper: React.FC<FormWrapperProps> = (props) => {
  const { modalClose } = useContext(Context);

  return (
    <Fragment>
      <div className="flex flex-row justify-end mt-[-1px] mr-[4px]">
        <Button
          onClick={modalClose}
          icon="close"
          buttonClasses="text-gray-400 focus:outline-dashed focus:outline-2 flex items-center"
          iconClasses="text-2xl"
        />
      </div>
      <div className="text-[16px] px-[34px] mt-[16px] mb-[59px]">
        {props.title && (
          <h3 className={`${formBigFont} mb-[12px]`}>{props.title}</h3>
        )}
        {props.children}
      </div>
    </Fragment>
  );
};
