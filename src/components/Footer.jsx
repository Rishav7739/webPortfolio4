import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-lg-8">
            <h3 className="footer-brand-name">Rishav Raj</h3>
            <p className="footer-tagline">
              Full Stack Developer & MCA Student — Gautam Buddha University, Noida
            </p>

            {/* Quick Navigation Links */}
            <ul className="footer-nav-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#portfolio">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#cv">Curriculum Vitae</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            {/* Social Media Links */}
            <ul className="footer-social-icons">
              <li>
                <motion.a
                  href="https://github.com/Rishav7739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="GitHub Profile"
                  whileHover={{ scale: 1.15 }}
                >
                  <i className="fa-brands fa-github"></i>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://www.linkedin.com/in/rishav-raj-7a7953287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="LinkedIn Profile"
                  whileHover={{ scale: 1.15 }}
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://www.instagram.com/nomadrishu?igsh=aWE5am0xbXNleDBr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="Instagram Profile"
                  whileHover={{ scale: 1.15 }}
                >
                  <i className="fa-brands fa-instagram"></i>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="mailto:rishuraj9798@gmail.com"
                  className="footer-social-btn"
                  title="Send Email"
                  whileHover={{ scale: 1.15 }}
                >
                  <i className="fa-solid fa-envelope"></i>
                </motion.a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="row align-items-center footer-bottom-border gy-3 text-center text-md-start">
          <div className="col-md-8">
            <p className="footer-copyright">
              Copyright © {new Date().getFullYear()} Rishav Raj. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <button className="back-to-top-btn" onClick={scrollToTop}>
              Back to Top <i className="fa-solid fa-arrow-up ms-1"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
