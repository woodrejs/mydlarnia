import styled from "styled-components";
import GalleryImg from "../../components/GalleryImg";

export const StyledGallery = styled.section`
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
export const StyledArticle = styled.div`
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
export const StyledText = styled.h3`
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
export const StyledIcon = styled.img`
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
export const StyledImgBox1 = styled(GalleryImg)`
  display: none;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    display: block;
    grid-area: 1/1/2/3;
  }
`;
export const StyledImgBox2 = styled(GalleryImg)`
  grid-area: 2/1/3/5;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/3/2/5;
  }
`;
export const StyledImgBox3 = styled(GalleryImg)`
  display: none;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    display: block;
    grid-area: 2/1/3/9;
  }
`;
export const StyledImgBox4 = styled(GalleryImg)`
  grid-area: 2/5/3/9;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/9/3/11;
  }
`;
export const StyledImgBox5 = styled(GalleryImg)`
  grid-area: 2/9/3/13;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/11/3/13;
  }
`;
