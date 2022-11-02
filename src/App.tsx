import React, { Fragment } from "react";
import ContextProvider from "./store/ContextProvider";
import "./App.css";
import Notepads from "./components/main/Notepads";
import ModalForms from "./components/Modal/ModalForms";

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
