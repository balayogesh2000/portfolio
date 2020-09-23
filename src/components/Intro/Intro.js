import React from "react";
import classes from "./Intro.module.css";
import feeling_proud from "../../assets/svg/feeling_proud.svg";

const intro = (props) => {
  return (
    <div className={classes.Intro}>
      <div className={classes.desc}>
        <h1>
          I am <span>Bala Yogesh</span>
        </h1>
        <p>
          a <span>{"{FrontEnd}"}</span> Developer.
        </p>
      </div>
      <div className={classes.svg}>
        <img src={feeling_proud} alt="feeling_proud" />
      </div>
    </div>
  );
};

export default intro;
