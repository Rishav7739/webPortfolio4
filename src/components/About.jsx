import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const timelineItems = [
  {
    id: 1,
    year: 'Aug 2025 – Jun 2027 | Pursuing',
    title: 'Master of Computer Applications (AI)',
    subtitle: 'Gautam Buddha University, Greater Noida, UP',
    desc: 'Relevant Coursework: DBMS, OS, AI, ML, Software Development, Data Analytics, Database Administration, and IT Consulting.',
    img: '/images/about-img-1.jpg',
    reverse: true
  },
  {
    id: 2,
    year: 'Aug 2022 – Jun 2025',
    title: 'Bachelor of Computer Applications',
    subtitle: 'Tilka Manjhi Bhagalpur University, Bihar',
    desc: 'Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Object-Oriented Programming (OOP), Computer Networks.',
    img: '/images/about-img-2.jpg',
    reverse: false
  },
  {
    id: 3,
    year: '2021 – 2022',
    title: 'Senior Secondary Education (12th)',
    subtitle: 'Mirjanhat High School, Bihar',
    desc: 'Focus on Science, Mathematics, and analytical problem-solving skills.',
    img: '/images/about-img-3.jpg',
    reverse: true
  },
  {
    id: 4,
    year: 'Secondary',
    title: 'Matriculation (10th)',
    subtitle: 'Chauhan Public School',
    desc: 'Secondary education foundation with academic excellence.',
    img: '/images/about-img-4.jpg',
    reverse: false
  }
]

const About = () => {
  return (
    <section className="container py-5" id="about">
      <motion.div
        className="row mt-4 py-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="col-12 d-flex flex-column text-center">
          <h2>ABOUT & EDUCATION</h2>
          <h5 className="text-secondary fw-normal py-2 fst-italic">
            Full Stack Developer and Computer Science Postgraduate (MCA AI).
          </h5>
        </div>
      </motion.div>

      {timelineItems.map((item) => (
        <motion.div
          key={item.id}
          className={`row ${item.reverse ? 'flex-row-reverse flex-md-row' : 'justify-content-md-end'} mt-5 pt-5`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {item.reverse ? (
            <>
              <div className="col-9 col-md-5 text-md-end">
                <span className="badge bg-primary mb-2">{item.year}</span>
                <h4 className="fw-bold">{item.title}</h4>
                <h6 className="text-secondary mb-2">{item.subtitle}</h6>
                <p>{item.desc}</p>
              </div>
              <div className="col-3 col-md-2 img text-center">
                <motion.img
                  className="rounded-circle border border-5 border-dark-subtle img-fluid"
                  src={item.img}
                  alt={item.title}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </>
          ) : (
            <>
              <div className="col-3 col-md-2 img text-center">
                <motion.img
                  className="rounded-circle border border-5 border-dark-subtle img-fluid"
                  src={item.img}
                  alt={item.title}
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="col-9 col-md-5">
                <span className="badge bg-primary mb-2">{item.year}</span>
                <h4 className="fw-bold">{item.title}</h4>
                <h6 className="text-secondary mb-2">{item.subtitle}</h6>
                <p>{item.desc}</p>
              </div>
            </>
          )}
        </motion.div>
      ))}

      <motion.div
        className="row justify-content-md-center mt-5 pt-5"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="col-3 col-md-2 d-flex justify-content-center hire-text">
          <motion.h2
            className="h4 d-flex justify-content-center align-items-center bg-primary text-white rounded-circle border border-5 border-dark-subtle"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Your<br />Next<br />Hire
          </motion.h2>
        </div>
      </motion.div>
    </section>
  )
}

export default About
