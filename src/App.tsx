import React, { Fragment } from "react";
import ContextProvider from "./store/ContextProvider";
import "./App.css";
import Notepads from "./components/Notepads/Notepads";
import ModalForms from "./components/UI/forms/forms-edit-add/ModalForms";

function App() {
  return (
    <ContextProvider>
      <Fragment>
        <ModalForms />
        <Notepads />
      </Fragment>
    </ContextProvider>
  );
}

export default App;
