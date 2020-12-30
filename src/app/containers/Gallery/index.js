import React from "react";
import LgImg from "../../assets/images/soap_1.JPG";
import Instagrm from "../../assets/icons/instagram.png";
import {
  StyledGallery,
  StyledArticle,
  StyledText,
  StyledIcon,
  StyledImgBox1,
  StyledImgBox2,
  StyledImgBox3,
  StyledImgBox4,
  StyledImgBox5,
} from "./index.css";

const DATA = [
  {
    imgs: {
      sm: LgImg,
      md: LgImg,
      lg: LgImg,
    },
  },
];

const Gallery = () => {
  return (
    <StyledGallery>
      <StyledArticle>
        <StyledText children="zapraszam do obserwowania nas na instagramie" />
        <StyledIcon src={Instagrm} alt="instagram_icon" />
      </StyledArticle>
      <StyledImgBox1 imgs={DATA[0].imgs} />
      <StyledImgBox2 imgs={DATA[0].imgs} />
      <StyledImgBox3 imgs={DATA[0].imgs} />
      <StyledImgBox4 imgs={DATA[0].imgs} />
      <StyledImgBox5 imgs={DATA[0].imgs} />
    </StyledGallery>
  );
};

export default Gallery;
