import React from "react";
import styled from "styled-components";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import LgImg from "../../assets/images/soap_1.JPG";

const StyledContact = styled.section`
  min-height: 100vh;
  max-height: 1080px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 5vh;
`;
const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  grid-area: 1/2/2/12;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/6/2/12;
  }
`;
const StyledFooter = styled(Footer)`
  grid-area: 2/1/3/13;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
`;
//img
const StyledImgBox = styled.div`
  background: blue;
  position: relative;
  overflow: hidden;

  display: none;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    display: block;
    grid-area: 1/1/3/5;
    width: 100%;
    height: 100%;
  }
`;
const StyledImg = styled.img`
  background: green;
  display: none;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    display: block;
    grid-area: 1/1/3/5;
    width: 100%;
    height: 100%;
  }
`;
const Contact = () => {
  return (
    <StyledContact>
      <StyledForm />
      <StyledFooter />
      <StyledImgBox />
    </StyledContact>
  );
};

export default Contact;

/*
@media screen and (min-width: 1280px) and (orientation: landscape){}
@media screen and (min-width: 1280px) and (orientation: portrait){}
*/
