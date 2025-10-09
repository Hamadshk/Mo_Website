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
            rgba(255, 215, 0, 0.1) 0%,
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
          gap: var(--space-xl);
          margin-bottom: var(--space-xl);
        }

        .review-card {
          position: relative;
          padding: var(--space-2xl);
          border-radius: 20px;
          border: 1px solid rgba(255, 215, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(255, 215, 0, 0.3);
        }

        .quote-icon {
          position: absolute;
          top: var(--space-lg);
          right: var(--space-lg);
          color: rgba(255, 215, 0, 0.2);
        }

        .review-rating {
          display: flex;
          gap: 4px;
          margin-bottom: var(--space-md);
        }

        .review-text {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
          margin-bottom: var(--space-xl);
          min-height: 120px;
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding-top: var(--space-md);
          border-top: 1px solid rgba(255, 215, 0, 0.2);
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 215, 0, 0.1);
          border: 2px solid rgba(255, 215, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }

        .author-info {
          flex: 1;
        }

        .author-name {
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 700;
          margin: 0 0 4px 0;
        }

        .author-role {
          color: var(--text-tertiary);
          font-size: 0.85rem;
          margin: 0;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: var(--space-sm);
          margin-top: var(--space-xl);
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover {
          background: rgba(255, 215, 0, 0.5);
          transform: scale(1.2);
        }

        .dot.active {
          background: var(--accent-primary);
          width: 30px;
          border-radius: 5px;
        }

        .reviews-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-xl);
          padding: var(--space-2xl);
          border-radius: 20px;
          border: 1px solid rgba(255, 215, 0, 0.3);
          text-align: center;
        }

        .stat-item {
          padding: var(--space-md);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: var(--space-xs);
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .reviews-carousel {
            grid-template-columns: repeat(2, 1fr);
          }

          .reviews-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-lg);
          }
        }

        @media (max-width: 768px) {
          .reviews-carousel {
            grid-template-columns: 1fr;
          }

          .review-text {
            min-height: auto;
          }

          .reviews-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-md);
            padding: var(--space-lg);
          }

          .stat-number {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .review-card {
            padding: var(--space-lg);
          }

          .reviews-stats {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  )
}
