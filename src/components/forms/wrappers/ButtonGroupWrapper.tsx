import React, { ReactNode } from "react";

type ButtonGroupWrapperProps = {
  children: ReactNode;
};

export const ButtonGroupWrapper: React.FC<ButtonGroupWrapperProps> = (
  props
) => {
  return <div className="mt-[21px] flex">{props.children}</div>;
};
