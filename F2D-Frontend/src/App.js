import "./App.css";
import Home from "./components/Home";
// import Login from "./components/authentication/Login_farmer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Farmerauth from "./components/Farmerauth";
import Buyerauth from "./components/Buyerauth";
import Buyerlogin from "./components/authorization/Buyer/Buyerlogin";
import Buyersignup from "./components/authorization/Buyer/Buyersignup";
import Farmersignup from "./components/authorization/Farmer/Farmersignup";
import Farmerlogin from "./components/authorization/Farmer/Farmerlogin";
import FAQ from "./components/FAQ/FAQ";
import Farmer_Account from "./components/FarmerContent/Farmer_Account";
import Farmer_Order from "./components/FarmerContent/Farmer_Order";
import Farmer_Product from "./components/FarmerContent/Farmer_Product";


// import Signup from "./components/authentication/Signup";

function App() {
    return (
      <Router>
        <Navbar/>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/farmer_auth" element={<Farmerauth/>} />
            <Route exact path="/buyer_auth" element={<Buyerauth/>} />
            <Route exact path="/Buyerlogin" element={<Buyerlogin/>} />
            <Route exact path="/Buyersignup" element={<Buyersignup />} />
            <Route exact path="/Farmerlogin" element={<Farmerlogin/>} />
            <Route exact path="/FarmerContent" element={<Farmer_Account/>} />
            <Route exact path="/Farmersignup" element={<Farmersignup />} />
            <Route exact path="/Faq" element={<FAQ/>} />
            <Route exact path="/FarmerOrder" element={<Farmer_Order/>} />
            <Route exact path="/FarmerProduct" element={<Farmer_Product/>} />
          </Routes>
        </div>
        <Footer/>
      </Router>
  );
}

export default App;
