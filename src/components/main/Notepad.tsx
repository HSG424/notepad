import React, { useContext } from "react";
import { Note, NoteType, backgroundStyle } from ".";
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
      <header
        className={`${backgroundStyle} py-3 pl-6 pr-5 flex justify-between items-center rounded-t-md border border-dark-border`}
      >
        <h2 className="text-yellow-highlight font-medium text-[17px] w-8/12 md:w-9/12 truncate">
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
      <div className="bg-transparent border-x border-b border-dark-border py-8 px-8 rounded-b-md grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 shadow-[inset_0_0_10px_rgba(0,0,0,1)]">
        {props.notepad.notes.map((note) => (
          <Note note={note} notepadID={props.notepad.id} key={note.id} />
        ))}
      </div>
    </section>
  );
};
