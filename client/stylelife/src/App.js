import "./App.css";
import Homepageroutes from "./Homepage/Routes/homepageroutes";
import Navbar from "./Navbar/Navbar";
import AdminHome from "./Pages/Admin/AdminHome";
import { AddHealth } from "./Redux/Admin/AdminTypes";

function App() {
  return (
    <div className="App">
      <Navbar/>
<Homepageroutes/>
    </div>
  );
}

export default App;
