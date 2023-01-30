import React, { useContext } from "react";
import Context from "../../store/context";
import { Notepad, NotepadType } from ".";
import { Button } from "../elements";
import { AddNotepad } from "../forms";

export const buttonBlue =
  "bg-blue-900 hover:bg-blue-800 bg-opacity-60 hover:bg-opacity-60";
export const buttonRed =
  "bg-red-900 hover:bg-red-800 bg-opacity-60 hover:bg-opacity-60";

export const Notepads: React.FC = () => {
  const { notepadData, setModalContent } = useContext(Context);

  const buttonStyle =
    "flex justify-center items-center rounded w-[192px] pt-[11px] pb-[10px] px-[18px]";

  const iconStyle = "mr-1.5 text-[16px]";

  return (
    <main className="text-[15px] text-gray-300">
      <header className="flex flex-row justify-between mx-[36px] pt-[47px] pb-[32px] px-[42px] border-b border-dark-border">
        <h1 className="font-caveat text-gray-200 text-[49px] font-medium">
          a Notepad App...
        </h1>
        <div>
          <Button
            icon="add"
            text="New Notepad"
            buttonClasses={`${buttonBlue} mb-[16px] ${buttonStyle}`}
            iconClasses={iconStyle}
            onClick={setModalContent.bind(null, <AddNotepad />)}
          />
          <Button
            icon="delete"
            text="Delete Notepads"
            buttonClasses={`${buttonRed} ${buttonStyle}`}
            iconClasses={iconStyle}
            onClick={setModalContent.bind(null, <AddNotepad />)}
          />
        </div>
      </header>

      <div className="mt-7 px-[36px]">
        {notepadData.map((notepad: NotepadType) => (
          <Notepad notepad={notepad} key={notepad.id} />
        ))}
      </div>
    </main>
  );
};
