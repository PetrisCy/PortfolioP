// import React from "react";
// import Links from "./links";

// function Nav() {
//   return (
//     <header className="border p-8 flex flex-row lg:justify-between lg:items-center lg:w-3/6 md:w-4/6 m-auto justify-center ">
//       <div className="font-normal md:flex hidden flex-wrap ">
//         Petros Christodoulou
//       </div>
//       <div className="font-normal sm:hidden text-xl">Petros Christodoulou</div>
//       <Links />
//     </header>
//   );
// }

// export default Nav;
import React from "react";
import Links from "./links";

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Desktop Name */}
        {/* <div className="hidden md:block text-lg tracking-wide font-medium "> */}
        <div className="hidden md:block text-lg tracking-[0.2em] uppercase font-light">
          Petros Christodoulou
        </div>

        {/* Mobile Name */}
        <div className="md:hidden text-xl font-semibold tracking-wide">
          Petros Christodoulou
        </div>

        <Links />
      </div>
    </header>
  );
}

export default Nav;
