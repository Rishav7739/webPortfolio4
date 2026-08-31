import React from 'react'
import { motion } from 'framer-motion'
import './Portfolio.css'

const portfolioItems = [
  {
    id: 1,
    title: 'School4U Resource Portal',
    tech: 'Node.js · Express.js · MongoDB · EJS',
    img: '/images/ecommerce.png',
    desc: 'Full-stack property rental platform serving CRUD-based listings for 50+ properties following MVC architecture. Implemented Joi validation & RESTful routes.'
  },
  {
    id: 2,
    title: 'Portfolio | Rishav Raj',
    tech: 'React.js · Framer Motion · Bootstrap 5',
    img: '/images/react.jpg',
    desc: 'Responsive, modern UI portfolio displaying skills, projects, education, experience, and contact information with smooth motion animations.'
  },
  {
    id: 3,
    title: 'E-commerce Web Platform',
    tech: 'JavaScript · HTML5 · CSS3',
    img: '/images/landing-page.jpg',
    desc: 'Online shopping website featuring product catalogs, responsive grid layout, and interactive shopping cart management.'
  },
  {
    id: 4,
    title: 'Calculator Application',
    tech: 'JavaScript · HTML5 · CSS3',
    img: '/images/calculator-app.jpg',
    desc: 'Interactive mathematical utility app built with clean UI logic and responsive user experience.'
  },
  {
    id: 5,
    title: 'Blog & Resource Portal',
    tech: 'Node.js · Express · PHP · HTML',
    img: '/images/blog.jpg',
    desc: 'Content creation and article publishing platform with categorization, user comments, and dynamic routing.'
  },
  {
    id: 6,
    title: 'Data Visualization Engine',
    tech: 'Python · Plotly · Data Analytics',
    img: '/images/python.jpg',
    desc: 'Data analytics charts and computational visualizations analyzing trend metrics.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

const Portfolio = () => {
  return (
    <section className="container py-5" id="portfolio">
      <motion.div
        className="row mt-4 py-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="col-12 d-flex flex-column text-center justify-content-center">
          <h2>PROJECTS & PORTFOLIO</h2>
          <h5 className="text-secondary fw-normal py-2 fst-italic">
            Featured full-stack, frontend, and software engineering projects.
          </h5>
        </div>
      </motion.div>

      <motion.div
        className="row mt-4 mx-0 justify-content-center align-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {portfolioItems.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6 card-wrapper">
            <motion.div
              className="card mt-4 h-100 shadow-sm"
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 280, damping: 18 }}
            >
              <div className="portfolio-img-container overflow-hidden position-relative" style={{ height: '220px' }}>
                <motion.img
                  src={item.img}
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: 'cover' }}
                  alt={item.title}
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="card-body text-center d-flex flex-column justify-content-between p-4">
                <div>
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <span className="badge bg-primary mb-3 text-wrap">{item.tech}</span>
                  <p className="card-text text-secondary small">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Portfolio
