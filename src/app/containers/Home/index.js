import React from "react";
import { TextVariants, ImageVariants } from "../../utils/motion";
import ImgSm from "../../assets/images/Home/home_400.JPG";
import ImgMd from "../../assets/images/Home/home_700.JPG";
import ImgLg from "../../assets/images/Home/home_1000.JPG";
import {
  StyledHome,
  StyledMenu,
  StyledBtn,
  StyledArticle,
  StyledTitle,
  StyledText,
  StyledBtn2,
  StyledImgBox,
  StyledImg,
  StyledMask,
} from "./index.css";

const Home = () => {
  const handleBtn = (target) =>
    document.getElementById(`${target}`).scrollIntoView();

  return (
    <StyledHome id="home">
      <StyledMenu />
      <StyledBtn children="zamów" click={() => handleBtn("contact")} />

      <StyledArticle>
        <StyledTitle
          variants={TextVariants}
          animate="animate"
          initial="initial"
          children="mydlarnia u mirka"
        />
        <StyledText
          variants={TextVariants}
          animate="animate"
          initial="initial"
          children="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout."
        />
        <StyledBtn2 children="oferta" click={() => handleBtn("products")} />
      </StyledArticle>

      <StyledImgBox>
        <StyledMask />
        <StyledImg
          srcSet={`${ImgSm} 400w,${ImgMd} 700w,${ImgLg} 1000w`}
          sizes=" 100vw,(min-width: 800px) 40vw"
          src={`${ImgLg}`}
          alt={"product_img"}
          variants={ImageVariants}
          animate="animate"
          initial="initial"
        />
      </StyledImgBox>
    </StyledHome>
  );
};

export default Home;
