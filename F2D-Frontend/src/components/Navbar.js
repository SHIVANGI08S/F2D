import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-custom ">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
          FarmToDoor
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/farmer_auth">
                  Farmer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/FarmerContent">
                  FarmerContent
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/buyer_auth">
                  Buyer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Faq">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/BuyerContent">
                  BuyerContent
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
             
              <button className="btn " type="submit">
                ContactUs
              </button>
            </form>
          </div>
        </div>
      </nav>
    
  );
};

export default Navbar;
