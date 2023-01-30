import React from "react";

type InputProps = {
  placeholder: string;
  id: string;
  type?: "text";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
};

export const inputStyle =
  "appearance-none bg-[#222222] bg-opacity-80 text-gray-200 placeholder:text-gray-300 border border-dark-border focus:border-gray-600 rounded w-full py-2 px-3 focus:outline-none leading-[23px]";

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      className={inputStyle}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      maxLength={70}
      disabled={props.disabled}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

Input.defaultProps = {
  type: "text",
  disabled: false,
};
