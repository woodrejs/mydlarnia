import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.third};
  z-index: 1;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSpan = styled.span`
  font-size: ${({ height }) => height * 0.28}px;
`;
