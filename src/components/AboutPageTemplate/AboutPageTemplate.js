import React from "react";
import classes from "./AboutPageTemplate.module.css";
import Wrapper from "../../HOC/Wrapper/Wrapper";

const aboutPageTemplate = (props) => {
  return (
    <div className={classes.AboutPage}>
      <h2>{props.Title}</h2>
      <Wrapper>
        <div
          className={classes.flexContainer}
          style={{ flexDirection: props.direction }}
        >
          <div className={classes.svg}>
            <img src={props.svg} alt={props.svgAlt} />
          </div>
          <div className={classes.desc}>
            <h3>{props.desc}</h3>
            <p>{props.para}</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default aboutPageTemplate;
