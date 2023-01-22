import PaymentPage from "./Add To Cart/PaymentPage/PaymentPage";
import "./App.css";
import Footer from "./Footer/Footer";

import Homepageroutes from "./Homepage/Routes/homepageroutes";
import Navbar from "./Navbar/Navbar";

import AllRoutes from "./Pages/AllRoutes";


import AdminHome from "./Pages/Admin/AdminHome";

function App() {
  return (
    <div className="App">

      {/* <Navbar /> */}
      {/* <AllRoutes /> */}
      {/* <Homepageroutes /> */}
      {/* <Homepageroutes /> */}
      {/* Navigation bar here */}
      {/* <Footer /> */}


      <Navbar />
      <AllRoutes />
      <Homepageroutes />
      {/* <Homepageroutes /> */}

      <Footer />
      {/* <Navbar /> */}
      {/* <Homepageroutes /> */}
       <AdminHome/>
       {/* <AllRoutes /> */}

       <AllRoutes />
    </div>
  );
}

export default App;
