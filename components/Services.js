'use client'
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Phone, Bot, TrendingUp, Zap, Brain, Shield, ChevronRight, ArrowUpRight, Sparkles } from 'lucide-react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    {
      icon: Phone,
      title: 'AI Voice Agents',
      shortDesc: 'Human-like conversations that convert',
      description: 'Deploy sophisticated AI voice agents that handle customer interactions with natural conversation flow, reducing response times by 90% while maintaining personalization.',
      features: [
        'Natural Language Understanding',
        'Multi-language Support (50+ languages)',
        'Emotional Intelligence Detection',
        'Real-time Sentiment Analysis',
        'Custom Voice Cloning',
        'Advanced Call Analytics'
      ],
      metrics: { accuracy: '98.5%', response: '<200ms', satisfaction: '4.8/5' },
      gradient: 'from-emerald-500 to-cyan-500',
      glowColor: 'emerald'
    },
    {
      icon: Bot,
      title: 'Intelligent Automation',
      shortDesc: 'End-to-end process automation',
      description: 'Transform your workflows with AI-powered automation that learns, adapts, and optimizes operations autonomously, eliminating manual tasks and reducing operational costs.',
      features: [
        'Smart Process Mining',
        'Predictive Task Scheduling',
        'API-First Integration',
        'Self-Learning Algorithms',
        'Exception Handling',
        'Compliance Automation'
      ],
      metrics: { efficiency: '85%', savings: '$2.3M', uptime: '99.9%' },
      gradient: 'from-blue-500 to-purple-500',
      glowColor: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Intelligence',
      shortDesc: 'Data-driven growth acceleration',
      description: 'Leverage AI-powered marketing intelligence to identify high-value prospects, optimize campaigns in real-time, and deliver personalized experiences at scale.',
      features: [
        'Predictive Lead Scoring',
        'Dynamic Content Optimization',
        'Cross-Channel Attribution',
        'Behavioral Segmentation',
        'Campaign ROI Optimization',
        'Automated A/B Testing'
      ],
      metrics: { conversion: '340%', roi: '12x', engagement: '+180%' },
      gradient: 'from-pink-500 to-orange-500',
      glowColor: 'pink'
    }
  ]

  const capabilities = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Advanced ML models that continuously learn and improve from your data'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC2, GDPR, and CCPA compliance'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Sub-second response times with 99.9% uptime guarantee'
    }
  ]

  return (
    <section className="services noise" ref={ref} id="services">
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
            <Sparkles size={16} />
            <span>Our Solutions</span>
          </div>
          <h2 className="section-title">
            Cutting-Edge <span className="gradient-text">AI Solutions</span>
            <br />Built for Enterprise Scale
          </h2>
          <p className="section-subtitle">
            Transform your business with our comprehensive AI platform that combines
            voice intelligence, automation, and predictive analytics to deliver
            unprecedented results and operational efficiency.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-card glass ${hoveredCard === index ? 'hovered' : ''}`}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -8 }}
            >
              <div className="card-header">
                <motion.div
                  className={`service-icon glow-${service.glowColor}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon size={28} />
                </motion.div>
                <div className="service-header-text">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-short-desc">{service.shortDesc}</p>
                </div>
              </div>

              <p className="service-description">{service.description}</p>

              <div className="service-metrics">
                {Object.entries(service.metrics).map(([key, value]) => (
                  <div key={key} className="metric">
                    <span className="metric-value gradient-text">{value}</span>
                    <span className="metric-label">{key}</span>
                  </div>
                ))}
              </div>

              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="feature-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: (index * 0.2) + (idx * 0.1) + 0.5 }}
                  >
                    <ChevronRight size={14} />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="service-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <ArrowUpRight size={16} />
              </motion.button>

              <div className={`card-glow glow-${service.glowColor}`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="capabilities-section"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="capabilities-title">Built on Advanced Technology</h3>
          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="capability-card glass"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <capability.icon size={24} className="capability-icon" />
                <h4 className="capability-title">{capability.title}</h4>
                <p className="capability-description">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="stats-showcase"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="stats-content glass">
            <h3 className="stats-title">Trusted by <span className="gradient-text">500+</span> Leading Companies</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <motion.div
                  className="stat-number gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.4 }}
                >
                  10M+
                </motion.div>
                <div className="stat-label">AI Interactions</div>
              </div>
              <div className="stat-item">
                <motion.div
                  className="stat-number gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.5 }}
                >
                  85%
                </motion.div>
                <div className="stat-label">Cost Reduction</div>
              </div>
              <div className="stat-item">
                <motion.div
                  className="stat-number gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.6 }}
                >
                  24/7
                </motion.div>
                <div className="stat-label">Availability</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}