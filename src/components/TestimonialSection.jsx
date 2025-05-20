import React from 'react';
import '../TestimonialSection.css'; // Create this file for extra styling if needed

const TestimonialSection = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container text-center">
        <p className="text-warning fw-medium mb-2">Testimonials</p>
        <h2 className="fw-bold position-relative d-inline-block underline-heading">
          What Our Clients Say
        </h2>

        <div className="row mt-5">
          {/* Testimonial 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-light rounded-4">
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="fst-italic text-white">
                  <span className="text-warning fs-4">“</span>
                  I’ve been getting my hair cut at PMC Barbershop for over 2 years now.
                  The attention to detail is unmatched, and the atmosphere is always welcoming.
                  My barber remembers exactly how I like my fade every time!
                  <span className="text-warning fs-4">”</span>
                </p>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-start border-top border-secondary">
                <span className="text-warning me-2">★★★★★</span>
                <strong className="text-white ms-2">Mike Johnson</strong>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-light rounded-4">
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="fst-italic text-white">
                  <span className="text-warning fs-4">“</span>
                  As someone who's particular about their haircut, I was nervous trying a new place.
                  The team at PMC took their time to understand what I wanted and delivered exactly that.
                  Will definitely be coming back!
                  <span className="text-warning fs-4">”</span>
                </p>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-start border-top border-secondary">
                <span className="text-warning me-2">★★★★★</span>
                <strong className="text-white ms-2">David Martinez</strong>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-light rounded-4">
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="fst-italic text-white">
                  <span className="text-warning fs-4">“</span>
                  The hot towel shave experience at PMC Barbershop is phenomenal!
                  It’s the perfect blend of old-school barbering with modern techniques.
                  My beard has never looked better.
                  <span className="text-warning fs-4">”</span>
                </p>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-start border-top border-secondary">
                <span className="text-warning me-2">★★★★★</span>
                <strong className="text-white ms-2">Chris Taylor</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
