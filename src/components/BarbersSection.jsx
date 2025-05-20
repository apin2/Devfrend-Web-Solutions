import React from 'react';
import '../BarbersSection.css';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const barbers = [
  {
    name: 'Jason Rodriguez',
    title: 'Owner & Master Barber',
    description: 'With over 15 years of experience, Jason founded PMC Barbershop to bring premium men’s grooming services to Denton. Specializing in classic cuts and...',
    image: '/barber1.jpg',
    socials: ['instagram', 'facebook'],
  },
  {
    name: 'Marcus Williams',
    title: 'Senior Barber',
    description: 'Marcus brings 8 years of experience to PMC Barbershop. His expertise in fades, beard sculpting, and precision lineup work has earned him a loyal...',
    image: '/barber2.jpeg',
    socials: ['instagram', 'facebook'],
  },
  {
    name: 'Terrence Jackson',
    title: 'Barber & Stylist',
    description: 'Terrence specializes in modern men’s styling, textured cuts, and hair designs. With his creative approach and technical skill, he excels at transforming your look...',
    image: '/barber3.jpg',
    socials: ['instagram', 'facebook'],
  },
];

const BarberCard = ({ barber }) => (
  <div className="card h-100 bg-dark text-white rounded-4 overflow-hidden">
    <img src={barber.image} className="card-img-top" alt={barber.name} />
    <div className="card-body text-center">
      <h5 className="fw-bold">{barber.name}</h5>
      <p className="mb-2 fw-semibold">{barber.title}</p>
      <p className="small">{barber.description}</p>
      <div className="d-flex justify-content-center gap-3 mt-3">
        {barber.socials.includes('instagram') && (
          <a href="#" className="social-media-section"><FaInstagram /></a>
        )}
        {barber.socials.includes('facebook') && (
          <a href="#" className="social-media-section"><FaFacebookF /></a>
        )}
      </div>
    </div>
  </div>
);

const BarbersSection = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container text-center">
        <p className="text-warning fw-medium">Expert Stylists</p>
        <h2 className="fw-bold d-inline-block position-relative underline-heading">
          Meet <span className="text-white">Our Barbers</span>
        </h2>
        <p className="mt-2 mb-5" style={{ color:'#71717b' }}>
          Our team of skilled barbers is dedicated to providing you with the perfect cut and grooming experience.
        </p>

        <div className="row justify-content-center g-4">
          {barbers.map((barber, idx) => (
            <div className="col-md-4" key={idx}>
              <BarberCard barber={barber} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarbersSection;
