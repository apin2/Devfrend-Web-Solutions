import React from 'react';
import '../ContactSection.css';

const ContactSection = () => {
  return (
    <section id='ContactSection' className="py-5 bg-dark text-white">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-warning fw-semibold">Book Your Appointment</p>
          <h2 className="fw-bold underline-heading">Contact <span className="text-white">Us</span></h2>
          <p className="mt-2" style={{ color:'#71717b' }}>
            Ready for a fresh look? Book your appointment today or contact us for any questions.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Contact Info */}
          <div className="col-md-4">
            <div className="p-4 rounded-4 text-white">
              <div className="mb-4">
                <h6 className="fw-bold"><span className="text-warning me-2">📍</span>Address</h6>
                <p className="">518 Acme St unit 101, Denton, TX 76205, United States</p>
              </div>
              <div className="mb-4">
                <h6 className="fw-bold"><span className="text-warning me-2">📞</span>Phone</h6>
                <p className="">+1 940 808 1569</p>
              </div>
              <div className='mb-4'>
                <h6 className="fw-bold"><span className="text-warning me-2">🕒</span>Business Hours</h6>
                <p className=" mb-0">Mon–Fri: 9:00 AM – 7:00 PM</p>
                <p className=" mb-0">Sat: 9:00 AM – 5:00 PM</p>
                <p className="">Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <form className="p-4 rounded-4">
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your full name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" placeholder="Enter your phone number" />
              </div>
              <div className="mb-3">
                <label className="form-label">Service Interested In</label>
                <select className="form-select">
                  <option>Select an option</option>
                  <option>Haircut</option>
                  <option>Beard Trim</option>
                  <option>Hot Towel Shave</option>
                  <option>Combo Package</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Preferred Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Tell us about your style preferences or any questions you have"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning fw-semibold">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
