import React, { Fragment, useContext } from "react";
import Modal from "../../../../components/UI/Modal/Modal";
import Context from "../../../..//store/cart-context";

const ModalForms: React.FC = () => {
  const { modalClose, modalContent } = useContext(Context);

  return (
    <Fragment>
      {modalContent && <Modal onClose={modalClose}>{modalContent}</Modal>}
    </Fragment>
  );
};

export default ModalForms;
