import React from "react";
import { StyledMenu, StyledMenuItem, StyledHamburger } from "./index.css";
import { menuItemVriant } from "../../../utils/motion";
import Hamburger from "../../../assets/icons/hamburger.svg";

const DeskopMenu = ({ DATA, className, click }) => {
  const handleScroll = (target) =>
    document.getElementById(`${target}`).scrollIntoView();

  return (
    <StyledMenu className={className}>
      {DATA.map(({ id, name, hash }, index) => (
        <StyledMenuItem
          key={id}
          children={name}
          onClick={() => handleScroll(hash)}
          variants={menuItemVriant}
          initial="initial"
          animate="animate"
          whileHover="hover"
          custom={index}
        />
      ))}
      <StyledHamburger
        src={Hamburger}
        alt="hamburger_menu_icon"
        onClick={click}
      />
    </StyledMenu>
  );
};
export default DeskopMenu;
