import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DeskopMenu from "./DeskopMenu";
import MobileMenu from "./MobileMenu";

const DATA = [
  {
    id: uuidv4(),
    name: "start",
    hash: "home",
  },
  {
    id: uuidv4(),
    name: "produkty",
    hash: "products",
  },
  {
    id: uuidv4(),
    name: "galeria",
    hash: "gallery",
  },
  {
    id: uuidv4(),
    name: "kontakt",
    hash: "contact",
  },
];

const Menu = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <DeskopMenu DATA={DATA} click={handleMenu} className={className} />
      <MobileMenu DATA={DATA} click={handleMenu} isMenuOpen={isMenuOpen} />
    </>
  );
};
export default Menu;
