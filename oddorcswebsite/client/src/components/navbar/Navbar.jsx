import React, { useState } from "react";
import "./navbar.css";

import NavLogo from "../../assets/NavLogo.png";


const Navbar = ({ open, handleOpen }) => {

  return (
    <nav>
      <div className={`nav${open ? " open" : " close"}`}>
      <div className="link-container">
          <a onClick={handleOpen} href="#team">Team</a>
          <a onClick={handleOpen} href="#clans">Clans</a>
          <a onClick={handleOpen} href="#podcast">Podcast</a>
         
        <div className="oddlogo">
        <a><img src={NavLogo} alt="nav" ></img></a>
        </div>
          <a onClick={handleOpen} href="#roadmap">Roadmap</a>
          <a onClick={handleOpen} href="#FAQ">FAQ</a>
          <a onClick={handleOpen} href="#collab">Collab</a>
          </div>
        </div>
      <div className="nav-btn" onClick={handleOpen}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
