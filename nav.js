import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import img from "./img/Flipkart-logo.jpg";
import Home from "./Home";
import ADDCARD from "./addcard";
import "./top.css";
import img1 from "./img/cropped-blue-shopping-cart-icon-29-1.webp";

function Nav() {
    return (
        <BrowserRouter>
            <div className="top">
                <div className="topin">
                    <div>
                        <Link to="/">
                            <img src={img} alt="logo" />
                        </Link>
                    </div>

                    <div>
                        <Link to="/buycard">
                            <img src={img1} alt="cart" />
                        </Link>
                    </div>
                </div>
            </div>

            <Routes>
                {/* <Route path="/" element={<Layout />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="addcard" element={<ADDCARD />} >
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Nav;
