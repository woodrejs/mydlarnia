import React from "react";
import LgImg from "../../assets/images/soap_1.JPG";
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
} from "./index.css";

const Home = () => {
  return (
    <StyledHome>
      <StyledMenu />
      <StyledBtn children="zamów" />
      <StyledArticle>
        <StyledTitle>mydlarnia u mirka</StyledTitle>
        <StyledText>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </StyledText>
        <StyledBtn2 children="oferta" />
      </StyledArticle>

      <StyledImgBox>
        <StyledImg
          srcSet={`${LgImg} 736w,${LgImg} 1024w,${LgImg} 1520w`}
          sizes="(max-width: 736px) 736px,(max-width: 1024px) 1024px, 1520px"
          src={`${LgImg}`}
          alt={"product_img"}
        />
      </StyledImgBox>
    </StyledHome>
  );
};

export default Home;
