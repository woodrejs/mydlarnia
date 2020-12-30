import React from "react";
import { StyledFooter, StyledCopywriter, StyledSubMenu } from "./index.css";

const Footer = ({ className }) => {
  return (
    <StyledFooter className={className}>
      <StyledCopywriter children="copywriter" />
      <StyledSubMenu />
    </StyledFooter>
  );
};

export default Footer;
