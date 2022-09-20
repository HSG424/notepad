import React, { useState } from "react";
import Notepad from "../Notepad/Notepad";
import Button from "../UI/Button";

function Notepads() {
  const [notepadsData] = useState([
    {
      id: "id92f2d449ae58b",
      title: "Sed ut perspiciatis unde omnis iste natus",
      notes: [
        {
          id: "idf8cb809f9f707",
          title: "Omnis iste natus error sit voluptatem accusantium doloremque",
          note: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
        },
        {
          id: "id7f4970b61672c",
          title: "Ut aliquip ex ea commodo consequat",
          note: "Ipsum dolor sit amet, consectetur adipiscing elit:\n\n1) Sed do eiusmod tempor.\n2) Incididunt ut labore et dolore magna aliqua.\n3) Ut enim ad minim veniam, quis nostrud exercitation\n\n",
        },
        {
          id: "id418cfe6a61bed",
          title: "Sed ut perspiciatis unde omnis iste natus error",
          note: "Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur:\n\n1) aliquam quaerat voluptatem\n\n2) ea commodi consequatur? Quis autem",
        },
        {
          id: "id7d67b5cedfb15",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          id: "id418cfe6a61bed",
          title: "Sed ut perspiciatis unde omnis iste natus error",
          note: "Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur:\n\n1) aliquam quaerat voluptatem\n\n2) ea commodi consequatur? Quis autem",
        },
        {
          id: "id7d67b5cedfb15",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          id: "idf8cb809f9f707",
          title: "Omnis iste natus error sit voluptatem accusantium doloremque",
          note: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
        },
      ],
    },
    {
      id: "id7f85f90e126be",
      title: "Lorem Ipsum dolor...",
      notes: [
        {
          id: "idf8cb809f9f707",
          title: "Omnis iste natus error sit voluptatem accusantium doloremque",
          note: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
        },
        {
          id: "id5591aa031e115",
          title: "Exercitation ullamco laboris nisi",
          note: "Lorem ipsum dolor sit amet\n\nconsectetur adipiscing elit, sed do\n\neiusmod tempor incididunt ut labore",
        },
        {
          id: "id7d67b5cedfb15",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          id: "id418cfe6a61bed",
          title: "Sed ut perspiciatis unde omnis iste natus error",
          note: "Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur:\n\n1) aliquam quaerat voluptatem\n\n2) ea commodi consequatur? Quis autem",
        },
      ],
    },
    {
      id: "id7f85f90e126be",
      title: "Lorem Ipsum dolor...",
      notes: [
        {
          id: "id5591aa031e115",
          title: "Exercitation ullamco laboris nisi",
          note: "Lorem ipsum dolor sit amet\n\nconsectetur adipiscing elit, sed do\n\neiusmod tempor incididunt ut labore",
        },
        {
          id: "id7d67b5cedfb15",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          id: "idf8cb809f9f707",
          title: "Omnis iste natus error sit voluptatem accusantium doloremque",
          note: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
        },
        {
          id: "id7f4970b61672c",
          title: "Ut aliquip ex ea commodo consequat",
          note: "Ipsum dolor sit amet, consectetur adipiscing elit:\n\n1) Sed do eiusmod tempor.\n2) Incididunt ut labore et dolore magna aliqua.\n3) Ut enim ad minim veniam, quis nostrud exercitation\n\n",
        },
        {
          id: "id418cfe6a61bed",
          title: "Sed ut perspiciatis unde omnis iste natus error",
          note: "Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur:\n\n1) aliquam quaerat voluptatem\n\n2) ea commodi consequatur? Quis autem",
        },
      ],
    },
    {
      id: "id92f2d449ae58b",
      title: "Sed ut perspiciatis unde omnis iste natus",
      notes: [
        {
          id: "idf8cb809f9f707",
          title: "Omnis iste natus error sit voluptatem accusantium doloremque",
          note: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
        },
        {
          id: "id7f4970b61672c",
          title: "Ut aliquip ex ea commodo consequat",
          note: "Ipsum dolor sit amet, consectetur adipiscing elit:\n\n1) Sed do eiusmod tempor.\n2) Incididunt ut labore et dolore magna aliqua.\n3) Ut enim ad minim veniam, quis nostrud exercitation\n\n",
        },
        {
          id: "id418cfe6a61bed",
          title: "Sed ut perspiciatis unde omnis iste natus error",
          note: "Illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur:\n\n1) aliquam quaerat voluptatem\n\n2) ea commodi consequatur? Quis autem",
        },
      ],
    },
  ]);

  return (
    <main className="py-7 px-6 bg-darker">
      <Button
        icon="add"
        text="Notepad"
        buttonClasses="bg-primary hover:bg-primary-light active:bg-primary-light focus:shadow-[inset_0_0_5px_rgba(0,0,0,.4)] py-3 px-5 mb-7 flex items-center rounded mx-auto uppercase tracking-wide"
        iconClasses="mr-1"
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
        {notepadsData.map((notepad) => (
          <Notepad notepad={notepad} key={notepad.id} />
        ))}
      </div>
    </main>
  );
}

export default Notepads;
