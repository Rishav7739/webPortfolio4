import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container py-4">
        <div className="row align-items-center gy-5">
          {/* Left Text Column */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="hero-badge">
                <i className="fa-solid fa-graduation-cap"></i> MCA (AI) Student
                @ Gautam Buddha University
              </div>

              <h1 className="hero-title">
                Hi, I'm <span>Rishav Raj</span>
              </h1>

              <p className="hero-subtitle">
                Full Stack Developer & Computer Science Postgraduate with
                hands-on experience building scalable web applications using
                React.js, Node.js, Express.js & MongoDB.
              </p>

              <div className="hero-location">
                <i className="fa-solid fa-location-dot text-primary"></i>{" "}
                Greater Noida, UP , India
              </div>

              <div className="hero-btn-group">
                <motion.a
                  href="#portfolio"
                  className="primary-action-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  EXPLORE PROJECTS{" "}
                  <i className="fa-solid fa-arrow-right ms-1"></i>
                </motion.a>

                <motion.a
                  href="#cv"
                  className="secondary-action-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  VIEW CURRICULUM VITAE
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Framed Image Column with Subtle Rotating & Floating Animation */}
          <div className="col-lg-5">
            <motion.div
              className="hero-frame-wrapper"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="hero-img-card"
                animate={{
                  y: [0, -12, 0],
                  rotate: [-2.5, 2.5, -2.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05, rotate: 0 }}
              >
                <img
                  src="/images/hero-portrait.jpg"
                  alt="Rishav Raj"
                  className="hero-portrait-img"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
