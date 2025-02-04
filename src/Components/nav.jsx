import React from "react";
import Links from "./links";

function Nav() {
  return (
    <header className="border p-8 flex flex-row lg:justify-between lg:items-center lg:w-3/6 md:w-4/6 m-auto justify-center ">
      <div className="font-normal md:flex hidden flex-wrap ">
        Petros Christodoulou
      </div>
      <div className="font-normal sm:hidden text-xl">Petros Christodoulou</div>
      <Links />
    </header>
  );
}

export default Nav;
