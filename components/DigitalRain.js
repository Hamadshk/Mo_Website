'use client'
import { useEffect, useRef, useState } from 'react'

export default function DigitalRain() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Character set for the rain
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.-_|+*=<>[]{}()#@$%&'
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Initialize drops array - one for each column
    const drops = Array(columns).fill().map(() => ({
      y: Math.random() * -100, // Start above screen
      speed: Math.random() * 2 + 1, // Random speed between 1-3
      opacity: Math.random() * 0.3 + 0.1, // Very subtle opacity
      char: chars[Math.floor(Math.random() * chars.length)],
      lastCharChange: 0
    }))

    let lastTime = 0
    const targetFPS = 30 // Lower FPS for performance

    const animate = (currentTime) => {
      if (currentTime - lastTime < 1000 / targetFPS) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      lastTime = currentTime

      // Clear canvas with subtle fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set font and text properties
      ctx.font = `${fontSize}px 'Courier New', monospace`
      ctx.textAlign = 'center'

      drops.forEach((drop, index) => {
        const x = index * fontSize + fontSize / 2

        // Randomly change character occasionally
        if (Math.random() < 0.02) {
          drop.char = chars[Math.floor(Math.random() * chars.length)]
        }

        // Calculate fade effect based on position
        const fadeStart = canvas.height * 0.7
        let alpha = drop.opacity

        if (drop.y > fadeStart) {
          const fadeProgress = (drop.y - fadeStart) / (canvas.height * 0.3)
          alpha = drop.opacity * (1 - fadeProgress)
        }

        // Use subtle green/cyan colors
        const colorVariant = Math.random()
        if (colorVariant < 0.6) {
          ctx.fillStyle = `rgba(0, 255, 65, ${alpha})` // Matrix green
        } else if (colorVariant < 0.9) {
          ctx.fillStyle = `rgba(0, 255, 255, ${alpha})` // Cyan
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.5})` // Occasional white
        }

        // Draw the character
        ctx.fillText(drop.char, x, drop.y)

        // Update position
        drop.y += drop.speed

        // Reset drop when it goes off screen
        if (drop.y > canvas.height + 20) {
          drop.y = Math.random() * -100 - 20
          drop.speed = Math.random() * 2 + 1
          drop.opacity = Math.random() * 0.25 + 0.05 // Very subtle
          drop.char = chars[Math.floor(Math.random() * chars.length)]
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions])

  return (
    <canvas
      ref={canvasRef}
      className="digital-rain-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'transparent',
        pointerEvents: 'none'
      }}
    />
  )
}