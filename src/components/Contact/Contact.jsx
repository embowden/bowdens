import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import Card from "../Card/Card";

const Contact = () => {
  const [formNotValid, setFormValid] = useState(true);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userMessage, setMessage] = useState("");

  const introHeadline = "Enquiry Form";
  const introSubHeadline = "Design your Dreams";
  const introText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum impedit alias doloremque debitis non? Aliquid hic ea voluptatem expedita dolorum dolore neque, voluptate velit similique eveniet ratione, soluta quam omnis!";

  const form = useRef();

  //HANDLE CHANGE OF STATE
  const handleChange = (e) => {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    } else if (e.target.name === "userEmail") {
      setUserEmail(e.target.value);
    } else if (e.target.name === "userNumber") {
      setUserNumber(e.target.value);
    } else if (e.target.name === "userMessage") {
      setMessage(e.target.value);
    }
  };

  //FORM VALIDATION
  const formValidation = () => {
    if (!userName || !userEmail || !userNumber || !userMessage) {
      setFormValid(false);
      return;
    }
    return true;
  };

  //SEND EMAIL VIA EMAILJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "test_account_bowden",
        "test_form",
        form.current,
        "YvRP4uH1f3hePgkki"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //HANDLE ON SUBMIT (validation + send email)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      setFormValid(true);
      setUserName("");
      setUserEmail("");
      setUserNumber("");
      setMessage("");
      e.target.reset();
    } else {
      return false;
    }
  };

  return (
    <div className="contact">
      <Card
        headline={introHeadline}
        subheadline={introSubHeadline}
        text={introText}
      />
      <form ref={form} onSubmit={handleSubmit}>
        <label htmlFor="userName">Name</label>
        <input onChange={handleChange} type="text" name="userName" />
        <label htmlFor="userEmail">Email</label>
        <input onChange={handleChange} type="email" name="userEmail" />
        <label htmlFor="userNumber">Contact Number</label>
        <input onChange={handleChange} type="tel" name="userNumber" />
        <label htmlFor="userMessage">Message</label>
        <textarea onChange={handleChange} name="userMessage" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;

// CSS for form
// add in form validation
// add in form clearing on submit/message
