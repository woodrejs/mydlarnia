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
  font-size: clamp(0.6rem, 1.2vw, 0.9rem);
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    display: flex;
  }
`;
const StyledHamburger = styled.img`
  height: clamp(1.1rem, 4vw, 1.6rem);

  @media screen and (orientation: landscape) and (min-width: 800px) {
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
