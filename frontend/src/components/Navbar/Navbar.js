import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { LuUser } from "react-icons/lu";
import { PiBag } from "react-icons/pi";
import logo from "../../assets/kanallogo.png";
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [showSearchSidebar, setShowSearchSidebar] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Hamburger Icon */}
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <AiOutlineClose /> : <FaBars />}
        </button>

        {/* Mobile Sidebar */}
        {isMobile && (
          <>
            <div className="mobile-sidebar">
              <button className="close-sidebar-btn" onClick={() => setIsMobile(false)}>
                <AiOutlineClose />
              </button>
              <Link to="/" className="sidebar-link" onClick={() => setIsMobile(false)}>Home</Link>
              <Link to="/calendarView" className="sidebar-link" onClick={() => setIsMobile(false)}>Calendar View</Link>
              <Link to="/shop" className="sidebar-link" onClick={() => setIsMobile(false)}>Shop</Link>
            </div>
            <div className="mobile-overlay" onClick={() => setIsMobile(false)}></div>
          </>
        )}

        {/* Desktop Navigation */}
        <div className="navbar-left">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/calendarView" className="nav-item">Calendar View</Link>
          <Link to="/shop" className="nav-item">Shop</Link>
        </div>

        {/* Logo Center */}
        <div className="navbar-center">
          <img className="imglogo" src={logo} alt="Kanal-Logo" />
        </div>

        {/* Right Icons */}
        <div className="navbar-right">
          <GoSearch className="nav-icon" onClick={() => setShowSearchSidebar(!showSearchSidebar)} />

        <Link to="/login" className="nav-icon-link">
        <LuUser className="nav-icon" />
        </Link>

          <Link to="/cart" className="nav-icon-link">
            <PiBag className="nav-iconBag" />
          </Link>
        </div>
      </nav>

      {/* Search Sidebar */}
      {showSearchSidebar && (
        <>
          <div className="search-sidebar">
            <button className="close-button" onClick={() => setShowSearchSidebar(false)}>
              <AiOutlineClose />
            </button>
            <h3>Suche</h3>
          </div>
          <div className="search-overlay" onClick={() => setShowSearchSidebar(false)}></div>
        </>
      )}
    </>
  );
}

export default Navbar;
