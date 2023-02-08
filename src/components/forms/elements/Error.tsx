import React from "react";

type ErrorProps = {
  children: string;
};

export const Error: React.FC<ErrorProps> = (props) => {
  return (
    <div className="text-yellow-highlight mt-[16px] px-[22px] py-[15px] border border-dashed border-yellow-highlight rounded-md">
      <p>{props.children}</p>
    </div>
  );
};
