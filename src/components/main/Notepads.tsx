import React, { useContext } from "react";
import Context from "../../store/context";
import { Notepad, NotepadType } from ".";
import { Button } from "../elements";
import { AddNotepad } from "../forms";

export const Notepads: React.FC = () => {
  const { notepadData, setModalContent } = useContext(Context);

  return (
    <main className="py-7 px-6 bg-darker">
      <Button
        icon="add"
        text="Notepad"
        buttonClasses="bg-primary hover:bg-primary-light active:bg-primary-light focus:shadow-[inset_0_0_5px_rgba(0,0,0,.4)] py-3 px-5 mb-7 flex items-center rounded mx-auto uppercase tracking-wide"
        iconClasses="mr-1"
        onClick={setModalContent.bind(null, <AddNotepad />)}
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
        {notepadData.map((notepad: NotepadType) => (
          <Notepad notepad={notepad} key={notepad.id} />
        ))}
      </div>
    </main>
  );
};
