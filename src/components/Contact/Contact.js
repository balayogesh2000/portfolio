import React from "react";
import classes from "./Contact.module.css";
import Wrapper from "../../HOC/Wrapper/Wrapper";

const contact = (props) => {
  return (
    <Wrapper>
      <h2>Contact Me</h2>
      <div className={classes.ContactContainer}>
        <div className={classes.Contact}>
          <form>
            <input id="name" type="text" placeholder="Name" />
            <input id="email" type="email" placeholder="Email Address" />
            <input id="contact" type="text" placeholder="Phone Number" />
            <input id="subject" type="text" placeholder="Subject" />
            <textarea id="message" placeholder="Enter Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default contact;
