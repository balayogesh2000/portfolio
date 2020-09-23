import React from "react";
import classes from "./Logo.module.css";
import coderLogo from "../../assets/img/coder.png";

const logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={coderLogo} alt="logo" />
    </div>
  );
};

export default logo;
