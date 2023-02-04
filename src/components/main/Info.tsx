import React from "react";
import { FormWrapper, ButtonGroupWrapper } from "../forms/wrappers";
import { FormButtonCancel } from "../forms/elements";
import { Icon } from "../elements/Icon";

export const Info: React.FC = () => {
  const iconClasses = "text-[25px] text-yellow-highlight";
  const pushUp = "relative bottom-[6px]";

  return (
    <FormWrapper title="App Info:">
      <div className="text-[16px] text-gray-100">
        <p className="mt-[19px]">Click the "+ New Notepad" button.</p>
        <div className="mt-[21px] mb-[29px]">
          <p>
            <Icon icon="add" iconClasses={iconClasses} />
            <span className={pushUp}> = Add Note</span>
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
