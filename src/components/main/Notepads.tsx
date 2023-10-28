import React, { useContext } from "react";
import Context from "../../store/context";
import { Header, Notepad, NotepadType } from ".";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

export const Notepads: React.FC = () => {
  const { notepadData } = useContext(Context);

  return (
    <main className="text-[15px] text-gray-300">
      <Header />
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
