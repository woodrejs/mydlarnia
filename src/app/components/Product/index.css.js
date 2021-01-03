import styled from "styled-components";
import { motion } from "framer-motion";
import ProductImg from "./ProductImg";

export const StyledTitle = styled(motion.h2)`
  line-height: 95%;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 4vw, 3.5rem);
  color: ${({ color }) => color};
  text-align: center;

  @media screen and (orientation: landscape) and (min-width: 1024px) {
    text-align: left;
  }
`;
export const StyledText = styled(motion.p)`
  line-height: 140%;
  font-size: clamp(0.8em, 3vw, 1.1em);
  font-weight: 400;
  color: ${({ color }) => color};
  text-align: center;

  @media screen and (orientation: landscape) and (min-width: 1024px) {
    text-align: left;
  }
`;
export const StyledProductImg = styled(ProductImg)`
  grid-area: 2/1/3/13;

  @media screen and (orientation: landscape) and (min-width: 1024px) {
    grid-area: ${(props) => (props.invert ? "1/7/2/12" : "1/2/2/7")};
  }
`;
export const StyledProduct = styled.div`
  overflow: hidden;
  background: ${({ color }) => color};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);

  min-height: 150vw;

  @media screen and (orientation: landscape) and (min-width: 1024px) {
    margin-bottom: 5vh;
    min-height: 60vh;
    max-height: 1080px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
  }
`;
export const StyledArticle = styled.article`
  z-index: 1;
  grid-area: 1/1/2/13;
  width: 100%;
  height: 100%;

  padding: 1.5em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (orientation: landscape) and (min-width: 1024px) {
    align-items: flex-start;
    padding: 0;
    grid-area: ${(props) => (props.invert ? "1/2/2/6" : "1/8/2/12")};
  }
`;
