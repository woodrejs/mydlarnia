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
  grid-template-rows: 12vh auto;
  @media screen and (orientation: landscape) {
    margin-bottom: 5vh;
    grid-template-rows: 15vh auto;
  }
`;
const StyledMenu = styled(Menu)`
  grid-area: 1/6/2/12;

  @media screen and (orientation: landscape) {
    grid-area: 1/2/2/7;
  }
  @media screen and (orientation: landscape) and (min-width: 1280px) {
    grid-area: 1/2/2/6;
  }
`;
const StyledBtn = styled(Button)`
  grid-area: 1/2/2/8;
  align-self: center;

  width: clamp(50%, 50vw, 30%);
  height: clamp(40%, 50vw, 30%);

  @media screen and (orientation: landscape) {
    grid-area: 1/9/2/12;
    justify-self: end;
    width: clamp(60%, 40vw, 30%);
    height: clamp(50%, 40vw, 30%);
  }
  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/10/2/12;
    width: 10em;
    height: 3em;
  }
`;
const StyledArticle = styled.div`
  z-index: 1;
  grid-area: 2/2/3/12;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    align-items: flex-start;
    grid-area: 2/2/3/7;
  }
`;
//article
const StyledTitle = styled.h1`
  font-size: clamp(2.5rem, 12vw, 6rem);
  line-height: 95%;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 3vh;
  color: ${({ theme }) => theme.colors.secound};
  text-align: center;

  @media screen and (orientation: landscape) {
    font-size: clamp(2.2rem, 6vw, 6rem);
  }
  @media screen and (orientation: landscape) and (min-width: 800px) {
    text-align: left;
  }
`;
const StyledText = styled.p`
  text-align: center;
  font-size: clamp(0.8rem, 4vw, 1.5rem);
  margin-bottom: 12vh;
  line-height: 140%;

  @media screen and (orientation: landscape) {
    font-size: clamp(0.8rem, 2vw, 1.3rem);
    max-width: 80vw;
  }
  @media screen and (orientation: landscape) and (min-width: 800px) {
    text-align: left;
  }
`;
const StyledBtn2 = styled(Button)`
  width: clamp(15em, 50vw, 35em);
  height: clamp(5em, 12vw, 12em);

  @media screen and (orientation: landscape) {
    width: clamp(15em, 25vw, 22em);
    height: clamp(4em, 6vw, 6em);
  }
`;
/////img
const StyledImgBox = styled.div`
  background: blue;
  width: 100%;
  height: 100%;
  overflow: hidden;
  grid-area: 2/1/3/13;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/8/3/13;
  }
`;
const StyledImg = styled.img`
  background: blue;
  width: 100%;
  height: 100%;
  overflow: hidden;
  grid-area: 2/1/3/13;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/8/3/13;
  }
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

      <StyledImgBox />
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
