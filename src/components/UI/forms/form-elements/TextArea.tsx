import React from "react";
import { inputStyle } from "./Input";

type TextAreaProps = {
  id: string;
  rows: number;
  placeholder: string;
};

const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <textarea
      id={props.id}
      rows={props.rows}
      placeholder={props.placeholder}
      className={inputStyle}
    />
  );
};

export default TextArea;
