import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import Card from "../Card/Card";

export const Contact = () => {
  const introHeadline = "Enquiry Form";
  const introSubHeadline = "Design your Dreams";
  const introText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum impedit alias doloremque debitis non? Aliquid hic ea voluptatem expedita dolorum dolore neque, voluptate velit similique eveniet ratione, soluta quam omnis!";

  const form = useRef();

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

  return (
    <div className="contact">
      <Card
        headline={introHeadline}
        subheadline={introSubHeadline}
        text={introText}
      />
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Contact Number</label>
        <input type="tel" name="user_number" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;

// CSS for form
// add in form validation
// add in form clearing on submit/message
