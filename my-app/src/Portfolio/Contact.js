import React from "react";
import "./Contact.css";
import Form from "./components/Form";
import Section from "./components/Section";
import Header from "./components/Header";
function Contact() {
  return (
    <div id="SpecialPage">
    <div className="contact" style={{ backgroundImage: `url(/3417082.jpg)` }}>
      <div className="contact-page-container">
        <Header/>
        <div className="form-container">
          <Form />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
