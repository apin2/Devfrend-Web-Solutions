import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return visible ? (
    <button
      onClick={scrollToTop}
      className="btn btn-warning position-fixed"
      style={{
        bottom: '20px',
        right: '20px',
        borderRadius: '50%',
        padding: '12px',
        zIndex: 1000,
      }}
    >
      <FaArrowUp />
    </button>
  ) : null;
};

export default ScrollToTop;
