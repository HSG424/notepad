import { v4 as uuidv4 } from "uuid";
import { NotepadType } from "../components/Notepad/Notepad";
import { NoteType } from "../components/Note/Note";
import { ActionType } from "./cart-context";

const notepadReducer = (state: NotepadType[], action: ActionType) => {
  const { type, payload } = action;

  if (type === "ADD_NOTEPAD") {
    return [
      {
        id: uuidv4(),
        notes: [],
        title: payload.title,
      },
      ...state,
    ];
  } else if (type === "ADD_NOTE") {
    const { id, title, note } = payload;

    const notepadIndex = state.findIndex(
      (notepad: NotepadType) => notepad.id === id
    );

    const updatedNotepadData = [...state];

    updatedNotepadData[notepadIndex] = {
      ...updatedNotepadData[notepadIndex],
      notes: [
        {
          id: uuidv4(),
          title,
          note,
        },
        ...updatedNotepadData[notepadIndex].notes,
      ],
    };

    return updatedNotepadData;
  } else if (type === "EDIT_NOTEPAD") {
    const { id, title } = payload;

    const notepadIndex = state.findIndex(
      (notepad: NotepadType) => notepad.id === id
    );

    const updatedNotepadData = [...state];

    updatedNotepadData[notepadIndex] = {
      ...updatedNotepadData[notepadIndex],
      title,
    };

    return updatedNotepadData;
  } else if (type === "EDIT_NOTE") {
    const { notepadID, noteID, note, title } = payload;

    const notepadIndex = state.findIndex(
      (notepad: NotepadType) => notepad.id === notepadID
    );

    const noteIndex = state[notepadIndex].notes.findIndex(
      (note: NoteType) => note.id === noteID
    );

    const updatedNotepadData = [...state];

    updatedNotepadData[notepadIndex] = {
      ...updatedNotepadData[notepadIndex],
      notes: [...updatedNotepadData[notepadIndex].notes],
    };

    updatedNotepadData[notepadIndex].notes[noteIndex] = {
      ...updatedNotepadData[notepadIndex].notes[noteIndex],
      title,
      note,
    };

    return updatedNotepadData;
  } else if (type === "DELETE_NOTEPAD") {
    return state.filter((notepad) => notepad.id !== payload.id);
  } else if (type === "DELETE_NOTE") {
    const { notepadID, noteID } = payload;

    const notepadIndex = state.findIndex(
      (notepad: NotepadType) => notepad.id === notepadID
    );

    const updatedNotepadData = [...state];

    updatedNotepadData[notepadIndex] = {
      ...updatedNotepadData[notepadIndex],
      notes: [...updatedNotepadData[notepadIndex].notes],
    };

    updatedNotepadData[notepadIndex].notes = updatedNotepadData[
      notepadIndex
    ].notes.filter((note) => note.id !== noteID);

    return updatedNotepadData;
  } else {
    return [...state];
  }
};

export default notepadReducer;
