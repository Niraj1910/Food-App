import React from "react";

function Button({ text, onClick, selected }) {
  return (
    <button
      className={`${
        selected ? "bg-red-800" : "bg-red-500"
      } mx-4 px-4 min-w-10 rounded-md text-center`}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
}

export default Button;
