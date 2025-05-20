import React from 'react';
import '../ServicesSection.css'; 
import { FaCut, FaUserTie, FaSpa } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section id="services" className="py-5 bg-dark text-white">
      <div className="container text-center">
        <p className="text-warning fw-medium mb-2">Our Commitment</p>
        <h2 className="fw-bold section-heading">Why Choose PMC Barbershop?</h2>
        <p className="w-50 mx-auto" style={{ color:'#71717b' }}>
          What makes us the premier barbershop in Denton, TX.
        </p>

        <div className="row mt-5">
          {/* Haircuts */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-light p-3 rounded-4">
              <div className="icon-wrapper mb-3 commit">
                <span>User</span>
              </div>
              <h5 className="fw-bold">Expert Barbers</h5>
              <p>
                Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men's styling.
              </p>
            </div>
          </div>

          {/* Beard Services */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-light p-3 rounded-4">
              <div className="icon-wrapper mb-3 commit">
                <span>Scissors</span>
              </div>
              <h5 className="fw-bold">Premium Tools & Products</h5>
              <p>
                We use only high-quality barbering tools and premium men's grooming products to ensure the best results for your hair and skin.
              </p>
            </div>
          </div>

          {/* Premium Services */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-light p-3 rounded-4">
              <div className="icon-wrapper mb-3 commit">
                <span>Home</span>
              </div>
              <h5 className="fw-bold">Classic Barbershop Experience</h5>
              <p>
                Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
