import React, { useContext } from "react";
import Context from "../../store/context";
import { Button } from "../elements";
import { EditNote, DeleteNote } from "../forms";

export type NoteType = {
  id: string;
  title: string;
  note: string;
};

type NoteProps = {
  note: NoteType;
  notepadID: string;
  key: string;
};

export const backgroundStyle = "bg-gray-900 bg-opacity-60";

export const Note: React.FC<NoteProps> = (props) => {
  const { setModalContent } = useContext(Context);

  const iconStyle = "text-[21px]";

  return (
    <section>
      <header
        className={`${backgroundStyle} pl-6 pr-5 py-3 rounded-t-lg flex justify-between items-center border border-dark-border`}
      >
        <h3 className="font-medium w-10/12 truncate">{props.note.title}</h3>
        <div className="relative top-0.5">
          <Button
            icon="edit"
            title="Edit Note"
            iconClasses={`${iconStyle} mr-1.5`}
            onClick={setModalContent.bind(
              null,
              <EditNote
                notepadID={props.notepadID}
                noteID={props.note.id}
                title={props.note.title}
                note={props.note.note}
              />
            )}
          />
          <Button
            icon="delete"
            title="Delete Note"
            iconClasses={iconStyle}
            onClick={setModalContent.bind(
              null,
              <DeleteNote
                notepadID={props.notepadID}
                noteID={props.note.id}
                title={props.note.title}
                note={props.note.note}
              />
            )}
          />
        </div>
      </header>
      <p
        className={`${backgroundStyle} text-gray-200 font-normal h-[240px] leading-[22px] px-7 py-5 rounded-b-lg overflow-y-auto whitespace-pre-line shadow-[inset_0_0_10px_rgba(0,0,0,1)] border-x border-b border-dark-border`}
      >
        {props.note.note}
      </p>
    </section>
  );
};
