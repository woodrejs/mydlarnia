import React from "react";
import styled from "styled-components";
import LgImg from "../../assets/images/soap_1.JPG";
import Instagrm from "../../assets/icons/instagram.svg";

const StyledGallery = styled.section`
  height: 100vh;
  max-height: 1080px;
  background: red;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media screen and (orientation: landscape) {
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

  @media screen and (orientation: landscape) {
    grid-area: 1/5/2/9;
  }
`;
const StyledText = styled.h3`
  font-size: 3rem;
  width: 50%;
  text-align: center;
  color: ${({ theme }) => theme.colors.first};
`;
const StyledIcon = styled.img`
  position: absolute;
  bottom: 2em;
  right: 2em;
  color: ${({ theme }) => theme.colors.first};
`;
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
        <StyledText children="zpraszam do obserwowania nas na instagramie" />
        <StyledIcon src={Instagrm} alt="instagram_icon" />
      </StyledArticle>
      <StyledImg1 src={LgImg} />
      <StyledImg2 src={LgImg} />
      <StyledImg3 src={LgImg} />
      <StyledImg4 src={LgImg} />
      <StyledImg5 src={LgImg} />
    </StyledGallery>
  );
};

export default Gallery;

/*
@media screen and (min-width: 1280px) and (orientation: landscape){}
@media screen and (min-width: 1280px) and (orientation: portrait){}
*/
