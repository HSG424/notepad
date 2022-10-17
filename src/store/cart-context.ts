import React, { ReactNode } from "react";
import { NotepadType } from "../components/Notepad/Notepad";

export type ModalContentType = ReactNode | undefined;

export type ActionType = {
  type: "ADD_NOTEPAD" | "ADD_NOTE";
  payload: {
    title: string;
    id?: string;
    note?: string;
  };
};

export type ContextType = {
  notepadData: NotepadType[];
  dispatchNotepadAction: (action: ActionType) => void;
  modalContent: ModalContentType;
  modalClose: () => void;
  setModalContent: (modalContent: ModalContentType) => void;
};

export const defaultModalContent = undefined;

const Context = React.createContext<ContextType>({
  notepadData: [],
  dispatchNotepadAction: (action: ActionType) => {},
  modalContent: defaultModalContent,
  modalClose: () => {},
  setModalContent: (modalContent: ModalContentType) => {},
});

export default Context;
