import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledMenu = styled.nav`
  z-index: 1;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (orientation: landscape) {
    justify-content: space-between;
  }
`;
export const StyledMenuItem = styled(motion.div)`
  display: none;
  font-size: clamp(0.6rem, 1.2vw, 0.9rem);
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secound};
  cursor: pointer;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    display: flex;
  }
`;
export const StyledHamburger = styled.img`
  height: clamp(1.1rem, 4vw, 1.6rem);
  cursor: pointer;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    display: none;
  }
`;
