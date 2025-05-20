import React from 'react';

const CTASection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f5bd38', position: 'relative', overflow: 'hidden' }}>
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">Ready for a Fresh Cut?</h2>
        <p className="mx-auto mb-4" style={{ maxWidth: '700px' }}>
          Visit FAMA Barber Shop for premium men's grooming services. Our expert barbers are ready to
          give you a clean, precise cut and a relaxing barbershop experience.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-light fw-semibold px-4">Book an Appointment</button>
          <button className="btn btn-dark fw-semibold px-4">View Our Services</button>
        </div>
      </div>

      {/* Decorative circles */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          left: '-60px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.1)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-50px',
          right: '-50px',
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.1)'
        }}
      />
    </section>
  );
};

export default CTASection;
