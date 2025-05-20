import React from 'react';
import aboutImg from '../assets/barbershop.jpg'; // Replace with actual image path
import { FaQuoteLeft } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-dark text-white py-5">
      <div id='about-us-top' className="container text-center mb-4">
        <p className="text-warning fw-semibold story-section">Our Story</p>
        <h2 className="fw-bold section-heading">About FAMA Barber Shop</h2>
        <p className="mx-auto" style={{ maxWidth: '700px',color:'#71717b' }}>
          Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX.
          Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
        </p>
      </div>

      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4">
        {/* Image with badge */}
        <div className="position-relative">
          <img src={aboutImg} alt="Shop Exterior" className="img-fluid rounded shadow" style={{ width:'1500px' }} />
          <div className="position-absolute bottom-0 end-0 bg-warning text-dark fw-bold px-3 py-1 rounded m-3">
            5+ years
          </div>
        </div>

        {/* Right Content */}
        <div className="text-start text-muted">
          <div className="border-start border-warning ps-3 mb-3" style={{ color:'#71717b' }}>
            Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver
            exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
          </div>
          <div className=" p-3 rounded shadow-sm about-content" style={{ backgroundColor:'#292929',color:'#71717b' }}>
            <p>
            <FaQuoteLeft className="me-2 text-warning" />
            <span style={{ color:'#71717b' }}>
              We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle.
            </span>
            <hr className="mt-3 mb-0 border-warning opacity-50" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
