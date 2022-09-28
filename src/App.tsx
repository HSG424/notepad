import React, { Fragment, useState } from "react";
import "./App.css";
import Notepads from "./components/Notepads/Notepads";
import Modal from "./components/UI/Modal/Modal";
import AddNotepad from "./components/UI/forms/forms-edit-add/AddNotepad";
// import AddNote from "./components/forms-edit-add/AddNote";

function App() {
  const [modalShown, setModalShown] = useState(true);

  const hideModalHandler = () => {
    setModalShown(false);
  };

  return (
    <Fragment>
      {modalShown && (
        <Modal onClose={hideModalHandler}>
          <AddNotepad onClose={hideModalHandler} />
        </Modal>
      )}

      <Notepads />
    </Fragment>
  );
}

export default App;
