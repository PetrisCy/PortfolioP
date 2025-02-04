import React from "react";

function Button(props) {
  return (
    <div>
      <a
        href="#"
        className="py-3 px-4 mx-3 rounded-full border hover:text-slate-950 bg-red-100 text-neutral-700"
      >
        {props.text}
      </a>
    </div>
  );
}

export default Button;
//bg-red-100
