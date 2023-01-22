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

      <Footer />
      {/* <Navbar /> */}
      {/* <Homepageroutes /> */}
       <AdminHome/>
       <AllRoutes />
    </div>
  );
}

export default App;
