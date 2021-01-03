import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledImgBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledImg = styled(motion.img)`
  position: absolute;
  width: 100%;
`;
