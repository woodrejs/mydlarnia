import React from "react";
import styled from "styled-components";

const StyledProduct = styled.div`
  overflow: hidden;
  background: ${({ color }) => color};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media screen and (orientation: landscape) {
    margin-bottom: 5vh;
    height: 60vh;
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (orientation: landscape) {
    align-items: flex-start;
    grid-area: ${(props) => (props.invert ? "1/2/2/6" : "1/8/2/12")};
  }
`;
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
const StyledTitle = styled.h2`
  line-height: 95%;
  font-size: 4rem;
  color: ${({ color }) => color.txt};
  text-align: center;

  @media screen and (orientation: landscape) {
    text-align: left;
  }
`;
const StyledText = styled.p`
  line-height: 140%;
  font-size: 1.2rem;
  color: ${({ color }) => color.txt};
  text-align: center;

  @media screen and (orientation: landscape) {
    text-align: left;
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

      <StyledImg
        srcSet={`${sm} 736w,${md} 1024w,${lg} 1520w`}
        sizes="(max-width: 736px) 736px,(max-width: 1024px) 1024px, 1520px"
        src={`${lg}`}
        alt={alt}
        invert={invert}
      />
    </StyledProduct>
  );
};

export default Product;
