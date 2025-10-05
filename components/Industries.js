'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Scale, DollarSign, Heart, Building, Sparkles as SparklesIcon, ChevronRight, ArrowUpRight, Wrench } from 'lucide-react'

export default function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [hoveredCard, setHoveredCard] = useState(null)

  const industries = [
    {
      icon: Scale,
      title: 'Legal',
      shortDesc: 'Streamline client interactions and case management',
      description: 'Voice Agents handle client intake calls and consultations with natural conversation flow. Automations manage appointment scheduling, case updates, and document collection workflows. Chatbots provide 24/7 legal information and qualification while maintaining strict confidentiality and compliance standards.',
      applications: [
        'Automated client intake & qualification',
        'Appointment scheduling & reminders',
        'Case status updates & notifications',
        'Document collection automation',
        'Legal consultation booking',
        'Multi-language client support'
      ],
      metrics: { efficiency: '75%', response: '24/7', satisfaction: '4.9/5' },
      gradient: 'from-amber-500 to-yellow-500',
      glowColor: 'emerald'
    },
    {
      icon: DollarSign,
      title: 'Finance',
      shortDesc: 'Intelligent financial operations & client service',
      description: 'Voice Agents conduct account inquiries and personalized financial advisory calls with clients. Automations streamline payment processing, loan applications, and compliance documentation. Chatbots deliver instant account information, transaction alerts, and fraud detection notifications ensuring regulatory compliance.',
      applications: [
        'Account inquiry automation',
        'Payment processing & reminders',
        'Fraud detection alerts',
        'Investment advisory support',
        'Loan application processing',
        'Compliance documentation'
      ],
      metrics: { accuracy: '99.2%', processing: '85%', fraud: '-60%' },
      gradient: 'from-green-500 to-emerald-500',
      glowColor: 'blue'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      shortDesc: 'Compassionate patient care & operational excellence',
      description: 'Voice Agents manage patient appointment scheduling and prescription refill requests with empathy. Automations handle post-treatment follow-ups, insurance verification, and care coordination. Chatbots provide HIPAA-compliant symptom triage, health reminders, and instant medical information access.',
      applications: [
        'Patient appointment scheduling',
        'Prescription refill automation',
        'Post-treatment follow-ups',
        'Symptom triage & routing',
        'Insurance verification',
        'Health reminder notifications'
      ],
      metrics: { availability: '24/7', wait: '-80%', adherence: '+45%' },
      gradient: 'from-red-500 to-pink-500',
      glowColor: 'pink'
    },
    {
      icon: Building,
      title: 'Real Estate',
      shortDesc: 'Accelerate property sales & client engagement',
      description: 'Voice Agents qualify leads and schedule property viewings with prospective buyers around the clock. Automations manage follow-ups, market updates, and tenant inquiries efficiently. Chatbots provide instant property information, neighborhood details, and answer common real estate questions 24/7.',
      applications: [
        'Lead qualification & scoring',
        'Property tour scheduling',
        'Instant property information',
        'Follow-up automation',
        'Market update notifications',
        'Tenant inquiry management'
      ],
      metrics: { leads: '+120%', conversion: '65%', response: '<1min' },
      gradient: 'from-blue-500 to-cyan-500',
      glowColor: 'blue'
    },
    {
      icon: SparklesIcon,
      title: 'Wellness & Beauty',
      shortDesc: 'Personalized experiences & seamless booking',
      description: 'Voice Agents handle appointment bookings and personalized service consultations with care. Automations manage membership renewals, post-service follow-ups, and loyalty programs seamlessly. Chatbots recommend treatments, answer product questions, and provide instant booking confirmations to build lasting client relationships.',
      applications: [
        'Automated booking & rescheduling',
        'Personalized treatment recommendations',
        'Membership management',
        'Post-service follow-ups',
        'Product recommendation engine',
        'Loyalty program automation'
      ],
      metrics: { bookings: '+90%', retention: '88%', revenue: '+55%' },
      gradient: 'from-purple-500 to-pink-500',
      glowColor: 'emerald'
    },
    {
      icon: Wrench,
      title: 'Home Services',
      shortDesc: 'HVAC, Plumbing & service excellence',
      description: 'Voice Agents handle emergency calls, service requests, and appointment scheduling for HVAC and plumbing needs. Automations manage dispatch coordination, follow-up reminders, and maintenance schedules efficiently. Chatbots provide instant quotes, troubleshooting guidance, and 24/7 emergency service routing.',
      applications: [
        'Emergency service call routing',
        'Automated appointment scheduling',
        'Maintenance reminder system',
        'Instant quote generation',
        'Dispatch coordination',
        'Follow-up & satisfaction surveys'
      ],
      metrics: { response: '<5min', bookings: '+85%', satisfaction: '4.8/5' },
      gradient: 'from-orange-500 to-red-500',
      glowColor: 'pink'
    }
  ]

  return (
    <section className="services noise" ref={ref} id="industries">
      <div className="services-bg">
        <div className="gradient-mesh" />
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <div className="section-badge">
            <SparklesIcon size={16} />
            <span>Industries We Serve</span>
          </div>
          <h2 className="section-title">
            Tailored <span className="gradient-text">AI Solutions</span>
            <br />For Your Industry
          </h2>
          <p className="section-subtitle">
            Discover how our AI voice agents, intelligent automation, and custom chatbots
            are transforming businesses across diverse industries with specialized solutions
            designed for your unique challenges.
          </p>
        </motion.div>

        <div className="services-grid">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className={`service-card glass ${hoveredCard === index ? 'hovered' : ''}`}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -8 }}
            >
              <div className="card-header">
                <motion.div
                  className={`service-icon glow-${industry.glowColor}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <industry.icon size={28} />
                </motion.div>
                <div className="service-header-text">
                  <h3 className="service-title">{industry.title}</h3>
                  <p className="service-short-desc">{industry.shortDesc}</p>
                </div>
              </div>

              <p className="service-description">{industry.description}</p>

              <div className="service-metrics">
                {Object.entries(industry.metrics).map(([key, value]) => (
                  <div key={key} className="metric">
                    <span className="metric-value gradient-text">{value}</span>
                    <span className="metric-label">{key}</span>
                  </div>
                ))}
              </div>

              <div className="service-features">
                {industry.applications.map((application, idx) => (
                  <motion.div
                    key={idx}
                    className="feature-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: (index * 0.15) + (idx * 0.08) + 0.5 }}
                  >
                    <ChevronRight size={14} />
                    <span>{application}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="service-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Solutions</span>
                <ArrowUpRight size={16} />
              </motion.button>

              <div className={`card-glow glow-${industry.glowColor}`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="stats-showcase"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="stats-content glass">
            <h3 className="stats-title">Delivering Results Across <span className="gradient-text">All Sectors</span></h3>
            <div className="stats-grid">
              <div className="stat-item">
                <motion.div
                  className="stat-number gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.2 }}
                >
                  6+
                </motion.div>
                <div className="stat-label">Industries Served</div>
              </div>
              <div className="stat-item">
                <motion.div
                  className="stat-number gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.3 }}
                >
                  95%
                </motion.div>
                <div className="stat-label">Client Retention</div>
              </div>
              <div className="stat-item">
                <motion.div
                  className="stat-number gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.4 }}
                >
                  Custom
                </motion.div>
                <div className="stat-label">Tailored Solutions</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
