import React from "react";

type BIprops = {
  icon: "add" | "edit" | "delete";
  buttonClasses?: string;
  iconClasses?: string;
  text?: string;
};

const Button: React.FC<BIprops> = (props) => {
  return (
    <button type="button" className={`text-white ${props.buttonClasses}`}>
      <span className={`material-symbols-outlined ${props.iconClasses}`}>
        {props.icon}
      </span>
      {props.text}
    </button>
  );
};

export default Button;
