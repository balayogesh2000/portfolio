import React from "react";
import classes from "./Certificate.module.css";
import htmlCss from "../../assets/img/Html-Css-udemy-certificate-image.jpg";

const certificate = (props) => {
  return (
    <div className={classes.Certificate}>
      <img src={htmlCss} alt="html-css" />
    </div>
  );
};

export default certificate;
