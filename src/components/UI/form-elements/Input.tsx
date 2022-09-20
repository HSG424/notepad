import React from "react";

type InputProps = {
  placeholder: string;
  id: string;
  type?: "text";
};

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-highlight"
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
