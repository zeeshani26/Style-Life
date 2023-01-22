import { Routes, Route } from "react-router-dom";
import React from "react";
import Homepage from "../Homepage";
import Products from "../../components/Products";
import SingleProduct from "../../components/SingleProduct";

const Homepageroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/resturent"
          element={<Products category="restro" />}
        ></Route>
        <Route path="/spa" element={<Products category="spa" />}></Route>
        <Route path="/health" element={<Products category="health" />}></Route>
        <Route path="/ProductDetails" element={<SingleProduct />} />
      </Routes>
    </>
  );
};

export default Homepageroutes;
