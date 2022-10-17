import React, { ReactNode, useState, useReducer } from "react";
import notepadReducer from "./notepad-reducer";
import Context, {
  defaultModalContent,
  ModalContentType,
  ContextType,
} from "./cart-context";

import { notepadsDataTEMP } from "./temp-data";

type ContextProps = {
  children: ReactNode;
};

const ContextProvider: React.FC<ContextProps> = (props) => {
  const [modalContent, setModalContent] =
    useState<ModalContentType>(defaultModalContent);

  const [notepadData, dispatchNotepadAction] = useReducer(
    notepadReducer,
    notepadsDataTEMP
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
