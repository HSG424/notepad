import React, { ReactNode } from "react";

export type ModalContentTypeDef = ReactNode | undefined;

export type ContextTypeDef = {
  notepadsData: any;
  modalContent: ModalContentTypeDef;
  modalClose: () => void;
  modalContentChange: (action: ModalContentTypeDef) => void;
};

export const defaultModalContent = undefined;

const Context = React.createContext<ContextTypeDef>({
  notepadsData: [],
  modalContent: defaultModalContent,
  modalClose: () => {},
  modalContentChange: (action) => {},
});

export default Context;
