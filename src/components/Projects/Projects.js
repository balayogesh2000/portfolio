import React from "react";
import classes from "./Projects.module.css";
import Wrapper from "../../HOC/Wrapper/Wrapper";
import Project from "./Project/Project";
import ecomm from "../../assets/img/ecomm.JPG";
import movieFight from "../../assets/img/movieFight.JPG";
import maze from "../../assets/img/maze.JPG";

const projects = (props) => {
  return (
    <Wrapper>
      <div className={classes.Projects}>
        <Project
          title="E-COMMERCE APPLICATION"
          src={ecomm}
          para1="An Ecommerce application with features such as
          Production grade authentication, Custom database,
          Image and File upload etc."
          para2="Front-end : Javascript, Html, Css
          Back-end : Node with Express
          Database : Custom Database (JSON file)"
        />
        <Project
          title="MOVIE FIGHT"
          src={movieFight}
          para1="Movie comparison app which compares movies by
          making API calls to OMDb API which is a RESTful
          web service to obtain movie information."
          para2="Language/Tools : Javascript, HTML, CSS
          API : OMDb API"
        />
        <Project
          title="MAZE GAME"
          src={maze}
          para1="A simple Maze game built on top of matterJs which
          is a 2D physics engine for the web"
          para2="Language/Tools : Javascript, HTML, CSS
          External Library : Matter.js"
        />
      </div>
    </Wrapper>
  );
};

export default projects;
