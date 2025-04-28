// src/components/layout/Footer.tsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-8 mt-auto"> {/* mt-auto pushes footer down */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© {currentYear} HealthApp Solutions. All rights reserved.</p>
        {/* Add other links like Privacy Policy, Terms of Service if needed */}
        <div className="mt-4 space-x-4">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;