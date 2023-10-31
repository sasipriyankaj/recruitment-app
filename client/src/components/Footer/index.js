import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <footer style={{ paddingTop: 75 }}>
      <Navbar
        className="shadow-sm justify-content-center"
        bg="light"
        variant="light"
        fixed="bottom"
      >
      </Navbar>
    </footer>
  );
};

export default Footer;
