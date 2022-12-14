import { NotepadType } from "../components/main";

export const saveNotepadData = (notepadData: NotepadType[]) => {
  localStorage.setItem("notepadData", JSON.stringify(notepadData));
};

export const getNotepadData = () => {
  return JSON.parse(localStorage.getItem("notepadData") || "[]");
};
