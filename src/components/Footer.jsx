import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={textStyle}>&copy; 2023 Mon App React. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  bottom: '0',
  width: '97%',
  height:"160px"
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const textStyle = {
  fontSize: '14px',
};

export default Footer;
