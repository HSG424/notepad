import React, { useContext } from "react";
import { Note, NoteType } from ".";
import { Button } from "../elements";
import Context from "../../store/context";
import { AddNote, EditNotepad, DeleteNotepad } from "../forms";

export type NotepadType = {
  id: string;
  title: string;
  notes: NoteType[];
};

type NotepadProps = {
  notepad: NotepadType;
  key: string;
};

export const Notepad: React.FC<NotepadProps> = (props) => {
  const { setModalContent } = useContext(Context);

  const iconClasses = "mr-1 md:mr-1.5";

  return (
    <section className="mb-[39px]">
      <header className="bg-gray-900 text-white py-3 px-5 flex justify-between items-center rounded-t-md border-x border-t border-gray-700">
        <h2 className="text-[17px] w-8/12 md:w-9/12 truncate">
          {props.notepad.title}
        </h2>
        <div className="relative top-1">
          <Button
            icon="add"
            iconClasses={iconClasses}
            onClick={setModalContent.bind(
              null,
              <AddNote id={props.notepad.id} />
            )}
          />
          <Button
            icon="edit"
            iconClasses={iconClasses}
            onClick={setModalContent.bind(
              null,
              <EditNotepad id={props.notepad.id} title={props.notepad.title} />
            )}
          />
          <Button
            icon="delete"
            onClick={setModalContent.bind(
              null,
              <DeleteNotepad
                id={props.notepad.id}
                title={props.notepad.title}
              />
            )}
          />
        </div>
      </header>
      <div className="bg-transparent border-x border-b border-gray-700 py-8 px-7 rounded-b-md grid grid-cols-3 gap-7  shadow-[inset_0_0_9px_rgba(0,0,0,0.4)]">
        {props.notepad.notes.map((note) => (
          <Note note={note} notepadID={props.notepad.id} key={note.id} />
        ))}
      </div>
    </section>
  );
};
