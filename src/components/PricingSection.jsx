import React from 'react';
import '../PricingSection.css'; // Create this for any custom CSS
import { FaCheckCircle } from 'react-icons/fa';

const PricingSection = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container text-center">
        <p className="text-warning fw-medium mb-2">Quality Barbering at Fair Prices</p>
        <h2 className="fw-bold position-relative d-inline-block underline-heading">Our Service Prices</h2>
        <p className="mt-2 mb-5" style={{ color:'#71717b' }}>
          Choose from our range of professional barbering services.
        </p>

        <div className="row justify-content-center">
          {/* Classic Services */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-dark text-light border border-warning rounded-4 p-4 position-relative">
              <span className="badge bg-warning text-dark position-absolute top-0 start-50 translate-middle-x mt-n3 px-3 py-1 fw-semibold rounded-pill">
                Most Popular
              </span>
              <h5 className="fw-bold mt-4 mb-3 text-start border-bottom border-secondary pb-2">Classic Services</h5>
              <div className="text-start mb-3">
                <h3 className="fw-bold text-warning d-inline">$25</h3><span className="text-muted"> /mo</span>
              </div>
              <ul className="list-unstyled text-start">
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Men’s Haircut</li>
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Kids Haircut (12 & under)</li>
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Senior Haircut (65+)</li>
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Military/First Responder Cut</li>
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Basic Beard Trim</li>
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Neck & Line Cleanup (between cuts)</li>
              </ul>
              <button className="btn btn-warning mt-3 w-100 fw-semibold">Book Now</button>
            </div>
          </div>

          {/* Premium Services */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-dark text-light border border-secondary rounded-4 p-4">
              <h5 className="fw-bold mb-3 text-start border-bottom border-secondary pb-2">Premium Services</h5>
              <div className="text-start mb-3">
                <h3 className="fw-bold text-warning d-inline">$35</h3><span className="text-muted"> /mo</span>
              </div>
              <ul className="list-unstyled text-start">
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Haircut & Beard Combo</li>
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Hot Towel Shave</li>
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Full Beard Shaping & Design</li>
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Color Camo (Gray Blending)</li>
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Hair & Scalp Treatment</li>
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Head Shave with Hot Towel</li>
              </ul>
              <button className="btn btn-outline-secondary mt-3 w-100 fw-semibold">Book Now</button>
            </div>
          </div>

          {/* Packages */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-dark text-light border border-secondary rounded-4 p-4">
              <h5 className="fw-bold mb-3 text-start border-bottom border-secondary pb-2">Packages</h5>
              <div className="text-start mb-3">
                <h3 className="fw-bold text-warning d-inline">$50</h3><span className="text-muted"> /mo</span>
              </div>
              <ul className="list-unstyled text-start">
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />The Works (Cut, Shave, Treatment)</li>
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Father & Son Combo</li>
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Groom’s Package</li>
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Monthly Membership (2 cuts/mo)</li>
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />First-Time Client Special</li>
                <li class="text-white"><FaCheckCircle className="text-warning me-2" />Loyalty Program</li>
              </ul>
              <button className="btn btn-outline-secondary mt-3 w-100 fw-semibold">Inquire</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
