import React from "react";
import Hamburger from "../assets/icons/Hamburger";
function Navbar() {
  return (
    <nav className="flex h-14 items-center justify-between px-4 shadow-lg">
      <p className="text-lg font-bold">Todo List</p>
      <Hamburger />
    </nav>
  );
}

export default Navbar;
