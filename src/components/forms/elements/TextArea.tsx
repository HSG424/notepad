import React from "react";
import { inputStyle } from ".";

type TextAreaProps = {
  id: string;
  value: string;
  rows: number;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
};

export const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <textarea
      id={props.id}
      rows={props.rows}
      placeholder={props.placeholder}
      className={inputStyle}
      onChange={props.onChange}
      value={props.value}
      disabled={props.disabled}
    />
  );
};

TextArea.defaultProps = {
  disabled: false,
};
