import React from "react";
import { useInView } from "react-intersection-observer";
import { TextVariants } from "../../utils/motion";
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
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <StyledProduct color={bck} ref={ref}>
      <StyledArticle invert={invert}>
        <StyledTitle
          children={title}
          color={txt}
          variants={TextVariants}
          animate={inView ? "animate" : null}
          initial="initial"
        />
        <StyledText
          children={text}
          color={txt}
          variants={TextVariants}
          animate={inView ? "animate" : null}
          initial="initial"
        />
      </StyledArticle>
      <StyledProductImg invert={invert} imgs={imgs} />
    </StyledProduct>
  );
};

export default Product;
