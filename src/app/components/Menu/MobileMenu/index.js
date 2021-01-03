import React from "react";
import { menuItemVriant, MenuVariants } from "../../../utils/motion";
import CloseIcon from "../../../assets/icons/close.png";
import {
  StyledMobileMenu,
  StyledMobileMenuItem,
  StyledCloseIcon,
} from "./index.css";

const MobileMenu = ({ DATA, click, isMenuOpen }) => {
  const handleScroll = (target) =>
    document.getElementById(`${target}`).scrollIntoView();
  return (
    <StyledMobileMenu
      variants={MenuVariants}
      initial="initial"
      animate={isMenuOpen ? "animate" : null}
    >
      <StyledCloseIcon
        src={CloseIcon}
        alt=" close_icon"
        onClick={click}
        variants={menuItemVriant}
        whileHover="hover"
      />

      {DATA.map(({ id, name, hash }, index) => (
        <StyledMobileMenuItem
          key={`${id}Mobile`}
          children={name}
          onClick={() => handleScroll(hash)}
          variants={menuItemVriant}
          initial="initial"
          animate={isMenuOpen ? "animate" : null}
          whileHover="hover"
          custom={index}
        />
      ))}
    </StyledMobileMenu>
  );
};

export default MobileMenu;
