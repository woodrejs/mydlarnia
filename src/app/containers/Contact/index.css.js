import styled from "styled-components";
import { motion } from "framer-motion";
import Form from "../../components/Form";
import Footer from "../../components/Footer";

export const StyledContact = styled.section`
  min-height: 100vh;
  max-height: 1080px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 5vh;
`;
export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  grid-area: 1/2/2/12;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/6/2/12;
  }
`;
export const StyledFooter = styled(Footer)`
  grid-area: 2/1/3/13;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
`;
export const StyledImgBox = styled.div`
  position: relative;
  overflow: hidden;

  display: none;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: 1/1/3/5;
    width: 100%;
    height: 100%;
  }
`;
export const StyledImg = styled(motion.img)`
  position: absolute;
  min-height: 100%;
  width: 100%;
`;
