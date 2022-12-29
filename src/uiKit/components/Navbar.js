import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div className="navbar-container">
                <p>Új kép hozzáadása</p>
                <p>További műveletek</p>
            </div>

            <Outlet />
        </>

    );
};

export default Navbar;