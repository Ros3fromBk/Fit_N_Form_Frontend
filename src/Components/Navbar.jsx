import "../Components/Navbar.css";
import React from "react";
// import RoutesController from "./Routes";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar-expand">
        <h2 className="title">Fit﹠Form</h2>
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/exercises">Excercises</Link>
        <Link className="nav-item" to="/newroutine">New Excercise</Link>
      </nav>
    </>

  );
};

export default NavBar;
