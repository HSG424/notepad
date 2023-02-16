import React, { useContext } from "react";
import { Note, NoteType, backgroundStyle } from ".";
import { Button } from "../elements";
import Context from "../../store/context";
import { AddNote, EditNotepad, DeleteNotepad } from "../forms";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

export type NotepadType = {
  id: string;
  title: string;
  notes: NoteType[];
};

type NotepadProps = {
  notepad: NotepadType;
};

export const Notepad: React.FC<NotepadProps> = (props) => {
  const { setModalContent } = useContext(Context);

  const iconClasses = "mr-[1px] md:mr-[2px] lg:mr-[3px] xl:mr-[4px]";

  return (
    <section className="mb-[31px]">
      <header
        className={`${backgroundStyle} py-3 pl-[20px] pr-[12px] flex justify-between items-center rounded-t-md border border-dark-border`}
      >
        <h2 className="text-yellow-highlight text-[17px] w-9/12 sm:w-10/12 truncate">
          {props.notepad.title}
        </h2>
        <div className="relative top-1">
          <Button
            icon="add"
            title="Create New Note"
            iconClasses={iconClasses}
            onClick={setModalContent.bind(
              null,
              <AddNote id={props.notepad.id} />
            )}
          />
          <Button
            icon="edit"
            title="Edit Notepad"
            iconClasses={iconClasses}
            onClick={setModalContent.bind(
              null,
              <EditNotepad id={props.notepad.id} title={props.notepad.title} />
            )}
          />
          <Button
            icon="delete"
            title="Delete Notepad"
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

      <TransitionGroup
        component="div"
        className="bg-transparent border-x border-b border-dark-border p-6 rounded-b-md grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 shadow-[inset_0_0_10px_rgba(0,0,0,1)]"
      >
        {props.notepad.notes.map((note) => (
          <CSSTransition key={note.id} classNames="fade" timeout={300}>
            <Note note={note} notepadID={props.notepad.id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
};
