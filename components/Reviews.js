'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Star, Quote } from 'lucide-react'

export default function Reviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Legal Advisors Group',
      review: 'The AI voice agent has transformed our client intake process. We\'ve seen a 75% reduction in missed calls and our client satisfaction scores have never been higher. Absolutely game-changing!',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager, FinTech Solutions',
      review: 'Implementing their automation suite cut our processing time by 85%. The ROI was immediate and substantial. Best investment we\'ve made in operational efficiency.',
      rating: 5,
      image: '👨‍💻'
    },
    {
      name: 'Dr. Emily Roberts',
      role: 'Medical Director, HealthCare Plus',
      review: 'Patient appointment scheduling is now seamless. The AI handles everything with such empathy and precision. Our no-show rate dropped by 60% in just 3 months!',
      rating: 5,
      image: '👩‍⚕️'
    },
    {
      name: 'David Martinez',
      role: 'Real Estate Broker, Premium Properties',
      review: 'Lead qualification is automated and incredibly accurate. We\'re closing 120% more deals because we can focus on serious buyers. This technology is the future of real estate.',
      rating: 5,
      image: '🏢'
    },
    {
      name: 'Lisa Anderson',
      role: 'Owner, Wellness & Spa Retreat',
      review: 'The booking automation and personalized follow-ups have increased our client retention to 88%. Our revenue is up 55% year-over-year. Simply outstanding service!',
      rating: 5,
      image: '💆‍♀️'
    },
    {
      name: 'James Wilson',
      role: 'Director, HVAC Services Inc',
      review: 'Emergency call routing is instant now. Our response time is under 5 minutes and customer satisfaction is at 4.8/5. The dispatch coordination alone saved us countless hours.',
      rating: 5,
      image: '🔧'
    }
  ]

  // Auto-scroll to next review every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [reviews.length])

  // Calculate visible reviews (show 3 at a time on desktop, 1 on mobile)
  const getVisibleReviews = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length
      visible.push(reviews[index])
    }
    return visible
  }

  return (
    <section className="reviews-section noise" ref={ref} id="reviews">
      <div className="reviews-bg">
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
            <Star size={16} />
            <span>Client Testimonials</span>
          </div>
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Join hundreds of businesses that have transformed their operations with our AI solutions
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="reviews-carousel-wrapper">
          <div className="reviews-carousel">
            {getVisibleReviews().map((review, index) => (
              <motion.div
                key={`${review.name}-${index}`}
                className="review-card glass"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="quote-icon">
                  <Quote size={32} />
                </div>

                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
                  ))}
                </div>

                <p className="review-text">{review.review}</p>

                <div className="review-author">
                  <div className="author-avatar">{review.image}</div>
                  <div className="author-info">
                    <h4 className="author-name">{review.name}</h4>
                    <p className="author-role">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="carousel-dots">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="reviews-stats glass"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="stat-item">
            <div className="stat-number gradient-text">500+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number gradient-text">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number gradient-text">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number gradient-text">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .reviews-section {
          position: relative;
          padding: var(--space-5xl) 0;
          overflow: hidden;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%);
        }

        .reviews-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .gradient-mesh {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at 20% 50%,
            rgba(255, 215, 0, 0.08) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 80% 50%,
            rgba(30, 58, 138, 0.1) 0%,
            transparent 50%
          );
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-lg);
        }

        .reviews-carousel-wrapper {
          margin-top: var(--space-3xl);
          margin-bottom: var(--space-3xl);
        }

        .reviews-carousel {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: var(--space-3xl);
        }

        .review-card {
          position: relative;
          padding: 40px;
          border-radius: 24px;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.2) 100%
          );
          border: 1px solid rgba(255, 215, 0, 0.25);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 0 1px rgba(255, 215, 0, 0.1);
          will-change: transform;
          display: flex;
          flex-direction: column;
        }

        .review-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: rgba(255, 215, 0, 0.5);
          box-shadow:
            0 20px 60px rgba(255, 215, 0, 0.3),
            0 8px 32px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            0 0 0 1px rgba(255, 215, 0, 0.3);
        }

        .review-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #FFA500, #FFD700);
          border-radius: 24px 24px 0 0;
          opacity: 0.8;
        }

        .quote-icon {
          position: absolute;
          top: 32px;
          right: 32px;
          color: rgba(255, 215, 0, 0.15);
          filter: drop-shadow(0 2px 8px rgba(255, 215, 0, 0.3));
        }

        .review-rating {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          margin-top: 8px;
        }

        .review-rating svg {
          filter: drop-shadow(0 2px 4px rgba(255, 215, 0, 0.4));
        }

        .review-text {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.85;
          font-size: 1.05rem;
          margin-bottom: 32px;
          min-height: 150px;
          font-weight: 400;
          letter-spacing: 0.015em;
          flex-grow: 1;
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 215, 0, 0.15);
          margin-top: auto;
        }

        .author-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.1));
          border: 2px solid rgba(255, 215, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          flex-shrink: 0;
          box-shadow:
            0 4px 12px rgba(255, 215, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .author-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .author-name {
          color: #ffffff;
          font-size: 1.15rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .author-role {
          color: rgba(255, 215, 0, 0.9);
          font-size: 0.95rem;
          margin: 0;
          font-weight: 500;
          line-height: 1.5;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: var(--space-md);
          margin-top: var(--space-2xl);
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          border: 2px solid rgba(255, 215, 0, 0.3);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0;
        }

        .dot:hover {
          background: rgba(255, 215, 0, 0.4);
          border-color: rgba(255, 215, 0, 0.6);
          transform: scale(1.3);
        }

        .dot.active {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-color: #FFD700;
          width: 40px;
          border-radius: 6px;
          box-shadow: 0 0 12px rgba(255, 215, 0, 0.6);
        }

        .reviews-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          padding: 48px 40px;
          border-radius: 24px;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.2) 100%
          );
          border: 1px solid rgba(255, 215, 0, 0.25);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          text-align: center;
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .stat-item {
          padding: 20px 16px;
          position: relative;
        }

        .stat-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 60%;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(255, 215, 0, 0.3),
            transparent
          );
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 12px rgba(255, 215, 0, 0.3);
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .reviews-carousel {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }

          .review-card {
            padding: 36px;
          }

          .reviews-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            padding: 40px 32px;
          }

          .stat-item {
            padding: 16px 12px;
          }

          .stat-item:nth-child(2)::after {
            display: none;
          }

          .stat-item:not(:nth-child(2n))::after {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .reviews-carousel {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .review-card {
            padding: 32px;
          }

          .review-text {
            min-height: auto;
            font-size: 1rem;
            margin-bottom: 28px;
          }

          .review-rating {
            margin-bottom: 20px;
          }

          .review-author {
            gap: 16px;
            padding-top: 20px;
          }

          .reviews-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            padding: 36px 28px;
          }

          .stat-item {
            padding: 14px 10px;
          }

          .stat-number {
            font-size: 2.5rem;
            margin-bottom: 10px;
          }

          .stat-label {
            font-size: 0.9rem;
          }

          .author-avatar {
            width: 52px;
            height: 52px;
            font-size: 26px;
          }

          .author-name {
            font-size: 1.05rem;
          }

          .author-role {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .review-card {
            padding: 28px;
          }

          .review-text {
            font-size: 0.95rem;
            line-height: 1.75;
            margin-bottom: 24px;
          }

          .review-rating {
            margin-bottom: 16px;
            gap: 6px;
          }

          .review-author {
            gap: 14px;
            padding-top: 18px;
          }

          .reviews-stats {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 32px 24px;
          }

          .stat-item {
            padding: 12px;
          }

          .stat-item::after {
            display: none !important;
          }

          .stat-number {
            font-size: 2.25rem;
            margin-bottom: 8px;
          }

          .stat-label {
            font-size: 0.85rem;
          }

          .author-avatar {
            width: 48px;
            height: 48px;
            font-size: 24px;
          }

          .author-name {
            font-size: 1rem;
          }

          .author-role {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  )
}
