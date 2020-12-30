import React from "react";
import styled from "styled-components";

const StyledProduct = styled.div`
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
const StyledArticle = styled.article`
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
const StyledTitle = styled.h2`
  line-height: 95%;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 4vw, 3.5rem);
  color: ${({ color }) => color.txt};
  text-align: center;

  @media screen and (orientation: landscape) and (min-width: 1024px) {
    text-align: left;
  }
`;
const StyledText = styled.p`
  line-height: 140%;
  font-size: clamp(0.8em, 3vw, 1.1em);
  font-weight: 400;
  color: ${({ color }) => color.txt};
  text-align: center;

  @media screen and (orientation: landscape) and (min-width: 1024px) {
    text-align: left;
  }
`;
const StyledImgBox = styled.div`
  background: blue;
  grid-area: 2/1/3/13;
  width: 100%;
  height: 100%;

  @media screen and (orientation: landscape) and (min-width: 1024px) {
    grid-area: ${(props) => (props.invert ? "1/7/2/12" : "1/2/2/7")};
  }
`;
///
const StyledImg = styled.img`
  background: red;
  grid-area: 2/1/3/13;
  width: 100%;
  max-height: 100%;

  @media screen and (orientation: landscape) {
    grid-area: ${(props) => (props.invert ? "1/7/2/12" : "1/2/2/7")};
    width: 100%;
  }
`;

const Product = ({ data }) => {
  const { invert, alt, color, title, text, imgs } = data;
  const { sm, md, lg } = imgs;
  const { bck, txt } = color;

  return (
    <StyledProduct color={bck}>
      <StyledArticle invert={invert}>
        <StyledTitle children={title} color={txt} />
        <StyledText children={text} color={txt} />
      </StyledArticle>
      <StyledImgBox invert={invert} />
    </StyledProduct>
  );
};

export default Product;
/*
<StyledImg
        srcSet={`${sm} 736w,${md} 1024w,${lg} 1520w`}
        sizes="(max-width: 736px) 736px,(max-width: 1024px) 1024px, 1520px"
        src={`${lg}`}
        alt={alt}
        invert={invert}
      />
      */
