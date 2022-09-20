import React, { Fragment } from "react";
import "./App.css";
import Notepads from "./components/Notepads/Notepads";
import Modal from "./components/UI/Modal/Modal";
import AddNotepad from "./components/forms-edit-add/AddNotepad";

function App() {
  const hideCartHandler = () => {};

  return (
    <Fragment>
      <Modal onClose={hideCartHandler}>
        <AddNotepad />
      </Modal>
      <Notepads />
    </Fragment>
  );
}

export default App;
