import { Routes, Route } from "react-router-dom";
import React from "react";
import Homepage from "../Homepage";
import Products from "../../Components/Products";
import SingleProduct from "../../Components/SingleProduct";
import PaymentPage from "../../Add To Cart/PaymentPage/PaymentPage";
import AdminHome from "../../Pages/Admin/AdminHome";
import ErrorPage from "../../Components/ErrorPage";
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
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="*" element={<ErrorPage />} />
        
      </Routes>
    </>
  );
};

export default Homepageroutes;
