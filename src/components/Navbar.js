import React from "react";
import {Link} from "react-router-dom";
import "../assets/css/nav.css";

const Header = () => {
    return (
        <nav>
        <div class="nav-wrapper" id="nav">
        <h1>Burger King</h1>
            <Link to="/" className="active">Home</Link>
            {" | "}
            <Link to="/about" className="active">About Us</Link>
            {" | "}
            <Link to="/contact" className="active">Contact Us</Link>
            </div>
        </nav>
    );
};

export default Header;
