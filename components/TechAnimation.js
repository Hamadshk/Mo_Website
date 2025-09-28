'use client'
import { useEffect, useState, useRef } from 'react'

export default function TechAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animationPhase, setAnimationPhase] = useState(0)
  const intervalRef = useRef(null)

  const companies = [
    {
      name: "OpenAI",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142-.0852 4.783-2.7582a.7712.7712 0 0 0 .7806 0l5.8428 3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
        </svg>
      )
    },
    {
      name: "Anthropic",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      name: "Claude",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-2 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          <path fill="currentColor" d="M8 15c.5.5 1.5 1 4 1s3.5-.5 4-1H8z"/>
        </svg>
      )
    },
    {
      name: "Meta",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "Google",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      )
    },
    {
      name: "Microsoft",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
        </svg>
      )
    },
    {
      name: "Apple",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
        </svg>
      )
    },
    {
      name: "Amazon",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.53.406-3.045.61-4.546.61-2.473 0-4.814-.493-7.002-1.474C3.18 20.657 1.462 19.762.21 18.613c-.113-.103-.133-.203-.058-.31l-.107-.283zm23.71.43c-.315-.44-.73-.73-1.247-.87-.507-.135-1.006-.135-1.498 0-.464.12-.87.36-1.215.72-.33.345-.524.75-.584 1.204-.045.424.03.818.226 1.176.226.403.555.705.96.907.42.203.87.3 1.35.293.465-.008.915-.113 1.35-.313.42-.188.78-.488 1.08-.9.315-.42.465-.87.45-1.35-.03-.465-.18-.87-.45-1.204-.226-.285-.48-.51-.78-.675-.285-.15-.6-.24-.93-.27-.314-.023-.616.008-.907.096-.27.075-.51.195-.72.36l-.068-.068c.12-.226.315-.405.585-.54.3-.15.63-.226.99-.226.384 0 .735.09 1.05.27.33.195.584.48.76.855.18.39.255.81.226 1.26-.03.435-.135.84-.316 1.215-.195.39-.48.72-.855.99-.39.285-.84.435-1.35.45-.525.015-1.005-.105-1.44-.36-.42-.24-.75-.585-.99-1.035-.225-.435-.3-.9-.225-1.395.09-.54.315-1.005.675-1.395.375-.405.84-.675 1.395-.81.57-.15 1.155-.135 1.755.045.6.195 1.095.555 1.485 1.08l-.255.21z"/>
        </svg>
      )
    },
    {
      name: "DeepMind",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: "Perplexity",
      logo: (
        <svg viewBox="0 0 24 24" className="company-logo">
          <path fill="currentColor" d="M12 2l10 6-10 6L2 8l10-6z"/>
          <path fill="currentColor" d="M2 8l10 6v8l-10-6V8z"/>
          <path fill="currentColor" d="M22 8v8l-10 6v-8l10-6z"/>
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