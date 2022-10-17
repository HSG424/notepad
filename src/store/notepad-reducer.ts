import { v4 as uuidv4 } from "uuid";
import { NotepadType } from "../components/Notepad/Notepad";
import { ActionType } from "./cart-context";

const notepadReducer = (state: NotepadType[], action: ActionType) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_NOTEPAD":
      return [
        {
          id: uuidv4(),
          notes: [],
          title: payload.title,
        },
        ...state,
      ];

    case "ADD_NOTE":
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

    default:
      return [...state];
  }
};

export default notepadReducer;
