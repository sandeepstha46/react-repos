import React from 'react'

const Footer = () => {
  let footerStyle = {
    top: "90vh",
    width: "100%"
  }
  return (
    <footer className="bg-dark text-light py-5" style={footerStyle}>
      <div className="container bg-dark text-light">
        <div className='text-center'>Copyright 2022. All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer