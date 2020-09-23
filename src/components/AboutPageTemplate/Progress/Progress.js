import React from "react";
import AboutPageTemplate from "../AboutPageTemplate";
import stepping from "../../../assets/svg/stepping_up.svg";

const about = (props) => {
  return (
    <AboutPageTemplate
      Title={"My Progress"}
      svg={stepping}
      svgAlt="stepping up"
      desc="Done with the basics"
      para="Learnt the basic building blocks of front-end development which are HTML, CSS, Javascript and React through online courses and built several projects as a part of coursework ranging from small pomodoro timer app to large E-commerce application. Hence I learnt how to quickly develop application from mockups to UI and also learnt how to structure and organize a big project."
      direction="row-reverse"
    />
  );
};

export default about;
