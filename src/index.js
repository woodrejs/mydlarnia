import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { ThemeProvider } from "styled-components";
import "./index.css";

require("dotenv").config();

const theme = {
  colors: {
    first: "#FFFFFF",
    secound: "#2B2A32",
    third: "#D587C4",
    fourth: "#E5C24D",
    fifth: "#492B1D",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
