'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Mail, Phone, MessageCircle, Calendar, Users, CheckCircle, Sparkles, Send, Globe, Clock, Shield } from 'lucide-react'
import CalendlyEmbed from './CalendlyEmbed'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const nextStep = () => {
    if (formStep < 3) setFormStep(formStep + 1)
  }

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@aisolutions.com',
      description: 'Get a response within 2 hours',
      color: 'green'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Available Mon-Fri, 9AM-6PM EST',
      color: 'blue'
    },
    {
      icon: Calendar,
      label: 'Schedule',
      value: 'Book a Call',
      description: 'Free 30-minute consultation',
      color: 'purple'
    }
  ]

  const benefits = [
    'Free initial consultation',
    'Custom solution proposal',
    '30-day money-back guarantee',
    'Dedicated success manager'
  ]

  return (
    <section className="contact noise" ref={ref} id="contact">
      <div className="contact-bg">
        <div className="gradient-mesh" />
        <motion.div
          className="floating-orb orb-1"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="floating-orb orb-2"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <div className="section-badge">
            <Sparkles size={16} />
            <span>Book a slot Today</span>
          </div>
          <h2 className="section-title">
            Ready to <span className="gradient-text">Transform</span>
            <br />Your Business?
          </h2>
          <p className="section-subtitle">
            Join 500+ companies already using our AI solutions to drive growth,
            reduce costs, and deliver exceptional customer experiences.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="info-title">Let's discuss your project</h3>
            <p className="info-description">
              Our AI specialists are ready to help you identify opportunities,
              design custom solutions, and implement technology that drives real results.
            </p>

            <div className="contact-methods">
              {contactMethods.map((method, index) => {
                const isScheduleMethod = method.label === 'Schedule';
                const Component = isScheduleMethod ? motion.a : motion.div;
                const extraProps = isScheduleMethod ? {
                  href: "https://calendly.com/agentcorti/30min",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  style: { cursor: 'pointer' }
                } : {};

                return (
                  <Component
                    key={index}
                    className={`contact-method glass method-${method.color}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    {...extraProps}
                  >
                    <div className="method-icon">
                      <method.icon size={20} />
                    </div>
                    <div className="method-content">
                      <div className="method-label">{method.label}</div>
                      <div className="method-value">{method.value}</div>
                      <div className="method-description">{method.description}</div>
                    </div>
                  </Component>
                );
              })}
            </div>

            <div className="benefits-section">
              <h4 className="benefits-title">What you'll get:</h4>
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="benefit-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <CheckCircle size={16} />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="trust-indicators">
              <div className="trust-item">
                <Globe size={18} />
                <span>Global presence in 25+ countries</span>
              </div>
              <div className="trust-item">
                <Clock size={18} />
                <span>Average 2-hour response time</span>
              </div>
              <div className="trust-item">
                <Shield size={18} />
                <span>SOC2 & GDPR compliant</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="form-wrapper glass">
              <div className="form-header">
                <div className="step-indicator">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`step ${formStep >= step ? 'active' : ''}`}
                    >
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
                <h3 className="form-title">
                  {formStep === 1 && 'Tell us about yourself'}
                  {formStep === 2 && 'Project details'}
                  {formStep === 3 && 'Final details'}
                </h3>
              </div>

              <form className="contact-form">
                <AnimatePresence mode="wait">
                  {formStep === 1 && (
                    <motion.div
                      key="step1"
                      className="form-step"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>
                    </motion.div>
                  )}

                  {formStep === 2 && (
                    <motion.div
                      key="step2"
                      className="form-step"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="form-group">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="form-input"
                        >
                          <option value="">Select a Service</option>
                          <option value="voice-agents">AI Voice Agents</option>
                          <option value="automation">Intelligent Automation</option>
                          <option value="marketing">Marketing Intelligence</option>
                          <option value="custom">Custom AI Solution</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="form-input"
                        >
                          <option value="">Project Budget</option>
                          <option value="10k-25k">$10k - $25k</option>
                          <option value="25k-50k">$25k - $50k</option>
                          <option value="50k-100k">$50k - $100k</option>
                          <option value="100k+">$100k+</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="form-input"
                        >
                          <option value="">Timeline</option>
                          <option value="asap">ASAP (1-2 months)</option>
                          <option value="quarter">This Quarter (3 months)</option>
                          <option value="half-year">6 months</option>
                          <option value="year">1+ years</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {formStep === 3 && (
                    <motion.div
                      key="step3"
                      className="form-step"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Tell us about your project goals, challenges, and what success looks like..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className="form-input form-textarea"
                          rows="6"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="form-navigation">
                  {formStep > 1 && (
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      className="btn-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Back
                    </motion.button>
                  )}

                  {formStep < 3 ? (
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      className="btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Next Step
                      <ArrowRight size={16} />
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      className="btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message
                      <Send size={16} />
                    </motion.button>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="cta-content glass">
            <Users className="cta-icon" size={48} />
            <h3 className="cta-title">
              Join <span className="gradient-text">500+</span> Leading Companies
            </h3>
            <p className="cta-subtitle">
              Already transforming their business with our AI solutions
            </p>
            <div className="cta-buttons">
              <motion.a
                href="https://calendly.com/agentcorti/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={18} />
                <span>Book a slot</span>
              </motion.a>
              <motion.button
                className="cta-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={18} />
                <span>Live Chat</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Calendly Embedded Widget */}
      <CalendlyEmbed />

      <div className="container">
        {/* Simple Footer */}
        <motion.div
          className="simple-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <img
                  src="/images/Mo_Logo.png"
                  alt="Mo Logo"
                  className="footer-logo-img"
                />
                <span className="footer-brand">Agent Corti</span>
              </div>
              <p className="footer-tagline">Transforming Business with Intelligence</p>
            </div>
            <div className="footer-center">
              <a href="/privacy-policy" className="footer-privacy-link">
                Privacy Policy
              </a>
            </div>
            <div className="footer-right">
              <p className="footer-copyright">© 2024 Agent Corti. All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .simple-footer {
          margin-top: 80px;
          padding: 40px 0 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-center {
          display: flex;
          align-items: center;
        }

        .footer-privacy-link {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          padding: 8px 16px;
          border: 1px solid rgba(255, 215, 0, 0.3);
          border-radius: 6px;
          background: rgba(255, 215, 0, 0.05);
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
        }

        .footer-privacy-link:hover {
          color: #FFD700;
          background: rgba(255, 215, 0, 0.1);
          border-color: rgba(255, 215, 0, 0.5);
          transform: translateY(-1px);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-logo-img {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          object-fit: cover;
        }

        .footer-brand {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
        }

        .footer-tagline {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .footer-copyright {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        @media (max-width: 768px) {
          .simple-footer {
            padding: 32px 0 32px;
          }

          .footer-content {
            flex-direction: column;
            gap: 20px;
            text-align: center;
            padding: 0 16px;
          }

          .footer-left {
            align-items: center;
          }

          .footer-center {
            order: 2;
          }

          .footer-right {
            order: 3;
          }
        }
      `}</style>
    </section>
  )
}