import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function AgentCorti() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Add class to body for this specific page
    document.body.classList.add('agentcorti-page')

    // Trigger page load animations
    setTimeout(() => setIsLoaded(true), 100)

    // Handle scroll for navigation backdrop
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      // Remove class when component unmounts
      document.body.classList.remove('agentcorti-page')
    }
  }, [])

  return (
    <>
      <Head>
        <title>AgentCorti - AI Automation Agency</title>
        <meta name="description" content="We elevate your business using Artificial Intelligence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="agentcorti-landing">
        {/* Background Elements */}
        <div className="background-container">
          <div className="gradient-background"></div>
          <div className="noise-texture"></div>
          <div className="gradient-mesh"></div>
          <div className="floating-blob blob-1"></div>
          <div className="floating-blob blob-2"></div>
          <div className="floating-blob blob-3"></div>
        </div>

        {/* Fixed Navigation */}
        <header className={`main-navigation ${isScrolled ? 'scrolled' : ''}`}>
          <nav className="nav-container">
            {/* Logo */}
            <div className="logo-section">
              <img
                src="/images/Mo_Logo_1.png"
                alt="Mo Logo"
                className="logo-image-corti"
              />
            </div>

            {/* Navigation Menu */}
            <div className="nav-menu">
              <a href="#services" className="nav-link">Services</a>
              <a href="#process" className="nav-link">Process</a>
              <a href="#industries" className="nav-link">Industries</a>
              <a href="#faq" className="nav-link">FAQ</a>
            </div>

            {/* CTA Button */}
            <button className="nav-cta-button">
              Book A Call
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="hero-section">
          <div className="hero-container">
            {/* Availability Indicator */}
            <div className={`availability-badge ${isLoaded ? 'animate-in' : ''}`}>
              <div className="availability-dot"></div>
              <span className="availability-text">3 Spots Available</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              <span className={`headline-line ${isLoaded ? 'animate-in-1' : ''}`}>
                We elevate your business
              </span>
              <span className={`headline-line ${isLoaded ? 'animate-in-2' : ''}`}>
                using Artificial Intelligence.
              </span>
            </h1>

            {/* Subheading */}
            <p className={`hero-subheading ${isLoaded ? 'animate-in-3' : ''}`}>
              We elevate and grow organizations using bespoke agentic solutions.
            </p>

            {/* CTA Buttons */}
            <div className={`hero-cta-buttons ${isLoaded ? 'animate-in-4' : ''}`}>
              <button className="cta-primary">
                Our services
              </button>
              <button className="cta-secondary">
                Free Audit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </main>

        {/* Technology Carousel */}
        <section className="technology-section">
          <p className="tech-section-label">Our core technologies</p>

          <div className="carousel-wrapper">
            <div className="carousel-track">
              {/* First set of logos */}
              <div className="tech-logo-item">
                <div className="tech-logo openai-logo">
                  <span>OpenAI</span>
                </div>
              </div>

              <div className="tech-logo-item">
                <div className="tech-logo make-logo">
                  <div className="make-m">M</div>
                </div>
              </div>

              <div className="tech-logo-item">
                <div className="tech-logo claude-logo">
                  <div className="claude-asterisk">*</div>
                </div>
              </div>

              <div className="tech-logo-item">
                <div className="tech-logo n8n-logo">
                  <div className="n8n-nodes">
                    <div className="node"></div>
                    <div className="node"></div>
                    <div className="node"></div>
                  </div>
                </div>
              </div>

              <div className="tech-logo-item">
                <div className="tech-logo zapier-logo">
                  <div className="zapier-z">Z</div>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="tech-logo-item">
                <div className="tech-logo openai-logo">
                  <span>OpenAI</span>
                </div>
              </div>

              <div className="tech-logo-item">
                <div className="tech-logo make-logo">
                  <div className="make-m">M</div>
                </div>
              </div>

              <div className="tech-logo-item">
                <div className="tech-logo claude-logo">
                  <div className="claude-asterisk">*</div>
                </div>
              </div>

              <div className="tech-logo-item">
                <div className="tech-logo n8n-logo">
                  <div className="n8n-nodes">
                    <div className="node"></div>
                    <div className="node"></div>
                    <div className="node"></div>
                  </div>
                </div>
              </div>

              <div className="tech-logo-item">
                <div className="tech-logo zapier-logo">
                  <div className="zapier-z">Z</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}