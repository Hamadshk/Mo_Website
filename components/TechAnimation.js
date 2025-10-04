'use client'
import { useEffect, useState, useRef } from 'react'

export default function TechAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animationPhase, setAnimationPhase] = useState(0)
  const intervalRef = useRef(null)

  const companies = [
    {
      name: "n8n",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.48l7 3.5v7.84l-7-3.5V9.48zm16 0v7.84l-7 3.5v-7.84l7-3.5z"/>
        </svg>
      )
    },
    {
      name: "Zapier",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-1 3v4H7v2h4v4h2v-4h4v-2h-4V7h-2z"/>
        </svg>
      )
    },
    {
      name: "Make",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M12 2L2 8v8l10 6 10-6V8l-10-6zm0 2.5L19.5 9 12 12.5 4.5 9 12 4.5zM4 10.5l7 4.2v7.3l-7-4.2v-7.3zm16 0v7.3l-7 4.2v-7.3l7-4.2z"/>
        </svg>
      )
    },
    {
      name: "VAPI",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-1 4v8l6-4-6-4z"/>
        </svg>
      )
    },
    {
      name: "ElevenLabs",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M3 9v6h3V9H3zm5 0v6h3V9H8zm5 0v6h3V9h-3zm5-2v10h3V7h-3z"/>
          <path fill="currentColor" d="M3 17h18v2H3v-2z"/>
        </svg>
      )
    },
    {
      name: "Retell",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-2 4c-1.105 0-2 .895-2 2v4c0 1.105.895 2 2 2h4c1.105 0 2-.895 2-2v-4c0-1.105-.895-2-2-2h-4z"/>
        </svg>
      )
    },
    {
      name: "AI Automation",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M12 2L2 7v10l10 5 10-5V7l-10-5zM12 4.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.48l7 3.5v7.84l-7-3.5V9.48zm16 0v7.84l-7 3.5v-7.84l7-3.5z"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: "Law Firms",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M12 2L2 6v2h20V6l-10-4zM4 10v10h4V10H4zm6 0v10h4V10h-4zm6 0v10h4V10h-4zM2 22h20v2H2v-2z"/>
        </svg>
      )
    },
    {
      name: "Business Automation",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4V8h16v11z"/>
          <path fill="currentColor" d="M12 10l-4 4h3v3h2v-3h3l-4-4z"/>
        </svg>
      )
    },
    {
      name: "Workflow AI",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm13 0h5v3h-5v-3zm0 5h5v3h-5v-3z"/>
        </svg>
      )
    }
  ]

  useEffect(() => {
    const itemDuration = 4000 // 4 seconds per item
    const frameRate = 60
    const framesPerItem = itemDuration / (1000 / frameRate)

    let frame = 0

    intervalRef.current = setInterval(() => {
      frame++
      const progress = frame / framesPerItem
      setAnimationPhase(progress)

      if (frame >= framesPerItem) {
        frame = 0
        setCurrentIndex(prev => (prev + 1) % companies.length)
      }
    }, 1000 / frameRate)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [companies.length])

  const getVisibleItems = () => {
    const items = []

    // Current item sliding from left to right
    const company = companies[currentIndex]

    // Calculate position: starts at -200 (left), ends at +200 (right)
    const totalDistance = 400
    const startPosition = -200
    const position = startPosition + (animationPhase * totalDistance)

    // Calculate opacity: fade in from left, stay visible in center, fade out to right
    let opacity = 0
    if (animationPhase < 0.2) {
      // Fade in from left
      opacity = animationPhase / 0.2
    } else if (animationPhase < 0.8) {
      // Fully visible in center
      opacity = 1
    } else {
      // Fade out to right
      opacity = (1 - animationPhase) / 0.2
    }

    items.push({
      company,
      position,
      opacity,
      key: `${company.name}-${currentIndex}`
    })

    return items
  }

  return (
    <div className="tech-animation-container">
      <div className="tech-animation-display">
        <div className="fade-overlay fade-left" />
        <div className="fade-overlay fade-right" />

        <div className="tech-scroll">
          {getVisibleItems().map((item) => (
            <div
              key={item.key}
              className="tech-item"
              style={{
                transform: `translateX(${item.position}px)`,
                opacity: item.opacity,
                willChange: 'transform, opacity'
              }}
            >
              <div className="tech-logo-wrapper">{item.company.logo}</div>
              <div className="tech-name">{item.company.name}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tech-animation-container {
          width: 100vw;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          overflow: hidden;
          position: relative;
        }

        .tech-animation-display {
          position: relative;
          width: 500px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(90deg,
            rgba(15, 23, 42, 0.3) 0%,
            rgba(15, 23, 42, 0.6) 50%,
            rgba(15, 23, 42, 0.3) 100%
          );
          border-radius: 12px;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .fade-overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          pointer-events: none;
          z-index: 2;
        }

        .fade-left {
          left: 0;
          background: linear-gradient(90deg,
            rgba(15, 23, 42, 1) 0%,
            rgba(15, 23, 42, 0.8) 40%,
            rgba(15, 23, 42, 0) 100%
          );
        }

        .fade-right {
          right: 0;
          background: linear-gradient(90deg,
            rgba(15, 23, 42, 0) 0%,
            rgba(15, 23, 42, 0.8) 60%,
            rgba(15, 23, 42, 1) 100%
          );
        }

        .tech-scroll {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .tech-item {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 18px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          white-space: nowrap;
          transition: none;
          transform: translateZ(0);
        }

        .tech-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }

        .company-logo {
          width: 20px;
          height: 20px;
          color: #ffffff;
          filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.3));
        }

        .tech-name {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          letter-spacing: 0.02em;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .tech-animation-display {
            width: 400px;
            height: 60px;
          }

          .tech-item {
            padding: 8px 14px;
            gap: 10px;
          }

          .tech-logo-wrapper {
            width: 20px;
            height: 20px;
          }

          .company-logo {
            width: 16px;
            height: 16px;
          }

          .tech-name {
            font-size: 0.9rem;
          }

          .fade-overlay {
            width: 60px;
          }
        }

        @media (max-width: 480px) {
          .tech-animation-display {
            width: 320px;
            height: 55px;
          }

          .tech-item {
            padding: 6px 12px;
            gap: 8px;
          }

          .tech-logo-wrapper {
            width: 18px;
            height: 18px;
          }

          .company-logo {
            width: 14px;
            height: 14px;
          }

          .tech-name {
            font-size: 0.85rem;
          }

          .fade-overlay {
            width: 50px;
          }
        }
      `}</style>
    </div>
  )
}