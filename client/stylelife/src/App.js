import "./App.css";
import Footer from "./Footer/Footer";

import Homepageroutes from "./Homepage/Routes/homepageroutes";
import Navbar from "./Navbar/Navbar";

import AllRoutes from "./pages/AllRoutes";


import AdminHome from "./Pages/Admin/AdminHome";
import AllRoutes from "./Pages/AllRoutes";



function App() {
  return (
    <div className="App">

      <Navbar />
      <AllRoutes />
      <Homepageroutes />
      {/* <Homepageroutes /> */}

      {/* Navigation bar here */}
      <Footer />

      {/* <Navbar /> */}
      {/* <Homepageroutes /> */}

      {/* Navigation bar here */}
      {/* <AllRoutes /> */}
       <AllRoutes />

    </div>
  );
}

export default App;
