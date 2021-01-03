import React from "react";
import { ImageVariants } from "../../utils/motion";
import { useInView } from "react-intersection-observer";
import Img from "../../assets/images/Contact/Contact_800.JPG";
import {
  StyledContact,
  StyledForm,
  StyledFooter,
  StyledImgBox,
  StyledImg,
} from "./index.css";

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <StyledContact id="contact" ref={ref}>
      <StyledForm inView={inView} />
      <StyledFooter inView={inView} />
      <StyledImgBox>
        <StyledImg
          src={Img}
          alt={"contact_img"}
          variants={ImageVariants}
          animate={inView ? "animate" : null}
          initial="initial"
        />
      </StyledImgBox>
    </StyledContact>
  );
};

export default Contact;
