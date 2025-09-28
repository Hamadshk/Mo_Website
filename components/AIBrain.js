'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AIBrain() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="robot-container">
      <div className="robot-scene">
        {/* Background Elements */}
        <div className="circuit-background">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`circuit-line circuit-${i + 1}`} />
          ))}
        </div>

        {/* Floating Data Particles */}
        <div className="data-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}>
              <div className="particle-dot" />
            </div>
          ))}
        </div>

        {/* Main Robot */}
        <motion.div
          className="robot"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          {/* Robot Head */}
          <div className="robot-head">
            <div className="head-frame">
              {/* Eyes */}
              <div className="robot-eyes">
                <div className="eye eye-left">
                  <div className="eye-glow" />
                </div>
                <div className="eye eye-right">
                  <div className="eye-glow" />
                </div>
              </div>

              {/* Headset */}
              <div className="headset">
                <div className="headset-band" />
                <div className="headset-mic">
                  <div className="mic-indicator" />
                </div>
              </div>

              {/* Status Display */}
              <div className="status-display">
                <div className="status-text">ONLINE</div>
              </div>
            </div>
          </div>

          {/* Robot Body */}
          <div className="robot-body">
            <div className="body-frame">
              {/* Chest Panel */}
              <div className="chest-panel">
                <div className="panel-lights">
                  <div className="status-light active" />
                  <div className="status-light processing" />
                  <div className="status-light standby" />
                </div>
                <div className="waveform-display">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`wave-bar bar-${i + 1}`} />
                  ))}
                </div>
              </div>

              {/* Arms */}
              <div className="robot-arms">
                <div className="arm arm-left" />
                <div className="arm arm-right" />
              </div>
            </div>
          </div>

          {/* Holographic Display */}
          <div className="holo-display">
            <div className="holo-content">
              <div className="call-metrics">
                <div className="metric-item">
                  <span className="metric-value">247</span>
                  <span className="metric-label">Calls Today</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">99.9%</span>
                  <span className="metric-label">Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 24/7 Indicator */}
        <motion.div
          className="availability-indicator"
          initial={{ opacity: 0, rotate: -180 }}
          animate={isVisible ? { opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="orbit-ring">
            <div className="orbit-item sun">☀️</div>
            <div className="orbit-item moon">🌙</div>
          </div>
          <div className="center-text">24/7</div>
        </motion.div>

        {/* Sound Waves */}
        <div className="sound-waves">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`sound-wave wave-${i + 1}`} />
          ))}
        </div>

        {/* Customer Satisfaction Bubbles */}
        <div className="satisfaction-bubbles">
          {['😊', '👍', '⭐', '💯'].map((emoji, i) => (
            <motion.div
              key={i}
              className={`bubble bubble-${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? {
                opacity: [0, 1, 0],
                y: [20, -50, -100],
                scale: [0.8, 1, 0.8]
              } : {}}
              transition={{
                duration: 4,
                delay: 2 + i * 0.5,
                repeat: Infinity,
                repeatDelay: 6
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        {/* Network Connection Lines */}
        <div className="network-lines">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`network-line line-${i + 1}`}>
              <div className="connection-pulse" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .robot-container {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: radial-gradient(circle at center, rgba(0, 212, 255, 0.03) 0%, transparent 70%);
        }

        .robot-scene {
          position: relative;
          width: 400px;
          height: 500px;
          transform: translateZ(0);
        }

        /* Circuit Background */
        .circuit-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
          z-index: 1;
        }

        .circuit-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, #00D4FF, transparent);
          height: 1px;
          animation: circuitPulse 8s infinite linear;
        }

        .circuit-1 { top: 10%; left: 0; width: 60%; animation-delay: 0s; }
        .circuit-2 { top: 25%; right: 0; width: 40%; animation-delay: 2s; }
        .circuit-3 { top: 45%; left: 0; width: 80%; animation-delay: 4s; }
        .circuit-4 { top: 65%; right: 0; width: 50%; animation-delay: 1s; }
        .circuit-5 { top: 80%; left: 0; width: 70%; animation-delay: 3s; }
        .circuit-6 { top: 90%; right: 0; width: 30%; animation-delay: 5s; }

        @keyframes circuitPulse {
          0%, 100% { opacity: 0.1; transform: scaleX(0); }
          50% { opacity: 0.5; transform: scaleX(1); }
        }

        /* Data Particles */
        .data-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
        }

        .particle {
          position: absolute;
          animation: particleFloat 6s infinite ease-in-out;
        }

        .particle-dot {
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #00D4FF, #7B2FF7);
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(0, 212, 255, 0.5);
        }

        .particle-1 { top: 20%; left: 15%; animation-delay: 0s; }
        .particle-2 { top: 35%; right: 20%; animation-delay: 1s; }
        .particle-3 { top: 50%; left: 10%; animation-delay: 2s; }
        .particle-4 { top: 70%; right: 15%; animation-delay: 3s; }
        .particle-5 { top: 15%; left: 70%; animation-delay: 1.5s; }
        .particle-6 { top: 85%; left: 60%; animation-delay: 2.5s; }
        .particle-7 { top: 40%; right: 5%; animation-delay: 0.5s; }
        .particle-8 { top: 75%; left: 25%; animation-delay: 4s; }

        @keyframes particleFloat {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(10px, -10px) scale(1.2); opacity: 0.7; }
          50% { transform: translate(-5px, -20px) scale(0.8); opacity: 1; }
          75% { transform: translate(15px, -5px) scale(1.1); opacity: 0.5; }
        }

        /* Main Robot */
        .robot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          animation: robotFloat 4s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes robotFloat {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-8px); }
        }

        /* Robot Head */
        .robot-head {
          width: 120px;
          height: 120px;
          margin: 0 auto 10px;
          position: relative;
        }

        .head-frame {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%);
          border: 2px solid rgba(0, 212, 255, 0.4);
          border-radius: 25px;
          position: relative;
          box-shadow:
            0 0 30px rgba(0, 212, 255, 0.2),
            inset 0 2px 10px rgba(0, 212, 255, 0.1);
          overflow: hidden;
        }

        .head-frame::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(0, 212, 255, 0.1) 50%, transparent 70%);
          animation: headShine 6s infinite;
        }

        @keyframes headShine {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        /* Eyes */
        .robot-eyes {
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 25px;
        }

        .eye {
          width: 16px;
          height: 16px;
          background: radial-gradient(circle, #00D4FF 0%, #0088cc 70%);
          border-radius: 50%;
          position: relative;
          animation: eyeBlink 4s infinite;
        }

        .eye-glow {
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.6) 0%, transparent 70%);
          border-radius: 50%;
          animation: eyeGlow 2s ease-in-out infinite alternate;
        }

        @keyframes eyeBlink {
          0%, 94%, 100% { transform: scaleY(1); }
          97% { transform: scaleY(0.1); }
        }

        @keyframes eyeGlow {
          0% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.2); }
        }

        /* Headset */
        .headset {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 140px;
          height: 140px;
        }

        .headset-band {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8px;
          background: linear-gradient(90deg, #7B2FF7, #00D4FF);
          border-radius: 20px;
          transform: rotate(-5deg);
        }

        .headset-mic {
          position: absolute;
          bottom: 30px;
          right: -20px;
          width: 30px;
          height: 6px;
          background: linear-gradient(90deg, #7B2FF7, #00D4FF);
          border-radius: 10px;
          transform: rotate(25deg);
        }

        .mic-indicator {
          position: absolute;
          right: -8px;
          top: -3px;
          width: 12px;
          height: 12px;
          background: radial-gradient(circle, #00ff88, #00cc66);
          border-radius: 50%;
          animation: micPulse 1.5s ease-in-out infinite;
        }

        @keyframes micPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        /* Status Display */
        .status-display {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          padding: 4px 12px;
          border-radius: 10px;
          border: 1px solid rgba(0, 212, 255, 0.4);
        }

        .status-text {
          color: #00ff88;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1px;
          animation: statusBlink 2s infinite;
        }

        @keyframes statusBlink {
          0%, 80%, 100% { opacity: 1; }
          90% { opacity: 0.5; }
        }

        /* Robot Body */
        .robot-body {
          width: 100px;
          height: 140px;
          margin: 0 auto;
          position: relative;
        }

        .body-frame {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%);
          border: 2px solid rgba(0, 212, 255, 0.3);
          border-radius: 20px;
          position: relative;
          box-shadow:
            0 0 25px rgba(0, 212, 255, 0.15),
            inset 0 2px 8px rgba(0, 212, 255, 0.1);
        }

        /* Chest Panel */
        .chest-panel {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 80px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 10px;
          padding: 10px;
        }

        .panel-lights {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 15px;
        }

        .status-light {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          box-shadow: 0 0 8px currentColor;
        }

        .status-light.active {
          background: #00ff88;
          color: #00ff88;
          animation: lightActive 2s infinite;
        }

        .status-light.processing {
          background: #ffaa00;
          color: #ffaa00;
          animation: lightProcessing 1.5s infinite;
          animation-delay: 0.5s;
        }

        .status-light.standby {
          background: #0088ff;
          color: #0088ff;
          animation: lightStandby 3s infinite;
          animation-delay: 1s;
        }

        @keyframes lightActive {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }

        @keyframes lightProcessing {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes lightStandby {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        /* Waveform Display */
        .waveform-display {
          display: flex;
          justify-content: center;
          align-items: end;
          gap: 3px;
          height: 30px;
        }

        .wave-bar {
          width: 4px;
          background: linear-gradient(0deg, #00D4FF, #7B2FF7);
          border-radius: 2px;
          animation: waveAnimation 1s infinite ease-in-out;
        }

        .bar-1 { animation-delay: 0s; }
        .bar-2 { animation-delay: 0.1s; }
        .bar-3 { animation-delay: 0.2s; }
        .bar-4 { animation-delay: 0.3s; }
        .bar-5 { animation-delay: 0.4s; }

        @keyframes waveAnimation {
          0%, 100% { height: 8px; opacity: 0.5; }
          50% { height: 25px; opacity: 1; }
        }

        /* Arms */
        .robot-arms {
          position: absolute;
          top: 30px;
          left: 0;
          right: 0;
        }

        .arm {
          position: absolute;
          width: 8px;
          height: 60px;
          background: linear-gradient(180deg, rgba(0, 212, 255, 0.8), rgba(123, 47, 247, 0.6));
          border-radius: 4px;
          top: 0;
        }

        .arm-left {
          left: -15px;
          transform: rotate(-10deg);
          animation: armLeft 4s infinite ease-in-out;
        }

        .arm-right {
          right: -15px;
          transform: rotate(10deg);
          animation: armRight 4s infinite ease-in-out;
        }

        @keyframes armLeft {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(-5deg); }
        }

        @keyframes armRight {
          0%, 100% { transform: rotate(10deg); }
          50% { transform: rotate(5deg); }
        }

        /* Holographic Display */
        .holo-display {
          position: absolute;
          top: -60px;
          right: -80px;
          width: 120px;
          height: 80px;
          background: linear-gradient(135deg,
            rgba(0, 212, 255, 0.1) 0%,
            rgba(123, 47, 247, 0.1) 100%);
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 10px;
          backdrop-filter: blur(10px);
          animation: holoFloat 3s ease-in-out infinite;
        }

        @keyframes holoFloat {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-5px) rotateY(2deg); }
        }

        .holo-content {
          padding: 10px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .call-metrics {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .metric-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .metric-value {
          color: #00D4FF;
          font-size: 14px;
          font-weight: 700;
          line-height: 1;
        }

        .metric-label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* 24/7 Availability Indicator */
        .availability-indicator {
          position: absolute;
          bottom: 50px;
          left: -60px;
          width: 80px;
          height: 80px;
          z-index: 5;
        }

        .orbit-ring {
          position: relative;
          width: 100%;
          height: 100%;
          border: 2px dashed rgba(0, 212, 255, 0.3);
          border-radius: 50%;
          animation: orbitRotate 20s linear infinite;
        }

        @keyframes orbitRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .orbit-item {
          position: absolute;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          animation: orbitItemRotate 20s linear infinite reverse;
        }

        @keyframes orbitItemRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }

        .orbit-item.sun {
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
        }

        .orbit-item.moon {
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
        }

        .center-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #00D4FF;
          font-size: 12px;
          font-weight: 700;
          text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }

        /* Sound Waves */
        .sound-waves {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
        }

        .sound-wave {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid rgba(0, 212, 255, 0.3);
          border-radius: 50%;
          animation: soundWave 2s infinite ease-out;
        }

        .wave-1 { animation-delay: 0s; }
        .wave-2 { animation-delay: 0.3s; }
        .wave-3 { animation-delay: 0.6s; }
        .wave-4 { animation-delay: 0.9s; }

        @keyframes soundWave {
          0% {
            width: 100px;
            height: 100px;
            opacity: 0.8;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }

        /* Satisfaction Bubbles */
        .satisfaction-bubbles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 4;
          pointer-events: none;
        }

        .bubble {
          position: absolute;
          font-size: 20px;
          filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.5));
        }

        .bubble-1 { left: 20%; bottom: 60%; }
        .bubble-2 { right: 25%; bottom: 50%; }
        .bubble-3 { left: 30%; bottom: 70%; }
        .bubble-4 { right: 15%; bottom: 65%; }

        /* Network Connection Lines */
        .network-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
        }

        .network-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(0, 212, 255, 0.5) 50%,
            transparent 100%);
        }

        .line-1 {
          top: 30%;
          left: 0;
          width: 60%;
          animation: networkPulse 3s infinite;
          animation-delay: 0s;
        }

        .line-2 {
          top: 50%;
          right: 0;
          width: 70%;
          animation: networkPulse 3s infinite;
          animation-delay: 1s;
        }

        .line-3 {
          top: 70%;
          left: 0;
          width: 50%;
          animation: networkPulse 3s infinite;
          animation-delay: 2s;
        }

        .connection-pulse {
          position: absolute;
          top: -2px;
          left: 0;
          width: 6px;
          height: 5px;
          background: radial-gradient(circle, #00D4FF, transparent);
          border-radius: 50%;
          animation: pulseTravelRight 3s infinite ease-in-out;
        }

        @keyframes networkPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes pulseTravelRight {
          0% { left: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .robot-container {
            min-height: 400px;
          }

          .robot-scene {
            width: 300px;
            height: 400px;
            transform: scale(0.85);
          }

          .holo-display {
            display: none;
          }

          .availability-indicator {
            bottom: 30px;
            left: -40px;
            transform: scale(0.8);
          }

          .data-particles {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .robot-scene {
            width: 250px;
            height: 350px;
            transform: scale(0.7);
          }

          .circuit-background {
            display: none;
          }

          .network-lines {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .robot {
            animation: none;
          }

          .sound-waves {
            display: none;
          }

          .satisfaction-bubbles {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}