import React, { Fragment } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/AboutPageTemplate/About/About";
import Progress from "./components/AboutPageTemplate/Progress/Progress";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <LandingPage />
      <About />
      <Progress />
      <Work />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
