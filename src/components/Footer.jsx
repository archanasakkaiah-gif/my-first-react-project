
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-3 mt-4 border-top">
      <p className="text-muted mb-0">
        © {new Date().getFullYear()} Admin Dashboard. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
