import React from "react";
import Note, { NoteType } from "../Note/Note";
import Button from "../UI/Button";

type NotepadType = {
  id: string;
  title: string;
  notes: NoteType[];
};

type NotepadProps = {
  notepad: NotepadType;
  key: string;
};

const Notepad: React.FC<NotepadProps> = (props) => {
  return (
    <section>
      <header className="bg-primary text-white py-3 px-5 flex justify-between items-center rounded-t-md">
        <h2 className="text-lg">{props.notepad.title}</h2>
        <div className="relative top-1">
          <Button icon="add" iconClasses="mr-2.5" />
          <Button icon="edit" iconClasses="mr-2.5" />
          <Button icon="delete" />
        </div>
      </header>
      <div className="bg-dark py-8 px-7 rounded-b-md grid grid-cols-1 md:grid-cols-2 gap-7  shadow-[inset_0_0_9px_rgba(0,0,0,0.4)]">
        {props.notepad.notes.map((note) => (
          <Note note={note} notepadID={props.notepad.id} key={note.id} />
        ))}
      </div>
    </section>
  );
};

export default Notepad;