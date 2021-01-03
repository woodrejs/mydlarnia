import React, { useRef, useState, useEffect } from "react";
import { StyledButton, StyledSpan } from "./index.css";
import { ButtonVariants } from "../../utils/motion";

const Button = ({ children, click, className }) => {
  const ref = useRef(null);
  const [btnHeight, setBtnHeight] = useState(0);

  useEffect(() => setBtnHeight(ref.current.offsetHeight), []);

  window.addEventListener("orientationchange", () =>
    setBtnHeight(ref.current.offsetHeight)
  );

  return (
    <StyledButton
      ref={ref}
      className={className}
      onClick={click}
      variants={ButtonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <StyledSpan height={btnHeight} children={children} />
    </StyledButton>
  );
};

export default Button;
