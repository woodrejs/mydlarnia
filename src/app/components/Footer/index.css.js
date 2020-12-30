import styled from "styled-components";
import Menu from "../Menu";

export const StyledFooter = styled.div`
  z-index: 1;
  height: 100%;
`;
export const StyledCopywriter = styled.h5`
  @media screen and (orientation: landscape) and (min-width: 800px) {
    grid-area: 1/2/2/4;
    text-align: left;
  }
  text-transform: uppercase;
  text-align: center;
  line-height: 5vh;
  grid-area: 1/1/2/13;
  font-size: clamp(0.6rem, 1.2vw, 0.9rem);
`;
export const StyledSubMenu = styled(Menu)`
  display: none;
  @media screen and (orientation: landscape) and (min-width: 800px) {
    display: flex;
    grid-area: 1/8/2/12;
  }
`;
