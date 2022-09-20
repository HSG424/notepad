import React from "react";

type LabelProps = {
  children: string;
  for: string;
};

const Label: React.FC<LabelProps> = (props) => {
  return (
    <label className="block mb-3 font-medium text-gray-700" htmlFor={props.for}>
      {props.children}
    </label>
  );
};

export default Label;
