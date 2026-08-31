import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 4000)
  }

  return (
    <section className="py-5" id="contact">
      <div className="container-xxl py-5">
        <motion.div
          className="col-12 d-flex flex-column text-center justify-content-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white">CONTACT ME</h2>
          <h5 className="text-white fw-normal py-2 fst-italic">
            Interested if I'd be the right fit for your team? Fill in this form and I will respond within 24-48 hours.
          </h5>
        </motion.div>

        <motion.div
          className="row pt-4 mt-5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="col-12">
            {submitted ? (
              <motion.div
                className="alert alert-success text-center p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <h5>Thank you!</h5>
                <p className="mb-0">Your message has been sent to Rishav Raj.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Enter Name*"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="floatingInput">Enter Name*</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="floatingEmail"
                        placeholder="Enter Email*"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="floatingEmail">Enter Email*</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Enter Phone*"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="floatingPassword">Enter Phone*</label>
                    </div>
                  </div>

                  <div className="form-floating col-lg-6">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingMessage"
                      style={{ height: '205px' }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="floatingMessage" className="px-4">Enter Message*</label>
                  </div>

                  <div className="col-12 mt-5 d-flex justify-content-center">
                    <motion.button
                      className="btn btn-lg btn-outline-light px-5"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      SEND MESSAGE
                    </motion.button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
