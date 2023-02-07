import React, { useState, useContext } from "react";
import Context, { formType } from "../store/context";

type idsType = {
  notepadID?: string;
  noteID?: string;
};

type contentType = {
  title?: string;
  note?: string;
};

export const useFormHelper = (
  type: formType,
  ids: idsType = {},
  content: contentType = {}
) => {
  const { dispatchNotepadAction, modalClose } = useContext(Context);

  const [title, setTitle] = useState<string>(
    content.title ? content.title : ""
  );

  const [note, setNote] = useState<string>(content.note ? content.note : "");

  const [formError, setFormError] = useState<string>("");

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const noteChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  const payloadMap = {
    ADD_NOTE: { title, note, id: ids.notepadID },
    EDIT_NOTE: { title, note, notepadID: ids.notepadID, noteID: ids.noteID },
    ADD_NOTEPAD: { title, note: "" },
    EDIT_NOTEPAD: {
      title,
      note: "",
      id: ids.notepadID,
    },
    DELETE_NOTEPAD: {
      note: "",
      title: "",
      id: ids.notepadID,
    },
    DELETE_NOTE: {
      note: "",
      title: "",
      notepadID: ids.notepadID,
      noteID: ids.noteID,
    },
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (type !== "DELETE_NOTEPAD" && type !== "DELETE_NOTE") {
      if (!title) {
        setFormError("Please enter a Title");
        return;
      }

      if (!note && type !== "ADD_NOTEPAD" && type !== "EDIT_NOTEPAD") {
        setFormError("Please enter some Content");
        return;
      }
    }

    dispatchNotepadAction({
      type,
      payload: payloadMap[type],
    });
    modalClose();
  };

  return {
    title,
    titleChangeHandler,
    note,
    noteChangeHandler,
    formError,
    submitHandler,
  };
};
