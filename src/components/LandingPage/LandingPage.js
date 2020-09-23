import React from "react";
import Background from "../../HOC/Background/Background";
import Header from "../../HOC/Header/Header";
import Logo from "../Logo/Logo";
import Wrapper from "../../HOC/Wrapper/Wrapper";
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";

const landingPage = (props) => {
  return (
    <Background>
      <Wrapper>
        <Header>
          <Logo />
          <Navbar />
        </Header>
      </Wrapper>
      <Intro />
    </Background>
  );
};

export default landingPage;
