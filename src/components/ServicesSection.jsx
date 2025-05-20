import React from 'react';
import '../ServicesSection.css'; 
import { FaCut, FaUserTie, FaSpa } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section id="services" className="py-5 bg-dark text-white">
      <div className="container text-center">
        <p className="text-warning fw-medium mb-2">Premium Grooming</p>
        <h2 className="fw-bold section-heading">Our Barber Services</h2>
        <p className="w-50 mx-auto" style={{ color:'#71717b' }}>
          Professional barbering services to keep you looking sharp for everyday confidence or special occasions.
        </p>

        <div className="row mt-5">
          {/* Haircuts */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-light p-3 rounded-4">
              <div className="icon-wrapper mb-3">
                <FaCut size={40} />
              </div>
              <h5 className="fw-bold">Haircuts</h5>
              <p>
                Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.
              </p>
              <ul className="small text-start ps-3">
                <li>Classic Cuts</li>
                <li>Modern Styles</li>
              </ul>
            </div>
          </div>

          {/* Beard Services */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-light p-3 rounded-4">
              <div className="icon-wrapper mb-3">
                <FaUserTie size={40} />
              </div>
              <h5 className="fw-bold">Beard Services</h5>
              <p>
                Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves.
              </p>
              <ul className="small text-start ps-3">
                <li>Beard Trims</li>
                <li>Beard Shaping</li>
              </ul>
            </div>
          </div>

          {/* Premium Services */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-light p-3 rounded-4">
              <div className="icon-wrapper mb-3">
                <FaSpa size={40} />
              </div>
              <h5 className="fw-bold">Premium Services</h5>
              <p>
                Enhance your look with our premium services including expert hair coloring, scalp treatments, and styling for special occasions.
              </p>
              <ul className="small text-start ps-3">
                <li>Hair Coloring</li>
                <li>Scalp Treatments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
