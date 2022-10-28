import React from "react";

export type IconTypes = "add" | "edit" | "delete" | "close";

type IconProps = {
  icon: IconTypes;
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
