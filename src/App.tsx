import React, { Fragment } from "react";
import { ContextProvider } from "./store";
import { Notepads } from "./components/main";
import ModalForms from "./components/Modal/ModalForms";
import "./App.css";

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
