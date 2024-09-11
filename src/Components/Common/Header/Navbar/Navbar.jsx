import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const style = {fontSize: "1.5em" };

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">Valor Digital Unitz</a>
      </div>
      <ul id="nav-links" className={clicked ? "#nav-links active" : "#nav-links"}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>

        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="hamburger-container" onClick={handleClick}>
        {clicked ? <FaTimes style={style} /> : <FaBars style={style} />}
      </div>
    </nav>
  );
};

export default Navbar;
