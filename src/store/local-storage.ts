import { NotepadType } from "../components/Notepad/Notepad";

export const saveNotepadData = (notepadData: NotepadType[]) => {
  localStorage.setItem("notepadData", JSON.stringify(notepadData));
};

export const getNotepadData = () => {
  return JSON.parse(localStorage.getItem("notepadData") || "[]");
};
