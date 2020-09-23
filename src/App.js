import React, { Fragment } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/AboutPageTemplate/About/About";
import Progress from "./components/AboutPageTemplate/Progress/Progress";

function App() {
  return (
    <Fragment>
      <LandingPage />
      <About />
      <Progress />
    </Fragment>
  );
}

export default App;
