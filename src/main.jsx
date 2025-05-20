import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './AboutUs.css';
import './ServicesSection.css';

// ✅ Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// ✅ Import Bootstrap JS (optional, for dropdowns/modals/tooltips)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
