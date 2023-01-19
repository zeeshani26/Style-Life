import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../components/Products";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={"Home Component"} />
        <Route path="/restro" element={<Products category="restro" />} />
        <Route
          path="/healthproducts"
          element={"<Products category=`health` />"}
        />
        <Route path="/spaproducts" element={"<Products category=`spa` />"} />
        <Route path="/ProductDetails" element={"SIngle Product Page"} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
