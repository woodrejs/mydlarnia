import React, { useState } from "react";
import emailjs from "emailjs-com";
import { TextVariants, InputVariants } from "../../utils/motion";
import {
  StyledForm,
  StyledInput,
  StyledTextarea,
  StyledBtn,
  StyledLabel,
  StyledTitle,
} from "./index.css";

const Form = ({ className, inView }) => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: "",
  });
  const { message, name, email } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { message, name, email } = formData;
    const Req1 = new RegExp(/^[a-z ,.'-]+$/i);
    const Req2 = new RegExp(/^[a-z0-9 _.,-]*$/i);
    const Req3 = new RegExp(
      "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    );

    if (name === "" || message === "" || email === "")
      return alert("Pola nie moga być puste.");
    if (!Req1.test(name)) return alert("Niepoprawne imie i nazwisko.");
    if (!Req2.test(message)) return alert("Niepoprawny wiadomość.");
    if (!Req3.test(email)) return alert("Niepoprawny adres email.");

    // send emaail
    const templateParams = { message, name, email };
    const {
      REACT_APP_SERVICE_ID,
      REACT_APP_TEMPLATE_ID,
      REACT_APP_USER_ID,
    } = process.env;

    emailjs
      .send(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        templateParams,
        REACT_APP_USER_ID
      )
      .then(() => setFormData({ email: "", message: "", name: "" }))
      .catch((err) => console.log("FAILED...", err));
  };
  const handleInput = (e, name) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  return (
    <StyledForm onSubmit={handleSubmit} className={className}>
      <StyledTitle
        children="Napisz do nas"
        variants={TextVariants}
        animate={inView ? "animate" : null}
        initial="initial"
      />
      <StyledLabel
        htmlFor="name"
        children="Imię i Nazwisko"
        variants={TextVariants}
        animate={inView ? "animate" : null}
        initial="initial"
      />
      <StyledInput
        id="name"
        type="text"
        name="name"
        value={name}
        variants={InputVariants}
        animate={inView ? "animate" : null}
        initial="initial"
        onChange={(e) => handleInput(e, "name")}
      />

      <StyledLabel
        htmlFor="email"
        children="Email"
        variants={TextVariants}
        animate={inView ? "animate" : null}
        initial="initial"
      />
      <StyledInput
        id="email"
        type="email"
        name="email"
        value={email}
        variants={InputVariants}
        animate={inView ? "animate" : null}
        initial="initial"
        onChange={(e) => handleInput(e, "email")}
      />
      <StyledLabel
        htmlFor="message"
        children="Wiadomość"
        variants={TextVariants}
        animate={inView ? "animate" : null}
        initial="initial"
      />
      <StyledTextarea
        name="message"
        id="message"
        value={message}
        cols="30"
        rows="3"
        variants={InputVariants}
        animate={inView ? "animate" : null}
        initial="initial"
        onChange={(e) => handleInput(e, "message")}
      />
      <StyledBtn children="wyślij" />
    </StyledForm>
  );
};
export default Form;
