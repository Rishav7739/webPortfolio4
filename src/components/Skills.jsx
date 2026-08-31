import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const skillsCategories = [
  {
    id: 1,
    icon: 'fa-code',
    title: 'Languages & Core CS',
    techList: ['Java', 'JavaScript', 'Python', 'Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks']
  },
  {
    id: 2,
    icon: 'fa-laptop-code',
    title: 'Frontend & UI',
    techList: ['React.js', 'Next.js', 'Bootstrap 5', 'HTML5', 'CSS3', 'EJS', 'Framer Motion', 'Responsive Design']
  },
  {
    id: 3,
    icon: 'fa-server',
    title: 'Backend, DB & DevOps',
    techList: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code', 'IntelliJ IDEA']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const Skills = () => {
  return (
    <section className="container py-5" id="skills">
      <motion.div
        className="row mt-4 py-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="col-12 d-flex flex-column text-center justify-content-center">
          <h2>TECHNICAL SKILLS</h2>
          <h5 className="text-secondary fw-normal py-2 fst-italic">
            Core programming languages, frameworks, databases, and computer science fundamentals.
          </h5>
        </div>
      </motion.div>

      <motion.div
        className="row d-flex justify-content-center mx-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillsCategories.map((cat) => (
          <motion.div
            key={cat.id}
            className="card mt-4 col-lg-4 col-md-6 p-4 m-2 flex-grow-1"
            style={{ maxWidth: '380px' }}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="d-flex align-items-center mb-3">
              <i className={`text-white bg-primary d-flex align-items-center justify-content-center fs-3 rounded-circle fa-solid ${cat.icon} me-3`} style={{ width: '60px', height: '60px' }}></i>
              <h3 className="h5 mb-0 fw-bold">{cat.title}</h3>
            </div>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {cat.techList.map((skill, idx) => (
                <span key={idx} className="badge bg-secondary text-wrap p-2 px-3 fw-normal" style={{ fontSize: '0.85rem' }}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
