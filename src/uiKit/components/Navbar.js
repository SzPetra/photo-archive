import React from "react";
import {Link, Outlet} from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div className="navbar-container">
                <Link to="/">Kezdőoldal</Link>
                <Link to="/photo/add_new">Új kép hozzáadása</Link>
                <p>További műveletek</p>
            </div>

            <Outlet />
        </>

    );
};

export default Navbar;