import React from "react";
import {
  StyledTitle,
  StyledText,
  StyledProductImg,
  StyledProduct,
  StyledArticle,
} from "./index.css";

const Product = ({ data }) => {
  const { invert, color, title, text, imgs } = data;
  const { bck, txt } = color;

  return (
    <StyledProduct color={bck}>
      <StyledArticle invert={invert}>
        <StyledTitle children={title} color={txt} />
        <StyledText children={text} color={txt} />
      </StyledArticle>
      <StyledProductImg invert={invert} imgs={imgs} />
    </StyledProduct>
  );
};

export default Product;
