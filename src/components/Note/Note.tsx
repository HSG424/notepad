import React from "react";
import Button from "../ui-reusable/Button";

type NoteType = {
  id: string;
  title: string;
  note: string;
};

type NoteProps = {
  note: NoteType;
  notepadID: string;
  key: string;
};

const Note: React.FC<NoteProps> = (props) => {
  return (
    <section className="drop-shadow-md">
      <header className="bg-primary text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
        <h3 className="w-9/12 truncate">{props.note.title}</h3>
        <div className="relative top-0.5">
          <Button icon="edit" iconClasses="mr-1 text-xl" />
          <Button icon="delete" iconClasses="text-xl" />
        </div>
      </header>
      <p className="bg-secondary text-gray-600 h-44 px-6 py-5 rounded-b-lg overflow-y-auto whitespace-pre-line">
        {props.note.note}
      </p>
    </section>
  );
};

export default Note;
