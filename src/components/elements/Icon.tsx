import React from "react";

export type IconTypes = "add" | "edit" | "delete" | "close" | "question_mark";

type IconProps = {
  icon: IconTypes;
  iconClasses?: string;
};

export const Icon: React.FC<IconProps> = (props) => {
  return (
    <span className={`material-symbols-outlined ${props.iconClasses}`}>
      {props.icon}
    </span>
  );
};
