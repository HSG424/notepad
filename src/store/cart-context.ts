import React, { ReactNode } from "react";

export type ModalContentTypeDef = ReactNode | undefined;

export type ContextTypeDef = {
  notepadsData: any;
  modalContent: ModalContentTypeDef;
  modalClose: () => void;
  setModalContent: (modalContent: ModalContentTypeDef) => void;
};

export const defaultModalContent = undefined;

const Context = React.createContext<ContextTypeDef>({
  notepadsData: [],
  modalContent: defaultModalContent,
  modalClose: () => {},
  setModalContent: (modalContent) => {},
});

export default Context;
