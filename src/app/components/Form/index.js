import React, { useState } from "react";
import {
  StyledForm,
  StyledInput,
  StyledTextarea,
  StyledBtn,
  StyledLabel,
  StyledTitle,
} from "./index.css";

const Form = ({ className }) => {
  const [formData, setFormData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("zrob walidacje");
  };
  const handleInput = (e, name) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  return (
    <StyledForm onSubmit={handleSubmit} className={className}>
      <StyledTitle children="Napisz do nas" />
      <StyledLabel htmlFor="name" children="Imię i Nazwisko" />
      <StyledInput
        id="name"
        type="text"
        name="name"
        onChange={(e) => handleInput(e, "name")}
      />

      <StyledLabel htmlFor="email" children="Email" />
      <StyledInput
        id="email"
        type="email"
        name="email"
        onChange={(e) => handleInput(e, "email")}
      />
      <StyledLabel htmlFor="message" children="Wiadomość" />
      <StyledTextarea
        name="message"
        id="message"
        cols="30"
        rows="3"
        onChange={(e) => handleInput(e, "message")}
      />
      <StyledBtn children="wyślij" />
    </StyledForm>
  );
};
export default Form;
