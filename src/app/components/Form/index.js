import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20vh;

  @media screen and (orientation: landscape) {
    margin-bottom: unset;
  }
`;
const StyledInput = styled.input`
  border: none;
  height: 3em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secound};
  margin-bottom: 2rem;
  padding: 0.5em;
`;
const StyledTextarea = styled.textarea`
  margin-top: 1rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secound};
  margin-bottom: 2rem;
  padding: 0.5em;
`;
const StyledBtn = styled(Button)`
  height: 5em;
  width: 15em;
  align-self: center;
  margin-top: 3rem;
  @media screen and (orientation: landscape) {
    align-self: unset;
  }
`;
const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
`;
const StyledTitle = styled.h2`
  margin-bottom: 5rem;
  font-size: 3rem;
`;

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
        rows="5"
        onChange={(e) => handleInput(e, "message")}
      />
      <StyledBtn children="wyślij" />
    </StyledForm>
  );
};
export default Form;
