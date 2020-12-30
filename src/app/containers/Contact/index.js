import React from "react";
import LgImg from "../../assets/images/soap_1.JPG";
import {
  StyledContact,
  StyledForm,
  StyledFooter,
  StyledImgBox,
  StyledImg,
} from "./index.css";

const Contact = () => {
  return (
    <StyledContact>
      <StyledForm />
      <StyledFooter />
      <StyledImgBox>
        <StyledImg
          srcSet={`${LgImg} 736w,${LgImg} 1024w,${LgImg} 1520w`}
          sizes="(max-width: 736px) 736px,(max-width: 1024px) 1024px, 1520px"
          src={`${LgImg}`}
          alt={"product_img"}
        />
      </StyledImgBox>
    </StyledContact>
  );
};

export default Contact;
