import React, { ReactNode } from "react";
import { NotepadType } from "../components/main";

export type ModalContentType = ReactNode | undefined;

export type formType =
  | "ADD_NOTEPAD"
  | "ADD_NOTE"
  | "EDIT_NOTEPAD"
  | "EDIT_NOTE"
  | "DELETE_NOTEPAD"
  | "DELETE_NOTE"
  | "DELETE_ALL";

export type ActionType = {
  type: formType;
  payload: {
    title: string;
    id?: string;
    note: string;
    notepadID?: string;
    noteID?: string;
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

export const Context = React.createContext<ContextType>({
  notepadData: [],
  dispatchNotepadAction: (action: ActionType) => {},
  modalContent: defaultModalContent,
  modalClose: () => {},
  setModalContent: (modalContent: ModalContentType) => {},
});

export default Context;
