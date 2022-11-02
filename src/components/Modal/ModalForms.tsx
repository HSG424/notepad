import React, { Fragment, useContext } from "react";
import Modal from "./Modal";
import Context from "../../store/context";

const ModalForms: React.FC = () => {
  const { modalClose, modalContent } = useContext(Context);

  return (
    <Fragment>
      {modalContent && <Modal onClose={modalClose}>{modalContent}</Modal>}
    </Fragment>
  );
};

export default ModalForms;
