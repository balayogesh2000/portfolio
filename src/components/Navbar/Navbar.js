import React from "react";
import classes from "./Navbar.module.css";

const navbar = (props) => {
  return (
    <div className={classes.Navbar}>
      <ul>
        <li>
          <a href={6}>About</a>
        </li>
        <li>
          <a href={6}>Work</a>
        </li>
        <li>
          <a href={6}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
