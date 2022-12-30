import React from "react";
import {Link, Outlet} from "react-router-dom";
import "../assets/navbar.css";

const Navbar = () => {

    return (
        <>
            <div className="navbar-container">
                <Link className="navbar-link"  to="/">Kezdőoldal</Link>
                <Link className="navbar-link" to="/photo/add_new">Új kép hozzáadása</Link>
                <p>További műveletek</p>
            </div>

            <Outlet />
        </>

    );
};

export default Navbar;