import React from "react";
import Note from "../Note/Note";
import Button from "../ui-reusable/Button";

type NoteType = {
  id: string;
  title: string;
  note: string;
};

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
      <header className="bg-primary text-white py-3 px-5 flex justify-between items-center rounded-t-lg">
        <h2 className="text-lg">{props.notepad.title}</h2>
        <div className="relative top-1">
          <Button icon="add" iconClasses="mr-2.5" />
          <Button icon="edit" iconClasses="mr-2.5" />
          <Button icon="delete" />
        </div>
      </header>
      <div className="bg-gray-50 py-8 px-6 rounded-b-lg grid grid-cols-1 md:grid-cols-2 gap-7 border border-gray-200 border-t-0">
        {props.notepad.notes.map((note) => (
          <Note note={note} notepadID={props.notepad.id} key={note.id} />
        ))}
      </div>
    </section>
  );
};

export default Notepad;
