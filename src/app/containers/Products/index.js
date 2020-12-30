import React from "react";
import { v4 as uuidv4 } from "uuid";
import { StyledProducts } from "./index.css";
import Product from "../../components/Product";
import LgImg from "../../assets/images/soap_1.JPG";

const DATA = [
  {
    id: uuidv4(),
    color: { bck: "#E5C24D", txt: "#2B2A32" },
    invert: false,
    title: "mydło cytrusowe",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    imgs: {
      sm: LgImg,
      md: LgImg,
      lg: LgImg,
    },
  },
  {
    id: uuidv4(),
    color: { bck: "#D587C4", txt: "#2B2A32" },
    invert: true,
    title: "mydło malinowe",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    imgs: {
      sm: LgImg,
      md: LgImg,
      lg: LgImg,
    },
  },
  {
    id: uuidv4(),
    color: { bck: "#492B1D", txt: "#FFFFFF" },
    invert: false,
    title: "mydło czekoladowe",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    imgs: {
      sm: LgImg,
      md: LgImg,
      lg: LgImg,
    },
  },
];

const Products = () => {
  return (
    <StyledProducts>
      {DATA.map((data) => (
        <Product key={data.id} data={data} />
      ))}
    </StyledProducts>
  );
};

export default Products;
