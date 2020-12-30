import React from "react";
import styled from "styled-components";
import Home from "./containers/Home";
import Products from "./containers/Products";
import Gallery from "./containers/Gallery";
import Contact from "./containers/Contact";

const StyledApp = styled.main`
  max-width: 1920px;
  min-height: 100vh;
`;

const App = () => {
  return (
    <StyledApp>
      <Home />
      <Products />
      <Gallery />
      <Contact />
    </StyledApp>
  );
};
export default App;
/*
        <Home />
      <Products />
        <Gallery />
      <Contact />
      */
