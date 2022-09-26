import React from "react";

export type IconProps = {
  icon: "add" | "edit" | "delete" | "close";
  iconClasses?: string;
};

const Icon: React.FC<IconProps> = (props) => {
  return (
    <span className={`material-symbols-outlined ${props.iconClasses}`}>
      {props.icon}
    </span>
  );
};

export default Icon;
