import React from 'react';

function Footer() {
  const footerStyle = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    backgroundColor: 'blue',
    paddingTop: '25px',
    paddingBottom: '25px',
    marginBottom: '10px'
  }
  const h1Footer = {
    fontWeight: 'bold'
  }
  return (
    <div className="page-footer" style={footerStyle}>
      <h3 style={h1Footer}>Copyright:Thomas Glenn 2020</h3>
      
    </div>
  )
}

export default Footer;