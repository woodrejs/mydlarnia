import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  padding: 4rem 1rem;
  overflow: hidden;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    margin-bottom: unset;
  }
`;
const StyledInput = styled.input`
  border: none;
  height: 3em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secound};
  margin-bottom: 2rem;
  padding: 0.5em;
  @media screen and (orientation: landscape) and (min-width: 1280px) {
    max-width: 35vw;
  }
`;
const StyledTextarea = styled.textarea`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secound};
  margin-bottom: 1rem;
  padding: 0.5em;
  @media screen and (orientation: landscape) and (min-width: 1280px) {
    max-width: 35vw;
  }
`;
const StyledBtn = styled(Button)`
  height: 5em;
  width: 15em;
  align-self: center;
  margin-top: 3rem;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    align-self: unset;
  }
`;
const StyledLabel = styled.label`
  font-weight: 600;
  text-transform: uppercase;
  font-size: clamp(0.8rem, 2.5vw, 1.5rem);

  @media screen and (min-width: 800px) and (orientation: landscape) {
    font-size: clamp(0.8rem, 1.5vw, 1rem);
  }
`;
const StyledTitle = styled.h2`
  margin-bottom: 4rem;
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(1.5rem, 5vw, 3rem);

  @media screen and (min-width: 800px) and (orientation: landscape) {
    font-size: clamp(2rem, 3vw, 3rem);
  }
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
        rows="3"
        onChange={(e) => handleInput(e, "message")}
      />
      <StyledBtn children="wyślij" />
    </StyledForm>
  );
};
export default Form;
