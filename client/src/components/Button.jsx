import React from "react";
import { NavLink } from "react-router-dom";

function Button({ to, styles, children, type = "" }) {
  return (
    <NavLink
      className={"rounded bg-blue-500 px-4 py-2 text-lg text-white " + styles}
      to={to}
      type={type}
    >
      {children}
    </NavLink>
  );
}

export default Button;
