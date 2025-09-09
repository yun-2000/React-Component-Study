import { useState } from "react";
import caretDown from "./assets/caret-down.svg";
import caretUp from "./assets/caret-up.svg";

export default function SelectModeDropdownList({ light, onSetLight }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex justify-end">
      <div className="relative">
        <button
          type="button"
          className="min-w-23 border-1 cursor-pointer px-3 py-1 flex space-x-6 text-gray-500 rounded-sm mt-5 mr-10 dark:border-white dark:text-white"
          onClick={() => setOpen(!open)}
        >
          <span>{light ? "Light" : "Dark "}</span>
          <img src={open ? caretUp : caretDown} className="w-4" />
        </button>
        {open && (
          <ul
            className={`absolute mt-0.5 ml-1 min-w-23 bg-white border-1 border-gray-300 p-1 rounded-sm flex flex-col space-y-2`}
          >
            <li
              className={`cursor-pointer py-2 text-center rounded-sm ${
                light && "bg-gray-200"
              }`}
              onClick={() => {
                onSetLight(true);
                setOpen(false);
              }}
            >
              Light
            </li>
            <li
              className={`cursor-pointer py-2 text-center rounded-sm ${
                !light && "bg-gray-200"
              }`}
              onClick={() => {
                onSetLight(false);
                setOpen(false);
              }}
            >
              Dark
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
