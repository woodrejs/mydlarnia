import styled from "styled-components";
import Button from "../../components/Button";
import Menu from "../../components/Menu";
import { motion } from "framer-motion";

export const StyledHome = styled.section`
  height: 100vh;
  max-height: 1080px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 12vh auto;
  @media screen and (orientation: landscape) {
    margin-bottom: 5vh;
    grid-template-rows: 15vh auto;
  }
`;
export const StyledMenu = styled(Menu)`
  grid-area: 1/6/2/12;

  @media screen and (orientation: landscape) {
    grid-area: 1/2/2/7;
  }
  @media screen and (orientation: landscape) and (min-width: 1280px) {
    grid-area: 1/2/2/6;
  }
`;
export const StyledBtn = styled(Button)`
  grid-area: 1/2/2/8;
  align-self: center;

  width: clamp(50%, 50vw, 30%);
  height: clamp(40%, 50vw, 30%);

  @media screen and (orientation: landscape) {
    grid-area: 1/9/2/12;
    justify-self: end;
    width: clamp(60%, 40vw, 30%);
    height: clamp(50%, 40vw, 30%);
  }
  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/10/2/12;
    width: 10w;
    height: 5vh;
  }
`;
export const StyledArticle = styled.div`
  z-index: 2;
  grid-area: 2/2/3/12;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    align-items: flex-start;
    grid-area: 2/2/3/7;
  }
`;
export const StyledTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 12vw, 6rem);
  line-height: 95%;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 3vh;
  color: ${({ theme }) => theme.colors.first};
  text-align: center;

  @media screen and (orientation: landscape) {
    font-size: clamp(2.2rem, 6vw, 6rem);
  }
  @media screen and (orientation: landscape) and (min-width: 800px) {
    color: ${({ theme }) => theme.colors.secound};
    text-align: left;
  }
`;
export const StyledText = styled(motion.p)`
  text-align: center;
  font-size: clamp(0.8rem, 4vw, 1.5rem);
  margin-bottom: 12vh;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.first};

  @media screen and (orientation: landscape) {
    font-size: clamp(0.8rem, 1vw, 1.2rem);
    max-width: 80vw;
  }
  @media screen and (orientation: landscape) and (min-width: 800px) {
    color: ${({ theme }) => theme.colors.secound};
    text-align: left;
  }
`;
export const StyledBtn2 = styled(Button)`
  width: clamp(10em, 40vw, 35em);
  height: clamp(3em, 8vh, 12em);

  @media screen and (orientation: landscape) {
    width: clamp(12em, 15vw, 18em);
    height: clamp(3em, 7vw, 5em);
  }
`;
export const StyledImgBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 2/1/3/13;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/8/3/13;
  }
`;
export const StyledImg = styled(motion.img)`
  position: absolute;
  width: 100%;
  min-height: 100%;
`;
export const StyledMask = styled(motion.div)`
  position: absolute;
  width: 100%;
  min-height: 100%;
  background: black;
  z-index: 1;
  opacity: 0.5;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    display: none;
  }
`;
