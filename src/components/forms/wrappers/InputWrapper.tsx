import React, { ReactNode } from "react";

type InputWrapperProps = {
  children: ReactNode;
};

const InputWrapper: React.FC<InputWrapperProps> = (props) => {
  return <div className="mb-5">{props.children}</div>;
};

export default InputWrapper;
