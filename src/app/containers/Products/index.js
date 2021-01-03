import React from "react";
import { v4 as uuidv4 } from "uuid";
import { StyledProducts } from "./index.css";
import Product from "../../components/Product";
import LgImg from "../../assets/images/soap_1.JPG";
import LGYellow from "../../assets/images/Products/yellow/yellow_740.JPG";
import LGPink from "../../assets/images/Products/pink/pink_740.JPG";
import LGBronw from "../../assets/images/Products/brown/brown_740.JPG";
import MDBronw from "../../assets/images/Products/brown/brown_1024.JPG";

const DATA = [
  {
    id: uuidv4(),
    color: { bck: "rgba(229.0, 194.0, 77.0, 0.8) ", txt: "#2B2A32" },
    invert: false,
    title: "mydło cytrusowe",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    imgs: {
      sm: LgImg,
      md: LGYellow,
      lg: LGYellow,
    },
  },
  {
    id: uuidv4(),
    color: { bck: "rgba(213.0, 135.0, 196.0, 0.8) ", txt: "#2B2A32" },
    invert: true,
    title: "mydło malinowe",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    imgs: {
      sm: LgImg,
      md: LgImg,
      lg: LGPink,
    },
  },
  {
    id: uuidv4(),
    color: { bck: "rgba(73.0, 43.0, 29.0, 0.8) ", txt: "#FFFFFF" },
    invert: false,
    title: "mydło czekoladowe",
    text:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    imgs: {
      sm: LgImg,
      md: MDBronw,
      lg: LGBronw,
    },
  },
];

const Products = () => {
  return (
    <StyledProducts id="products">
      {DATA.map((data) => (
        <Product key={data.id} data={data} />
      ))}
    </StyledProducts>
  );
};

export default Products;
