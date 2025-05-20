import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import ScrollToTop from './components/ScrollToTop';
import ServicesSection from './components/ServicesSection';
import Commitment from './components/Commitment';
import Testimonial from './components/TestimonialSection'
import Price from './components/PricingSection'
import Barbers from './components/BarbersSection'
import Contact from './components/ContactSection'
import BarbershopGallery from './components/BarbershopGallery';
import Footer from './components/Footer';
import CTASection from './components/CTASection';

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <ScrollToTop />
      <ServicesSection />
      <Commitment />
      <Testimonial />
      <Price />
      <BarbershopGallery />
      <Barbers />
      <Contact />
      <CTASection />
      <Footer />
    </>
  );
};

export default App;
