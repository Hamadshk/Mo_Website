'use client'
import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import MatrixRain from './MatrixRain'
import TechAnimation from './TechAnimation'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const [isMounted, setIsMounted] = useState(false)
  const [codingChars, setCodingChars] = useState([])
  const [chartBars, setChartBars] = useState([])

  useEffect(() => {
    setIsMounted(true)

    // Generate fewer coding chars for better performance
    const chars = ['<', '>', '{', '}', '(', ')', '[', ']', '=', '+', '-', '*', '/', '%', '&', '|'];
    const colors = ['coding-char-green', 'coding-char-blue', 'coding-char-purple'];

    // Reduce from 30 to 15 for better performance
    const generatedChars = [...Array(15)].map((_, i) => ({
      char: chars[Math.floor(Math.random() * chars.length)],
      color: colors[Math.floor(Math.random() * 3)],
      left: Math.random() * 100,
      animationDelay: Math.random() * 25,
      animationDuration: 20 + Math.random() * 15
    }))

    setCodingChars(generatedChars)

    // Generate chart bars data on client side only
    const generatedBars = [...Array(8)].map((_, i) => ({
      heights: [
        Math.random() * 30 + 10,
        Math.random() * 60 + 20,
        Math.random() * 40 + 15
      ]
    }))

    setChartBars(generatedBars)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero noise" ref={containerRef} id="home">
      <MatrixRain />
      <div className="hero-bg">
        <div className="coding-animation">
          {isMounted && codingChars.map((charData, i) => (
            <div
              key={i}
              className={`coding-char ${charData.color}`}
              style={{
                left: `${charData.left}%`,
                animationDelay: `${charData.animationDelay}s`,
                animationDuration: `${charData.animationDuration}s`
              }}
            >
              {charData.char}
            </div>
          ))}
        </div>
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>

      <div className="container hero-content-container">
        <div className="hero-content">
          <div className="hero-badge hero-animate-1">
            <Sparkles size={16} />
            <span>Next-Generation AI Solutions</span>
          </div>

          <h1 className="hero-title hero-animate-2">
            Build the Future with
            <br />
            <span className="gradient-text">Intelligent Automation</span>
          </h1>

          <p className="hero-subtitle hero-animate-3">
            Revolutionize your business operations with cutting-edge AI voice agents,
            intelligent automation systems, and data-driven marketing solutions that
            deliver measurable results and unprecedented efficiency.
          </p>

          <div className="hero-stats hero-animate-4">
            <div className="stat">
              <span className="stat-number gradient-text">500+</span>
              <span className="stat-label">Businesses Transformed</span>
            </div>
            <div className="stat">
              <span className="stat-number gradient-text">10M+</span>
              <span className="stat-label">AI Interactions</span>
            </div>
            <div className="stat">
              <span className="stat-number gradient-text">85%</span>
              <span className="stat-label">Cost Reduction</span>
            </div>
          </div>

          <div className="hero-cta hero-animate-5">
            <motion.button
              className="cta-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
            >
              <span>Start Your Transformation</span>
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              className="cta-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={16} />
              <span>Watch Demo</span>
            </motion.button>
          </div>

          <TechAnimation />
        </div>
      </div>

      <motion.div
        className="hero-badge-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Sparkles size={14} />
        <span>Trusted by 500+ Businesses Worldwide</span>
      </motion.div>
    </section>
  )
}