import React from 'react';
import logo from '../assets/react.svg'; // Replace with your logo path
import { FaGlobe, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3"
      style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1050 }}
    >
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          <img src={logo} alt="Logo" height="32" className="me-2" />
          FAMA
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#about-us">About</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#GallerySection">Gallery</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#ContactSection">Contact</a></li>
          </ul>
          <div className="d-flex align-items-center gap-3">
            {/* <FaGlobe size={18} color="#fff" /> */}
            <FaPhoneAlt size={18} color="#ffc107" />
            <span className="text-white fw-semibold">+1 940 808 1569</span>
            <a href="#GallerySection" className="btn btn-warning text-white fw-semibold">Book an Appointment</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
