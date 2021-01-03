import React from "react";
import { useTransform, useViewportScroll } from "framer-motion";
import { StyledImgBox, StyledImg } from "./index.css";

const ProductImg = ({ className, imgs }) => {
  const { sm, md, lg } = imgs;
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <StyledImgBox className={className}>
      <StyledImg
        srcSet={`${sm} 736w,${md} 1024w,${lg} 1520w`}
        sizes="(max-width: 736px) 736px,(max-width: 1024px) 1024px, 1520px"
        src={`${lg}`}
        alt={"product_img"}
        style={{ scale }}
      />
    </StyledImgBox>
  );
};
export default ProductImg;
