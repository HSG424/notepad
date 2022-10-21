import React, { useContext } from "react";
import Note, { NoteType } from "../Note/Note";
import Button from "../UI/Button";
import Context from "../../store/cart-context";
import AddNote from "../../components/UI/forms/forms-edit-add/AddNote";
import EditNotepad from "../../components/UI/forms/forms-edit-add/EditNotepad";
import DeleteNotepad from "../../components/UI/forms/forms-edit-add/DeleteNotepad";

export type NotepadType = {
  id: string;
  title: string;
  notes: NoteType[];
};

type NotepadProps = {
  notepad: NotepadType;
  key: string;
};

const Notepad: React.FC<NotepadProps> = (props) => {
  const { setModalContent } = useContext(Context);

  return (
    <section>
      <header className="bg-primary text-white py-3 px-5 flex justify-between items-center rounded-t-md">
        <h2 className="text-lg">{props.notepad.title}</h2>
        <div className="relative top-1">
          <Button
            icon="add"
            iconClasses="mr-2.5"
            onClick={setModalContent.bind(
              null,
              <AddNote id={props.notepad.id} />
            )}
          />
          <Button
            icon="edit"
            iconClasses="mr-2.5"
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
      <div className="bg-dark py-8 px-7 rounded-b-md grid grid-cols-1 md:grid-cols-2 gap-7  shadow-[inset_0_0_9px_rgba(0,0,0,0.4)]">
        {props.notepad.notes.map((note) => (
          <Note note={note} notepadID={props.notepad.id} key={note.id} />
        ))}
      </div>
    </section>
  );
};

export default Notepad;
