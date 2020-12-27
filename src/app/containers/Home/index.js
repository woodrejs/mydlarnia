import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Menu from "../../components/Menu";
import LgImg from "../../assets/images/soap_1.JPG";

const StyledHome = styled.section`
  height: 100vh;
  max-height: 1080px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 10vh auto;
  @media screen and (orientation: landscape) {
    margin-bottom: 5vh;
  }
`;
const StyledMenu = styled(Menu)`
  grid-area: 1/6/2/12;

  @media screen and (orientation: landscape) {
    grid-area: 1/2/2/5;
  }
`;
const StyledBtn = styled(Button)`
  grid-area: 1/2/2/6;
  align-self: center;

  width: 7em;
  height: 2.5em;

  @media screen and (orientation: landscape) {
    grid-area: 1/10/2/12;

    width: 15em;
    height: 4em;
  }
`;
const StyledArticle = styled.div`
  z-index: 1;
  grid-area: 2/2/3/12;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (orientation: landscape) {
    grid-area: 2/2/3/7;
  }
`;
//img
const StyledImg = styled.img`
  background: blue;
  width: 100%;
  height: 100%;
  overflow: hidden;
  grid-area: 2/1/3/13;
  @media screen and (orientation: landscape) {
    grid-area: 1/8/3/13;
  }
`;
//article
const StyledTitle = styled.h1`
  font-size: 5rem;
  line-height: 95%;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 3vh;
  color: ${({ theme }) => theme.colors.secound};
`;
const StyledText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 12vh;
  line-height: 140%;
`;
const StyledBtn2 = styled(Button)`
  width: 20em;
  height: 5em;
`;

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

      <StyledImg src={LgImg} />
    </StyledHome>
  );
};

export default Home;

/*
@media screen and (min-width: 1280px) and (orientation: landscape){}
@media screen and (min-width: 1280px) and (orientation: portrait){}


<StyledPhoto
            srcSet={`${SmImg} 736w,
            ${MdImg} 1024w,
            ${LgImg} 1520w`}
            sizes="(max-width: 736px) 736px,
            (max-width: 1024px) 1024px,
            1520px"
            src={`${LgImg}`}
            alt="my_photo"
            variants={variants_main}
            animate={imgIsLoaded ? "visible" : "hidden"}
            initial="hidden"
            exit="hidden"
            onLoad={() => imgIsLoaded.set(true)}
          />


*/
