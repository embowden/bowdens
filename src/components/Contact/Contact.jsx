import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import Card from "../Card/Card";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formNotValid, setFormValid] = useState(true);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userMessage, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll animation
  AOS.init({
    offset: 100,
    delay: 0,
    duration: 500,
    easing: "ease",
    once: true,
    anchorPlacement: "top",
    throttleDelay: 99,
  });

  // Intro information
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
    if (
      !userName ||
      !userEmail ||
      !userNumber ||
      !userMessage ||
      isNaN(+userNumber)
    ) {
      setFormValid(false);
      console.log("form not valid: " + formNotValid);
      return;
    }
    console.log("form not valid: " + formNotValid);
    return true;
  };

  // TEST
  const testGo = () => {
    console.log(
      "email sent:" + userEmail + userMessage + userName + userNumber
    );
  };

  //SEND EMAIL VIA EMAILJS
  const sendEmail = (e) => {
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
      // sendEmail();
      testGo();
      setFormSubmitted(false);
      setUserName("");
      setUserEmail("");
      setUserNumber("");
      setMessage("");
      e.target.reset();
    } else {
      console.log("submit error");
      return false;
    }
  };

  // HANDLE SUBMIT CLICK
  const submitForm = () => {
    setFormSubmitted(true);
  };

  //SHOW ERROR MESSAGE IF INPUT INVALID
  const errorHandler = (input) => {
    if (!formSubmitted) {
      return true;
    } else if (formSubmitted) {
      console.log(input);
      if (input === userNumber && (!input || isNaN(+input))) {
        return false;
      } else if (!input) {
        return false;
      } else {
        return true;
      }
    }
  };

  return (
    <div className="contact">
      <div data-aos="fade-right">
        <Card
          headline={introHeadline}
          subheadline={introSubHeadline}
          text={introText}
          weight="big"
        />
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="contact__form"
        data-aos="fade-left"
      >
        <div className="contact__box">
          <label className="contact__label" htmlFor="userName">
            Name
          </label>
          <p
            className={
              errorHandler(userName)
                ? "contact__label--fine"
                : "contact__label--error"
            }
          >
            Please provide your name
          </p>
        </div>
        <input
          className="contact__input"
          onChange={handleChange}
          type="text"
          name="userName"
        />
        <div className="contact__box">
          <label className="contact__label" htmlFor="userEmail">
            Email
          </label>
          <p
            className={
              errorHandler(userEmail)
                ? "contact__label--fine"
                : "contact__label--error"
            }
          >
            Please provide your email address
          </p>
        </div>
        <input
          className="contact__input"
          onChange={handleChange}
          type="email"
          name="userEmail"
        />
        <div className="contact__box">
          <label className="contact__label" htmlFor="userNumber">
            Contact Number
          </label>
          <p
            className={
              errorHandler(userNumber)
                ? "contact__label--fine"
                : "contact__label--error"
            }
          >
            Please provide a valid contact number
          </p>
        </div>
        <input
          className="contact__input"
          onChange={handleChange}
          type="tel"
          name="userNumber"
        />
        <div className="contact__box">
          <label className="contact__label" htmlFor="userMessage">
            Message
          </label>
          <p
            className={
              errorHandler(userMessage)
                ? "contact__label--fine"
                : "contact__label--error"
            }
          >
            Please include a message
          </p>
        </div>
        <textarea
          className="contact__input--textarea"
          onChange={handleChange}
          name="userMessage"
        />
        <input
          className="contact__send"
          type="submit"
          value="Send Enquiry"
          onClick={submitForm}
        />
      </form>
    </div>
  );
};

export default Contact;
