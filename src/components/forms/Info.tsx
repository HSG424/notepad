import React from "react";
import { FormWrapper, ButtonGroupWrapper } from "./wrappers";
import { FormButtonCancel } from "./elements";
import { Icon } from "../elements/Icon";

export const Info: React.FC = () => {
  const iconClasses = "text-[25px] text-yellow-highlight";
  const pushUp = "relative bottom-[6px]";

  return (
    <FormWrapper title="Info">
      <div className="text-[16px] text-gray-100 text-center">
        <div className="mt-[21px] mb-[28px] leading-[36px]">
          <p>
            <Icon icon="add" iconClasses={iconClasses} />
            <span className={pushUp}> = Add Note/Notepad</span>
          </p>
          <p>
            <Icon icon="edit" iconClasses={iconClasses} />
            <span className={pushUp}> = Edit Note/Notepad</span>
          </p>
          <p>
            <Icon icon="delete" iconClasses={iconClasses} />
            <span className={pushUp}> = Delete Note/Notepad</span>
          </p>
        </div>
      </div>
      <ButtonGroupWrapper>
        <FormButtonCancel text="Close" />
      </ButtonGroupWrapper>
    </FormWrapper>
  );
};
