import React from "react";
import classes from "./Footer.module.css";

const footer = (props) => {
  return (
    <div className={classes.Footer}>
      <div>
        <i className="fas fa-envelope fa-2x"></i>
        <h4>Email</h4>
        <p>balayogesh2000@gmail.com</p>
      </div>
      <div>
        <i className="fas fa-phone fa-2x"></i>
        <h4>Phone</h4>
        <p>8825424924</p>
      </div>
      <div>
        <i className="fas fa-address-card fa-2x"></i>
        <h4>Address</h4>
        <p>Chennai, India</p>
      </div>
    </div>
  );
};

export default footer;
