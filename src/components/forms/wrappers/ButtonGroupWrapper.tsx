import React, { ReactNode } from "react";

type ButtonGroupWrapperProps = {
  children: ReactNode;
};

export const ButtonGroupWrapper: React.FC<ButtonGroupWrapperProps> = (
  props
) => {
  return (
    <div className="mt-[23px] flex justify-center gap-x-2.5 font-medium">
      {props.children}
    </div>
  );
};
