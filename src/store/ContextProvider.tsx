import React, { ReactNode, useReducer } from "react";
import Context, {
  ModalContentTypeDef,
  defaultModalContent,
  ContextTypeDef,
} from "./cart-context";

const modalContentReducer = (
  state: ModalContentTypeDef,
  action: ModalContentTypeDef
) => {
  if (!action) return defaultModalContent;
  return action;
};

type ContextProps = {
  children: ReactNode;
};

const ContextProvider: React.FC<ContextProps> = (props) => {
  const [modalContent, modalContentChange] = useReducer(
    modalContentReducer,
    defaultModalContent
  );

  const modalClose = () => {
    modalContentChange(defaultModalContent);
  };

  const contextData: ContextTypeDef = {
    notepadsData: [],
    modalContent,
    modalClose,
    modalContentChange,
  };

  return (
    <Context.Provider value={contextData}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
