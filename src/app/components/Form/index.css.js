import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "../Button";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  padding: 4rem 1rem;
  overflow: hidden;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    margin-bottom: unset;
  }
`;
export const StyledInput = styled(motion.input)`
  transform-origin: left;
  border: none;
  height: 3em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secound};
  margin-bottom: 2rem;
  padding: 0.5em;
  @media screen and (orientation: landscape) and (min-width: 1280px) {
    max-width: 35vw;
  }
`;
export const StyledTextarea = styled(motion.textarea)`
  transform-origin: left;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secound};
  margin-bottom: 1rem;
  padding: 0.5em;
  @media screen and (orientation: landscape) and (min-width: 1280px) {
    max-width: 35vw;
  }
`;
export const StyledBtn = styled(Button)`
  height: 5em;
  width: 17em;
  align-self: center;
  margin-top: 3rem;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    align-self: unset;
  }
`;
export const StyledLabel = styled(motion.label)`
  font-weight: 600;
  text-transform: uppercase;
  font-size: clamp(0.8rem, 2.5vw, 1.5rem);

  @media screen and (min-width: 800px) and (orientation: landscape) {
    font-size: clamp(0.8rem, 1.5vw, 1rem);
  }
`;
export const StyledTitle = styled(motion.h2)`
  margin-bottom: 4rem;
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(1.5rem, 5vw, 3rem);

  @media screen and (min-width: 800px) and (orientation: landscape) {
    font-size: clamp(2rem, 3vw, 3rem);
  }
`;
