import React from "react";
import AboutPageTemplate from "../AboutPageTemplate";
import annoatation from "../../../assets/svg/annotation.svg";

const about = (props) => {
  return (
    <AboutPageTemplate
      Title={"About Me"}
      svg={annoatation}
      svgAlt="annotation"
      desc="Trying to connect the dots..."
      para="Hi, I love learning new things and I like to connect the dots and
      patterns by consuming lot of information. I found Web Technology
      to be a more powerful way to reach people with our thoughts and
      ideas and I started learning it by building small projects and I
      hope to build something useful from the technologies that I have
      been learning."
      direction="row"
    />
  );
};

export default about;
