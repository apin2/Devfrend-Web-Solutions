import React from 'react';
import '../BarbershopGallery.css'; // optional for custom styling

const BarbershopGallery = () => {
  return (
    <section id='GallerySection' className="bg-dark text-white py-5 text-center">
      <div className="container">
        <p className="text-warning text-uppercase mb-1">Our Work & Shop</p>
        <h2 className="fw-bold mb-3 underline-heading">
          Our <span className="pb-1">Barbershop Gallery</span>
        </h2>
        <p className="mb-4" style={{ color:'#71717b' }}>
          Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
        </p>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-sm-6 col-md-4">
            <img src="/barber2.jpeg" alt="Gallery 1" className="img-fluid rounded shadow-sm w-100" />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <img src="/barber1.jpg" alt="Gallery 2" className="img-fluid rounded shadow-sm w-100" />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <img src="/barber3.jpg" alt="Gallery 3" className="img-fluid rounded shadow-sm w-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarbershopGallery;
