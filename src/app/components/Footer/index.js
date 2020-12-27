import React from "react";
import styled from "styled-components";
import Menu from "../Menu";

const StyledFooter = styled.div`
  z-index: 1;
  height: 100%;
`;
const StyledCopywriter = styled.h5`
  @media screen and (orientation: landscape) {
    grid-area: 1/2/2/4;
    text-align: left;
  }
  text-align: center;
  line-height: 5vh;
  grid-area: 1/1/2/13;
`;
const StyledSubMenu = styled(Menu)`
  display: none;
  @media screen and (orientation: landscape) {
    display: flex;
    grid-area: 1/6/2/10;
  }
`;

const Footer = ({ className }) => {
  return (
    <StyledFooter className={className}>
      <StyledCopywriter children="copywriter" />
      <StyledSubMenu />
    </StyledFooter>
  );
};

export default Footer;
