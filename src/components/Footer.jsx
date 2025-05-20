import React from 'react';
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import logo from '../assets/react.svg';

const Footer = () => {
  return (
    <footer id='Footer' className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row text-start">

          {/* Logo and Description */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-white mb-3">
              <img src={logo} alt="Company Logo" height="30" className="me-2" />
              FAMA
            </h5>
            <p className="" style={{ color:'#71717b' }}>Classic cuts with modern style</p>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-outline-warning btn-sm rounded-circle">
                <FaInstagram />
              </a>
              <a href="#" className="btn btn-outline-warning btn-sm rounded-circle">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold text-white">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className=" text-decoration-none">Home</a></li>
              <li><a href="#about-us" className=" text-decoration-none">About</a></li>
              <li><a href="#services" className=" text-decoration-none">Services</a></li>
              <li><a href="#GallerySection" className=" text-decoration-none">Gallery</a></li>
              <li><a href="#ContactSection" className=" text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-white">Contact Us</h6>
            <p className=" mb-1">
              <FaMapMarkerAlt className="me-2" />
              518 Acme St unit 101, Denton, TX 76205, United States
            </p>
            <p className=" mb-0">
              <FaPhoneAlt className="me-2" />
              +1 940 808 1569
            </p>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-white">Newsletter</h6>
            <p className="">Subscribe to our newsletter to receive updates and news.</p>
            <form>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                />
              </div>
              <button type="submit" className="btn btn-warning w-100 fw-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="border-secondary" />
        <div className="d-flex justify-content-between align-items-center pb-3">
          <small className="">&copy; 2025 FAMA Barber Shop. All rights reserved.</small>
          <div>
            <a href="#" className=" me-3 text-decoration-none">Home</a>
            <a href="#about-us" className=" me-3 text-decoration-none">About</a>
            <a href="#services" className=" text-decoration-none">Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
