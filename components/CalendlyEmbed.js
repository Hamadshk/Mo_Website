'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Video } from 'lucide-react'

export default function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="calendly-section" id="booking">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-badge">
            <Calendar size={16} />
            <span>Schedule Your Demo</span>
          </div>
          <h2 className="section-title">
            Book Your <span className="gradient-text">Free Consultation</span>
          </h2>
          <p className="section-subtitle">
            Choose a time that works best for you. Our AI specialists are ready to discuss
            how Agent Corti can transform your business operations.
          </p>
        </motion.div>

        <div className="calendly-features">
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="feature-icon">
              <Clock size={24} />
            </div>
            <h3 className="feature-title">30-Minute Session</h3>
            <p className="feature-description">
              Quick and focused consultation to understand your needs
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="feature-icon">
              <Video size={24} />
            </div>
            <h3 className="feature-title">Video Call</h3>
            <p className="feature-description">
              Face-to-face virtual meeting via Google Meet or Zoom
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="feature-icon">
              <Calendar size={24} />
            </div>
            <h3 className="feature-title">Flexible Scheduling</h3>
            <p className="feature-description">
              Choose from available time slots that fit your schedule
            </p>
          </motion.div>
        </div>

        <motion.div
          className="calendly-widget-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/agentcorti/30min?hide_gdpr_banner=1&primary_color=d4af37"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>
      </div>

      <style jsx>{`
        .calendly-section {
          padding: var(--space-4xl) 0 var(--space-3xl);
          position: relative;
          background: var(--bg-primary);
          overflow: hidden;
        }

        .calendly-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            ellipse 80% 50% at 50% 0%,
            rgba(212, 175, 55, 0.08),
            transparent
          );
          pointer-events: none;
        }

        .container {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 var(--container-padding);
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-3xl);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          background: var(--bg-card);
          border: 1px solid var(--border-accent);
          padding: var(--space-sm) var(--space-md);
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: var(--space-lg);
          backdrop-filter: blur(10px);
        }

        .section-badge :global(svg) {
          color: var(--accent-primary);
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: var(--space-md);
          font-family: 'Space Grotesk', sans-serif;
          color: var(--text-primary);
        }

        .gradient-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        .calendly-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-lg);
          margin-bottom: var(--space-3xl);
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 16px;
          padding: var(--space-lg);
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .feature-card:hover {
          border-color: rgba(212, 175, 55, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.15);
        }

        .feature-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(30, 58, 138, 0.15));
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 12px;
          color: var(--accent-primary);
          margin: 0 auto var(--space-md);
        }

        .feature-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-xs);
        }

        .feature-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .calendly-widget-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 24px;
          padding: var(--space-md);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(20px);
        }

        .calendly-inline-widget {
          border-radius: 16px;
          overflow: hidden;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .calendly-section {
            padding: var(--space-3xl) 0 var(--space-2xl);
          }

          .section-title {
            font-size: clamp(2rem, 6vw, 2.5rem);
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .calendly-features {
            grid-template-columns: 1fr;
            gap: var(--space-md);
          }

          .calendly-widget-wrapper {
            padding: var(--space-sm);
          }

          .calendly-inline-widget {
            height: 600px !important;
          }
        }

        @media (max-width: 480px) {
          .calendly-widget-wrapper {
            padding: var(--space-xs);
            border-radius: 16px;
          }

          .calendly-inline-widget {
            height: 550px !important;
          }

          .feature-card {
            padding: var(--space-md);
          }
        }
      `}</style>
    </section>
  )
}
