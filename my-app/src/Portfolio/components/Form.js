import React from "react";
//import emailjs from "emailjs-com";
import "./Form.css";
import { Button } from "@material-ui/core";


function Form() {
  return (
    <div className="wrapper">
    <form className="contact-form" >
      <h1 className="form-header">Contact</h1>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Contact Number</label>
      <input type="text" name="user_number" />
      <label>Message</label>
      <textarea name="message" />
      <Button
        className="form-button"
        variant="contained"
        type="submit"
        value="Send"
        color="inherit"
      >
        Send
      </Button>
    </form>
    </div>
  );
}

export default Form;
