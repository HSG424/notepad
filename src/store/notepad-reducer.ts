import { v4 as uuidv4 } from "uuid";
import { NotepadType, NoteType } from "../components/main";
import { ActionType, saveNotepadData } from ".";

export const notepadReducer = (state: NotepadType[], action: ActionType) => {
  const { type, payload } = action;

  if (type === "ADD_NOTEPAD") {
    const newNotepad = {
      id: uuidv4(),
      notes: [],
      title: payload.title,
    };

    const notepadData = [newNotepad, ...state];

    saveNotepadData(notepadData);

    return notepadData;
  } else if (type === "ADD_NOTE") {
    const { id, title, note } = payload;

    const notepadIndex = state.findIndex(
      (notepad: NotepadType) => notepad.id === id
    );

    const notepadData = [...state];

    notepadData[notepadIndex] = {
      ...notepadData[notepadIndex],
      notes: [
        {
          id: uuidv4(),
          title,
          note,
        },
        ...notepadData[notepadIndex].notes,
      ],
    };

    saveNotepadData(notepadData);

    return notepadData;
  } else if (type === "EDIT_NOTEPAD") {
    const { id, title } = payload;

    const notepadIndex = state.findIndex(
      (notepad: NotepadType) => notepad.id === id
    );

    const notepadData = [...state];

    notepadData[notepadIndex] = {
      ...notepadData[notepadIndex],
      title,
    };

    saveNotepadData(notepadData);

    return notepadData;
  } else if (type === "EDIT_NOTE") {
    const { notepadID, noteID, note, title } = payload;

    const notepadIndex = state.findIndex(
      (notepad: NotepadType) => notepad.id === notepadID
    );

    const noteIndex = state[notepadIndex].notes.findIndex(
      (note: NoteType) => note.id === noteID
    );

    const notepadData = [...state];

    notepadData[notepadIndex] = {
      ...notepadData[notepadIndex],
      notes: [...notepadData[notepadIndex].notes],
    };

    notepadData[notepadIndex].notes[noteIndex] = {
      ...notepadData[notepadIndex].notes[noteIndex],
      title,
      note,
    };

    saveNotepadData(notepadData);

    return notepadData;
  } else if (type === "DELETE_NOTEPAD") {
    const notepadData = state.filter((notepad) => notepad.id !== payload.id);

    saveNotepadData(notepadData);

    return notepadData;
  } else if (type === "DELETE_NOTE") {
    const { notepadID, noteID } = payload;

    const notepadIndex = state.findIndex(
      (notepad: NotepadType) => notepad.id === notepadID
    );

    const notepadData = [...state];

    notepadData[notepadIndex] = {
      ...notepadData[notepadIndex],
      notes: [...notepadData[notepadIndex].notes],
    };

    notepadData[notepadIndex].notes = notepadData[notepadIndex].notes.filter(
      (note) => note.id !== noteID
    );

    saveNotepadData(notepadData);

    return notepadData;
  } else if (type === "DELETE_ALL") {
    saveNotepadData([]);
    return [];
  } else {
    return [...state];
  }
};

export default notepadReducer;
