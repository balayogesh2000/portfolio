import React from "react";
import classes from "./Work.module.css";
import Projects from "../Projects/Projects";

const work = (props) => {
  return (
    <div className={classes.Work}>
      <h2>My Work</h2>
      <Projects />
    </div>
  );
};

export default work;
