import React, { ReactNode, useState, useReducer } from "react";
import {
  notepadReducer,
  Context,
  defaultModalContent,
  ModalContentType,
  ContextType,
  getNotepadData,
} from ".";

type ContextProps = {
  children: ReactNode;
};

export const ContextProvider: React.FC<ContextProps> = (props) => {
  const [modalContent, setModalContent] =
    useState<ModalContentType>(defaultModalContent);

  const [notepadData, dispatchNotepadAction] = useReducer(
    notepadReducer,
    getNotepadData()
  );

  const modalClose = () => {
    setModalContent(defaultModalContent);
  };

  const contextData: ContextType = {
    notepadData,
    dispatchNotepadAction,
    modalContent,
    modalClose,
    setModalContent,
  };

  return (
    <Context.Provider value={contextData}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
