import React from "react";
import classes from "./Project.module.css";

const projects = (props) => {
  return (
    <div className={classes.Project}>
      <div className={classes.imgContainer}>
        <img src={props.src} alt={props.alt} />
      </div>
      <div className={classes.descContainer}>
        <h4>{props.title}</h4>
        <p>{props.para1}</p>
        <p>{props.para2}</p>
      </div>
    </div>
  );
};

export default projects;
