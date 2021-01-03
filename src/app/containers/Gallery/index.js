import React from "react";
import { GalleryBoxVariants } from "../../utils/motion";
import { useInView } from "react-intersection-observer";
import G1Lg from "../../assets/images/Gallery/g1/g1_500.JPG";
import G2Lg from "../../assets/images/Gallery/g2/g2_500.JPG";
import G2Sm from "../../assets/images/Gallery/g2/g2_300.JPG";
import G3Lg from "../../assets/images/Gallery/g3/g3_1500.jpg";
import G3Sm from "../../assets/images/Gallery/g3/g3_800.jpg";
import G4Lg from "../../assets/images/Gallery/g4/g4_500.JPG";
import G4Sm from "../../assets/images/Gallery/g4/g4_300.JPG";
import G5Lg from "../../assets/images/Gallery/g5/g5_500.JPG";
import G5Sm from "../../assets/images/Gallery/g5/g5_300.JPG";
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
  StyledImg,
  StyledImg1,
  StyledArticleBox,
} from "./index.css";

const Gallery = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <StyledGallery id="gallery" ref={ref}>
      <StyledArticle href="#">
        <StyledArticleBox
          variants={GalleryBoxVariants}
          animate={inView ? "animate" : null}
          initial="initial"
          whileHover="hover"
        >
          <StyledText children="zapraszam do obserwowania nas na instagramie" />
          <StyledIcon src={Instagrm} alt="instagram_icon" />
        </StyledArticleBox>
      </StyledArticle>
      <StyledImgBox1>
        <StyledImg1 src={G1Lg} alt="500" />
      </StyledImgBox1>
      <StyledImgBox2>
        <StyledImg1
          src={G2Lg}
          alt="500"
          srcSet={`${G2Sm} 300w,${G2Lg} 500w`}
          sizes=" 33vw,(min-width: 800px) and (orientation: landscape) 17vw"
        />
      </StyledImgBox2>
      <StyledImgBox3>
        <StyledImg
          src={G3Lg}
          alt="500"
          srcSet={`${G3Sm} 800w,${G3Lg} 1500w`}
          sizes="70vw"
        />
      </StyledImgBox3>
      <StyledImgBox4>
        <StyledImg
          src={G4Lg}
          alt="500"
          srcSet={`${G4Sm} 300w,${G4Lg} 500w`}
          sizes=" 33vw,(min-width: 800px) and (orientation: landscape) 17vw"
        />
      </StyledImgBox4>
      <StyledImgBox5>
        <StyledImg
          src={G5Lg}
          alt="500"
          srcSet={`${G5Sm} 300w,${G5Lg} 500w`}
          sizes=" 33vw,(min-width: 800px) and (orientation: landscape) 17vw"
        />
      </StyledImgBox5>
    </StyledGallery>
  );
};

export default Gallery;
