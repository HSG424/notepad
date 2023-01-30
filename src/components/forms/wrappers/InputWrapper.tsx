import React, { ReactNode } from "react";

type InputWrapperProps = {
  children: ReactNode;
};

export const InputWrapper: React.FC<InputWrapperProps> = (props) => {
  return <div>{props.children}</div>;
};
