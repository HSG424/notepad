import React, { useContext } from "react";
import Context from "../../store/context";
import { Notepad, NotepadType, Info } from ".";
import { Button } from "../elements";
import { AddNotepad, DeleteAll } from "../forms";

export const Notepads: React.FC = () => {
  const { notepadData, setModalContent } = useContext(Context);

  const buttonStyle =
    "flex justify-center items-center rounded w-[192px] pt-[11px] pb-[10px] px-[18px]";
  const iconStyle = "mr-1.5 text-[16px]";
  const padLeft = "pl-[22px]";

  return (
    <main className="text-[15px] text-gray-300">
      <header className="md:flex md:flex-row md:justify-between mx-[13px] md:mx-[36px] pt-[47px] md:pt-[35px] pb-[30px] md:pb-[32px] lg:pr-[34px] border-b border-dark-border">
        <div className="flex">
          <h1
            className={`font-solitreo text-[40px] font-medium mr-[18px] relative top-[10px] md:top-[30px] ${padLeft} md:pl-[15px] lg:pl-[37px]`}
          >
            a Notepad App
          </h1>
          <Button
            icon="info"
            title="open info screen"
            buttonClasses="relative top-[5px] md:top-[5px] text-yellow-highlight"
            iconClasses="text-[29px]"
            onClick={setModalContent.bind(null, <Info />)}
          />
        </div>

        <div
          className={`mt-[25px] md:mt-0 border-t border-dark-border md:border-none pt-[27px] md:pt-0 ${padLeft} md:pl-0`}
        >
          <Button
            theme="blue"
            icon="add"
            text="New Notepad"
            buttonClasses={`mb-[14px] ${buttonStyle}`}
            iconClasses={iconStyle}
            onClick={setModalContent.bind(null, <AddNotepad />)}
          />
          <Button
            theme="red"
            icon="delete"
            text="Delete Notepads"
            buttonClasses={buttonStyle}
            iconClasses={iconStyle}
            onClick={setModalContent.bind(null, <DeleteAll />)}
          />
        </div>
      </header>

      <div className="mt-7 px-[13px] md:px-[36px]">
        {notepadData.map((notepad: NotepadType) => (
          <Notepad notepad={notepad} key={notepad.id} />
        ))}
      </div>
    </main>
  );
};
