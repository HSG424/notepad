import React from "react";

type InputWrapperProps = {
  children: React.ReactElement;
};

const InputWrapper: React.FC<InputWrapperProps> = (props) => {
  return <div className="mb-5">{props.children}</div>;
};

export default InputWrapper;
