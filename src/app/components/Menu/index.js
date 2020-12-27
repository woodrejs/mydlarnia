import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Hamburger from "../../assets/icons/hamburger.svg";

const StyledMenu = styled.nav`
  z-index: 1;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (orientation: landscape) {
    justify-content: space-between;
  }
`;
const StyledMenuItem = styled.div`
  display: none;
  font-weight: bold;
  text-transform: uppercase;
  @media screen and (orientation: landscape) {
    display: flex;
  }
`;
const StyledHamburger = styled.img`
  @media screen and (orientation: landscape) {
    display: none;
  }
`;

const DATA = [
  {
    id: uuidv4(),
    name: "start",
  },
  {
    id: uuidv4(),
    name: "oferta",
  },
  {
    id: uuidv4(),
    name: "o nas",
  },
  {
    id: uuidv4(),
    name: "kontakt",
  },
];

const Menu = ({ className }) => {
  return (
    <StyledMenu className={className}>
      {DATA.map(({ id, name }) => (
        <StyledMenuItem key={id} children={name} />
      ))}
      <StyledHamburger src={Hamburger} alt="hamburger_menu_icon" />
    </StyledMenu>
  );
};
export default Menu;
