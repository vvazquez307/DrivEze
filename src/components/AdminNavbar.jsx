import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

function AdminNavbar()
{

    const token = localStorage.getItem("token");

    function logout()
    {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return(
        
        <div id="navbar">
            <div id="nav-title">
                <Link to="/admin">
                    <img src="/images/DrivEze-lite.png" alt="logo" className="navLogo"/>
                </Link>
            </div>
            <div id="nav-buttons">
                <Link to="/adminInventory">
                    <button id="button">Inventory</button>
                </Link>
                <Link to="/adminHubs">
                    <button id="button">Hubs</button>
                </Link>
                <Link to="/adminCars">
                    <button id="button">Cars</button>
                </Link>
                <button id="button"onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default AdminNavbar;