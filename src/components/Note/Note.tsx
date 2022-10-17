import React from "react";
import Button from "../UI/Button";

export type NoteType = {
  id: string;
  title: string;
  note: string | undefined;
};

type NoteProps = {
  note: NoteType;
  notepadID: string;
  key: string;
};

const Note: React.FC<NoteProps> = (props) => {
  return (
    <section>
      <header className="bg-primary text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
        <h3 className="w-9/12 truncate">{props.note.title}</h3>
        <div className="relative top-0.5">
          <Button icon="edit" iconClasses="mr-1.5 text-xl" />
          <Button icon="delete" iconClasses="text-xl" />
        </div>
      </header>
      <p className="bg-secondary text-gray-800 h-48 px-6 py-5 rounded-b-lg overflow-y-auto whitespace-pre-line shadow-[inset_0_0_10px_rgba(0,0,0,1)] font-serif">
        {props.note.note}
      </p>
    </section>
  );
};

export default Note;
