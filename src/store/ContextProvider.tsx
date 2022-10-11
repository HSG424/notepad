import React, { ReactNode, useState } from "react";
import Context, {
  ModalContentTypeDef,
  defaultModalContent,
  ContextTypeDef,
} from "./cart-context";

type ContextProps = {
  children: ReactNode;
};

const ContextProvider: React.FC<ContextProps> = (props) => {
  const [modalContent, setModalContent] =
    useState<ModalContentTypeDef>(defaultModalContent);

  const modalClose = () => {
    setModalContent(defaultModalContent);
  };

  const contextData: ContextTypeDef = {
    notepadsData: [],
    modalContent,
    modalClose,
    setModalContent,
  };

  return (
    <Context.Provider value={contextData}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
