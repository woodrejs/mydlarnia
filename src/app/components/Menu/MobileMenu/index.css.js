import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledMobileMenu = styled(motion.nav)`
  height: 100vh;
  width: 60vw;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  background: red;

  padding: 2rem;

  background: ${({ theme }) => theme.colors.secound};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    display: none;
  }
`;
export const StyledMobileMenuItem = styled(motion.div)`
  font-size: clamp(1rem, 5vw, 1.8rem);
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.first};

  @media screen and (orientation: landscape) {
    font-size: clamp(1rem, 4vw, 1.5rem);
  }
`;
export const StyledCloseIcon = styled(motion.img)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  height: 1.2rem;
  width: 1.2rem;
  cursor: pointer;
`;
