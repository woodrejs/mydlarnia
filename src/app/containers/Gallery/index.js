import React from "react";
import styled from "styled-components";
import LgImg from "../../assets/images/soap_1.JPG";
import Instagrm from "../../assets/icons/instagram.png";

const StyledGallery = styled.section`
  height: 100vh;
  max-height: 1080px;
  background: red;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media screen and (orientation: landscape) and (min-width: 800px) {
    margin-bottom: 5vh;
    height: 80vh;
  }
`;
const StyledArticle = styled.div`
  background: ${({ theme }) => theme.colors.third};
  grid-area: 1/1/2/13;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/5/2/9;
  }
`;
const StyledText = styled.h3`
  width: 70%;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  font-size: clamp(1.3rem, 6vw, 3rem);
  color: ${({ theme }) => theme.colors.first};

  @media screen and (orientation: landscape) {
    width: 60%;
    font-size: clamp(1.3rem, 2vw, 2.2rem);
  }
  @media screen and (orientation: landscape) and (min-width: 800px) {
    width: 90%;
  }
`;
const StyledIcon = styled.img`
  position: absolute;
  bottom: 1.5em;
  right: 1.5em;
  color: ${({ theme }) => theme.colors.first};
  height: clamp(2rem, 7vw, 3rem);

  @media screen and (orientation: landscape) {
    height: clamp(1.5rem, 5vw, 2.5rem);
    bottom: 1em;
    right: 1em;
  }
`;
const StyledImgBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: blue;
  border: 1px solid white;
`;
const StyledImgBox1 = styled(StyledImgBox)`
  display: none;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    display: block;
    grid-area: 1/1/2/3;
  }
`;
const StyledImgBox2 = styled(StyledImgBox)`
  grid-area: 2/1/3/5;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/3/2/5;
  }
`;
const StyledImgBox3 = styled(StyledImgBox)`
  display: none;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    display: block;
    grid-area: 2/1/3/9;
  }
`;
const StyledImgBox4 = styled(StyledImgBox)`
  grid-area: 2/5/3/9;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/9/3/11;
  }
`;
const StyledImgBox5 = styled(StyledImgBox)`
  grid-area: 2/9/3/13;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/11/3/13;
  }
`;
//imgss
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;
const StyledImg1 = styled(StyledImg)`
  display: none;
  @media screen and (orientation: landscape) {
    display: block;
    grid-area: 1/1/2/3;
  }
`;
const StyledImg2 = styled(StyledImg)`
  grid-area: 2/1/3/5;
  @media screen and (orientation: landscape) {
    grid-area: 1/3/2/5;
  }
`;
const StyledImg3 = styled(StyledImg)`
  display: none;
  @media screen and (orientation: landscape) {
    display: block;
    grid-area: 2/1/3/9;
  }
`;
const StyledImg4 = styled(StyledImg)`
  grid-area: 2/5/3/9;
  @media screen and (orientation: landscape) {
    grid-area: 1/9/3/11;
  }
`;
const StyledImg5 = styled(StyledImg)`
  grid-area: 2/9/3/13;
  @media screen and (orientation: landscape) {
    grid-area: 1/11/3/13;
  }
`;

const Gallery = () => {
  return (
    <StyledGallery>
      <StyledArticle>
        <StyledText children="zapraszam do obserwowania nas na instagramie" />
        <StyledIcon src={Instagrm} alt="instagram_icon" />
      </StyledArticle>
      <StyledImgBox1 />
      <StyledImgBox2 />
      <StyledImgBox3 />
      <StyledImgBox4 />
      <StyledImgBox5 />
    </StyledGallery>
  );
};

export default Gallery;

/*
@media screen and (min-width: 800px) and (orientation: landscape){}
@media screen and (min-width: 1280px) and (orientation: portrait){}
*/
