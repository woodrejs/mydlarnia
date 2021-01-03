import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledGallery = styled.section`
  height: 100vh;
  max-height: 1080px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media screen and (orientation: landscape) {
    height: 200vh;
  }
  @media screen and (orientation: landscape) and (min-width: 800px) {
    margin-bottom: 5vh;
    height: 80vh;
  }
`;
export const StyledArticle = styled.a`
  background: ${({ theme }) => theme.colors.third};
  grid-area: 1/1/2/13;
  text-decoration: none;
  cursor: pointer;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/5/2/9;
  }
`;
export const StyledArticleBox = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledText = styled(motion.h3)`
  width: 70%;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  font-size: clamp(1.3rem, 6vw, 3rem);
  color: ${({ theme }) => theme.colors.first};

  @media screen and (orientation: landscape) {
    width: 60%;
    font-size: clamp(1.3rem, 2vw, 2.2rem);
  }
  @media screen and (orientation: landscape) and (min-width: 800px) {
    width: 90%;
  }
`;
export const StyledIcon = styled(motion.img)`
  position: absolute;
  bottom: 1.5em;
  right: 1.5em;
  color: ${({ theme }) => theme.colors.first};
  height: clamp(2rem, 7vw, 3rem);
  cursor: pointer;

  @media screen and (orientation: landscape) {
    height: clamp(1.5rem, 5vw, 2.5rem);
    bottom: 1em;
    right: 1em;
  }
`;
//imgBoxs
export const StyledImgBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledImgBox1 = styled(StyledImgBox)`
  display: none;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    display: block;
    grid-area: 1/1/2/3;
  }
`;
export const StyledImgBox2 = styled(StyledImgBox)`
  grid-area: 2/1/3/5;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/3/2/5;
  }
`;
export const StyledImgBox3 = styled(StyledImgBox)`
  display: none;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    display: block;
    grid-area: 2/1/3/9;
  }
`;
export const StyledImgBox4 = styled(StyledImgBox)`
  grid-area: 2/5/3/9;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/9/3/11;
  }
`;
export const StyledImgBox5 = styled(StyledImgBox)`
  grid-area: 2/9/3/13;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/11/3/13;
  }
`;
//img
export const StyledImg = styled(motion.img)`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
`;
export const StyledImg1 = styled(StyledImg)`
  @media screen and (orientation: landscape) and (min-width: 800px) {
    width: 100%;
    min-height: 100%;
  }
`;
