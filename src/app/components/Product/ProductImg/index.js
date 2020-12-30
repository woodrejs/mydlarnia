import React from "react";
import { StyledImgBox, StyledImg } from "./index.css";

const ProductImg = ({ className, imgs }) => {
  const { sm, md, lg } = imgs;

  return (
    <StyledImgBox className={className}>
      <StyledImg
        srcSet={`${sm} 736w,${md} 1024w,${lg} 1520w`}
        sizes="(max-width: 736px) 736px,(max-width: 1024px) 1024px, 1520px"
        src={`${lg}`}
        alt={"product_img"}
      />
    </StyledImgBox>
  );
};
export default ProductImg;
