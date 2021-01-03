import React from "react";
import { TextVariants } from "../../utils/motion";
import { StyledFooter, StyledCopywriter, StyledSubMenu } from "./index.css";

const Footer = ({ className, inView }) => {
  return (
    <StyledFooter className={className}>
      <StyledCopywriter
        children="copywriter"
        variants={TextVariants}
        initial="initial"
        animate={inView ? "animate" : null}
      />
      <StyledSubMenu />
    </StyledFooter>
  );
};

export default Footer;
