import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbar-brand" to="/">
        Fake Store
      </Link>
      <div className="navbar-items">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/electronics">
          Electronics
        </Link>
        <Link className="nav-link" to="/jewelery">
          Jewelery
        </Link>
        <Link className="nav-link" to="/mensclothing">
          Men's clothing
        </Link>
        <Link className="nav-link" to="/womensclothing">
          Women's clothing
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
