import React from 'react'
import { motion } from 'framer-motion'
import './EducationCV.css'

const EducationCV = () => {
  return (
    <section className="container py-5" id="cv">
      <motion.div
        className="row mt-4 py-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="col-12 d-flex flex-column text-center">
          <h2>CURRICULUM VITAE</h2>
          <h5 className="text-secondary fw-normal py-2 fst-italic">
            Category-wise breakdown of qualifications, experience, skills, and background.
          </h5>
        </div>
      </motion.div>

      <div className="row g-4 mt-2">
        {/* Category 1: Profile & Contact Details */}
        <div className="col-lg-4">
          <motion.div
            className="cv-category-card text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src="/images/profile-img.jpg"
              alt="Rishav Raj"
              className="img-fluid rounded-circle border border-4 border-primary mb-3 shadow"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              whileHover={{ scale: 1.05 }}
            />
            <h3 className="h4 fw-bold mb-1">Rishav Raj</h3>
            <p className="cv-item-subtitle fw-semibold mb-3">Full Stack Developer</p>

            <div className="text-start mt-4">
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-phone text-primary me-3 fs-5"></i>
                <div>
                  <small className="text-muted d-block">Phone</small>
                  <strong>+91 7739849571</strong>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-envelope text-primary me-3 fs-5"></i>
                <div>
                  <small className="text-muted d-block">Email</small>
                  <strong>rishuraj9798@gmail.com</strong>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-map-marker-alt text-primary me-3 fs-5"></i>
                <div>
                  <small className="text-muted d-block">Location</small>
                  <strong>Greater Noida, UP</strong>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <a
                href="https://github.com/Rishav7739"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary rounded-circle p-2"
                style={{ width: '42px', height: '42px' }}
                title="GitHub"
              >
                <i className="fa-brands fa-github fs-5"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rishav-raj-7a7953287/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary rounded-circle p-2"
                style={{ width: '42px', height: '42px' }}
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in fs-5"></i>
              </a>
              <a
                href="https://www.instagram.com/nomadrishu?igsh=aWE5am0xbXNleDBr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary rounded-circle p-2"
                style={{ width: '42px', height: '42px' }}
                title="Instagram"
              >
                <i className="fa-brands fa-instagram fs-5"></i>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Category 2: Professional Summary & Education */}
        <div className="col-lg-8">
          <div className="d-flex flex-column gap-4">
            {/* Professional Summary Block */}
            <motion.div
              className="cv-category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="cv-category-header">
                <div className="cv-category-icon">
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <h3 className="cv-category-title">Professional Summary</h3>
              </div>
              <p className="mb-0 leading-relaxed">
                Full Stack Developer and Computer Science Postgraduate (MCA, 2027) with hands-on experience building scalable web applications using <strong>React.js, Node.js, Express.js, and MongoDB</strong>. Strong foundation in <strong>Data Structures & Algorithms, Object-Oriented Programming, and Database Management Systems</strong>. Seeking a Software Engineer role to build high-performance, production-grade software.
              </p>
            </motion.div>

            {/* Education Category Block */}
            <motion.div
              className="cv-category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="cv-category-header">
                <div className="cv-category-icon">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <h3 className="cv-category-title">Education</h3>
              </div>

              <div className="cv-item">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-1">
                  <h4 className="cv-item-title mb-0">Master of Computer Applications (AI)</h4>
                  <span className="badge bg-primary">Aug 2025 – Jun 2027 | Pursuing</span>
                </div>
                <div className="cv-item-subtitle mb-2">Gautam Buddha University, Greater Noida, UP</div>
                <p className="cv-item-meta mb-0">
                  <strong>Coursework:</strong> DBMS, Operating Systems, AI, Machine Learning, Software Development, Database Administration, and IT Consulting.
                </p>
              </div>

              <div className="cv-item mb-0">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-1">
                  <h4 className="cv-item-title mb-0">Bachelor of Computer Applications</h4>
                  <span className="badge bg-secondary">Aug 2022 – Jun 2025</span>
                </div>
                <div className="cv-item-subtitle mb-2">Tilka Manjhi Bhagalpur University, Bihar</div>
                <p className="cv-item-meta mb-0">
                  <strong>Coursework:</strong> Data Structures & Algorithms, DBMS, Operating Systems, Object-Oriented Programming (OOP), Computer Networks.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Category 3: Key Projects */}
        <div className="col-lg-6">
          <motion.div
            className="cv-category-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="cv-category-header">
              <div className="cv-category-icon">
                <i className="fa-solid fa-folder-open"></i>
              </div>
              <h3 className="cv-category-title">Featured Projects</h3>
            </div>

            <div className="cv-item">
              <h4 className="cv-item-title mb-1">School4U Resource Portal</h4>
              <div className="cv-item-subtitle mb-2">Node.js · Express.js · MongoDB · EJS</div>
              <ul className="cv-item-meta ps-3 mb-0">
                <li>Built a full-stack property rental platform serving CRUD-based listings for 50+ sample properties following MVC architecture.</li>
                <li>Implemented complete CRUD operations with Joi server-side validation.</li>
                <li>Integrated MongoDB via Mongoose with 10+ RESTful API routes.</li>
              </ul>
            </div>

            <div className="cv-item mb-0">
              <h4 className="cv-item-title mb-1">Portfolio | Rishav Raj</h4>
              <div className="cv-item-subtitle mb-2">React.js · Framer Motion · Bootstrap 5</div>
              <ul className="cv-item-meta ps-3 mb-0">
                <li>Responsive, modern UI portfolio with clean design and smooth animations.</li>
                <li>Showcases technical skills, projects, curriculum vitae, and contact form.</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Category 4: Technical Skill Set */}
        <div className="col-lg-6">
          <motion.div
            className="cv-category-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="cv-category-header">
              <div className="cv-category-icon">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <h3 className="cv-category-title">Technical Skillset</h3>
            </div>

            <div className="mb-3">
              <h6 className="fw-bold mb-2">Programming Languages</h6>
              <div>
                <span className="cv-skill-pill">Java</span>
                <span className="cv-skill-pill">JavaScript (ES6+)</span>
                <span className="cv-skill-pill">Python</span>
              </div>
            </div>

            <div className="mb-3">
              <h6 className="fw-bold mb-2">Frontend Stack</h6>
              <div>
                <span className="cv-skill-pill">React.js</span>
                <span className="cv-skill-pill">Next.js</span>
                <span className="cv-skill-pill">Bootstrap 5</span>
                <span className="cv-skill-pill">HTML5 & CSS3</span>
                <span className="cv-skill-pill">EJS</span>
              </div>
            </div>

            <div className="mb-3">
              <h6 className="fw-bold mb-2">Backend & Databases</h6>
              <div>
                <span className="cv-skill-pill">Node.js</span>
                <span className="cv-skill-pill">Express.js</span>
                <span className="cv-skill-pill">REST APIs</span>
                <span className="cv-skill-pill">MySQL</span>
                <span className="cv-skill-pill">MongoDB</span>
              </div>
            </div>

            <div className="mb-0">
              <h6 className="fw-bold mb-2">Tools & DevOps / Core CS</h6>
              <div>
                <span className="cv-skill-pill">Git & GitHub</span>
                <span className="cv-skill-pill">VS Code</span>
                <span className="cv-skill-pill">IntelliJ IDEA</span>
                <span className="cv-skill-pill">DSA</span>
                <span className="cv-skill-pill">OOP</span>
                <span className="cv-skill-pill">DBMS</span>
                <span className="cv-skill-pill">OS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EducationCV
