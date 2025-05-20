import React from 'react';
import heroImg from '../assets/barber-team.jpg'; // Replace with actual image
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="bg-dark text-white py-5">
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between" style={{ paddingTop: '80px' }}>
        <div className="mb-5 mb-lg-0 pe-lg-5">
          <p className="text-warning fw-semibold">Premium Fama Barber Shop and Beauty Salon in Denton</p>
          <h1 className="display-5 fw-bold">Classic Cuts, Modern Style</h1>
          <h2 className="fw-bold text-warning">Premium Barber Shop</h2>
          <p className="mt-4" style={{ color:'#71717b'}}>
            At FAMA Barber Shop, we combine traditional barbering techniques with modern styling to give you the perfect look.
            Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.
          </p>

          <div className="my-3">
            <button className="btn btn-outline-light rounded-pill px-3 me-3">
              <FaMapMarkerAlt className="me-2" />
              Denton, TX
            </button>
          </div>

          <div className="d-flex flex-column flex-md-row gap-3">
            <button className="btn btn-outline-light d-flex align-items-center">
              <FaPhoneAlt className="me-2" />
              Our Services
            </button>
            <button className="btn btn-warning text-dark fw-semibold">
              Book Now
            </button>
          </div>
        </div>

        <div>
          <img src={heroImg} alt="Barber Team" className="img-fluid rounded shadow" style={{ maxWidth: '600px' }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
