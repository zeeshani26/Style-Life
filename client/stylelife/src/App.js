import PaymentPage from "./Add To Cart/PaymentPage/PaymentPage";
import "./App.css";
import Footer from "./Footer/Footer";

import Homepageroutes from "./Homepage/Routes/homepageroutes";
import Navbar from "./Navbar/Navbar";

import AllRoutes from "./Pages/AllRoutes";


import AdminHome from "./Pages/Admin/AdminHome";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Homepageroutes /> */}
      {/* <Homepageroutes /> */}
      {/* Navigation bar here */}
      {/* <Footer /> */}


      <Navbar />
      <Homepageroutes />

      <Footer />
    </div>
  );
}

export default App;
