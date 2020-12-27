import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.third};
  z-index: 1;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 0.75rem;
`;

const Button = ({ children, click, className }) => {
  return (
    <StyledButton className={className} children={children} onClick={click} />
  );
};

export default Button;
