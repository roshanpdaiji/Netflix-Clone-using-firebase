import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-black text-white">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Follow Us On:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div>
            <a href="https://www.facebook.com/netflix" className="me-4 text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/netflix" className="me-4 text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/netflix" className="me-4 text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/netflix" className="me-4 text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/netflix" className="me-4 text-white">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-film me-3"></i>About Netflix
                </h6>
                <p>
                  Netflix is the leading streaming service for movies, TV shows, documentaries, and more. Enjoy endless entertainment with a subscription.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Quick Links
                </h6>
                <p><a href="#!" className="text-white">Home</a></p>
                <p><a href="#!" className="text-white">Terms of Use</a></p>
                <p><a href="#!" className="text-white">Privacy</a></p>
                <p><a href="#!" className="text-white">Help Center</a></p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Support
                </h6>
                <p><a href="#!" className="text-white">Account</a></p>
                <p><a href="#!" className="text-white">FAQ</a></p>
                <p><a href="#!" className="text-white">Contact Us</a></p>
                <p><a href="#!" className="text-white">Gift Cards</a></p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Contact */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> 100 Netflix Way, Los Gatos, CA 95032, USA</p>
                <p><i className="fas fa-envelope me-3"></i> support@netflix.com</p>
                <p><i className="fas fa-phone me-3"></i> +1 800-123-4567</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links */}

        {/* Copyright */}
        <div className="text-center p-4 footer-bottom" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          © 2021 Netflix, Inc.
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  )
}

export default Footer
