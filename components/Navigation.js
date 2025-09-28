'use client'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/images/Mo_Logo.jpeg"
            alt="Mo Logo"
            className="logo-image"
          />
        </motion.div>

        <div className="nav-menu desktop-menu">
          {['Services', 'Technology', 'About', 'Contact'].map((item, index) => (
            <motion.button
              key={item}
              className="nav-item"
              onClick={() => scrollToSection(item.toLowerCase())}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              {item}
            </motion.button>
          ))}
        </div>

        <motion.button
          className="cta-nav"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          onClick={() => scrollToSection('contact')}
        >
          Get Started
          <ArrowUpRight size={16} />
        </motion.button>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <motion.div
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mobile-menu-content">
          {['Services', 'Technology', 'About', 'Contact'].map((item, index) => (
            <motion.button
              key={item}
              className="mobile-nav-item"
              onClick={() => scrollToSection(item.toLowerCase())}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20
              }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.button>
          ))}
          <motion.button
            className="mobile-cta"
            onClick={() => scrollToSection('contact')}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              x: isMobileMenuOpen ? 0 : -20
            }}
            transition={{ delay: 0.4 }}
          >
            Get Started
            <ArrowUpRight size={16} />
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  )
}