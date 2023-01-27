import React, { useContext } from "react";
import Context from "../../store/context";
import { Notepad, NotepadType } from ".";
import { Button } from "../elements";
import { AddNotepad } from "../forms";

export const Notepads: React.FC = () => {
  const { notepadData, setModalContent } = useContext(Context);

  return (
    <main className="text-[15px]">
      <header>
        <h1 className="font-caveat text-gray-100 text-[49px] font-medium mt-[46px] ml-[42px] inline-block pl-[25px] pb-[17px] w-[409px] border-b border-gray-600">
          Notepad
        </h1>
      </header>

      <Button
        icon="add"
        text="New Notepad"
        buttonClasses="mt-[35px] ml-[42px] bg-blue-900 hover:bg-blue-800 pt-[11px] pb-[10px] px-[18px] flex items-center rounded relative bottom-[8px]"
        iconClasses="mr-1.5 text-[15px]"
        onClick={setModalContent.bind(null, <AddNotepad />)}
      />

      <div className="mt-8 px-10">
        {notepadData.map((notepad: NotepadType) => (
          <Notepad notepad={notepad} key={notepad.id} />
        ))}
      </div>
    </main>
  );
};
