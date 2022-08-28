import React from "react";
import Note from "../Note/Note";

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
    <section className="mb-9">
      <h2 className="bg-primary text-white text-lg text-center py-3 rounded-t-lg">
        {props.notepad.title}
      </h2>
      <div className="pb-9 border-solid border border-gray-300 border-t-0 rounded-b-lg">
        {props.notepad.notes.map((note) => (
          <Note note={note} notepadID={props.notepad.id} key={note.id} />
        ))}
      </div>
    </section>
  );
};

export default Notepad;
