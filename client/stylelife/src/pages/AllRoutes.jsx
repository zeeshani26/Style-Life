import React from "react";
import { Routes, Route } from "react-router-dom";

import Products from "../Components/Products";

// import Products from "../Components/Products";
import SignIn from "../Login/SignIn/SignIn";
import SignUp from "../Login/SignUp/SignUp";

import SingleProduct from "../Components/SingleProduct";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={"Home Component"} /> */}
        {/* <Route
          path="/restro"
          element={<Products category='restro' />}

        /> */}
        {/* <Route path="/restro" element={<Products category="restro" />} /> */}
        <Route
          path="/healthproducts"
          element={"<Products category=`health` />"}
        />
        <Route path="/spaproducts" element={"<Products category=`spa` />"} />
        <Route path="/ProductDetails" element={"SIngle Product Page"} />

        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        
        <Route path="/restro" element={<Products category="restro" />} />
        <Route path="/health" element={<Products category="health" />} />
        <Route path="/spa" element={<Products category="spa" />} />
        <Route path="/ProductDetails" element={<SingleProduct />} />

      </Routes>
    </div>
  );
};

export default AllRoutes;
