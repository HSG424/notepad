import React from "react";

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
    <section className="pt-9 px-6 drop-shadow-md">
      <h3 className="bg-primary text-white font-medium px-4 py-3 rounded-t-lg">
        {props.note.title}
      </h3>
      <p className="bg-secondary text-gray-700 px-6 py-5 rounded-b-lg">
        {props.note.note}
      </p>
    </section>
  );
};

export default Note;
