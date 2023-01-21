import "./App.css";
import Footer from "./Footer/Footer";

import Homepageroutes from "./Homepage/Routes/homepageroutes";
import Navbar from "./Navbar/Navbar";
import AllRoutes from "./pages/AllRoutes";



function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Homepageroutes />
      {/* <Homepageroutes /> */}

      {/* Navigation bar here */}
      <Footer />
    </div>
  );
}

export default App;
