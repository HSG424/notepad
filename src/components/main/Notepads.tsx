import React, { useContext } from "react";
import Context from "../../store/context";
import { Notepad, NotepadType } from ".";
import { Button } from "../elements";
import { AddNotepad, DeleteAll, Info } from "../forms";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

export const Notepads: React.FC = () => {
  const { notepadData, setModalContent } = useContext(Context);

  const buttonStyle =
    "bg-white bg-opacity-[.09] hover:bg-opacity-[.11] rounded-[50%] w-[36px] h-[36px] flex justify-center items-center";
  const iconStyle = "text-[21px]";

  return (
    <main className="text-[15px] text-gray-300">
      <header className="sm:flex sm:gap-x-[37px] mx-[13px] md:mx-[36px] border-b border-dark-border pt-[57px] pb-[41px] sm:pb-[36px] pl-0 sm:pl-[42px]">
        <h1 className="mb-[23px] sm:mb-0">
          <a
            href="https://notepad-44bd1.web.app/"
            className="block sm:inline-block w-[195px] mx-auto sm:mx-0"
          >
            <img
              src="/logo.png"
              alt="EZ Notes logo"
              className="opacity-[.91] hover:opacity-[1]"
            />
          </a>
        </h1>

        <div className="flex justify-center sm:justify-normal gap-x-[9px] sm:relative sm:top-[7px]">
          <Button
            icon="add"
            title="Add New Notepad"
            buttonClasses={buttonStyle}
            iconClasses={iconStyle}
            onClick={setModalContent.bind(null, <AddNotepad />)}
          />
          <Button
            icon="delete"
            title="Delete All Notepads"
            buttonClasses={buttonStyle}
            iconClasses={iconStyle}
            onClick={setModalContent.bind(null, <DeleteAll />)}
          />
          <Button
            icon="question_mark"
            title="info"
            buttonClasses={buttonStyle}
            iconClasses={`${iconStyle} text-[18px]`}
            onClick={setModalContent.bind(null, <Info />)}
          />
        </div>
      </header>

      <TransitionGroup
        component="div"
        className="mt-[42px] px-[13px] md:px-[36px]"
      >
        {notepadData.map((notepad: NotepadType) => (
          <CSSTransition key={notepad.id} classNames="fade" timeout={300}>
            <Notepad notepad={notepad} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </main>
  );
};
