'use client'
import { useEffect, useRef } from 'react'

export default function BottomScrollAnimation() {
  const keywords = [
    "DeepMind",
    "OpenAI",
    "Anthropic",
    "Machine Learning",
    "Neural Networks",
    "AI Innovation",
    "Deep Learning",
    "Artificial Intelligence",
    "GPT Models",
    "Computer Vision",
    "Natural Language",
    "Robotics AI",
    "Quantum Computing",
    "Edge AI",
    "AutoML",
    "Generative AI"
  ]

  return (
    <div className="bottom-scroll-container">
      <div className="scroll-track">
        <div className="scroll-content">
          {keywords.map((keyword, index) => (
            <span key={`first-${index}`} className="scroll-keyword">
              {keyword}
            </span>
          ))}
          {keywords.map((keyword, index) => (
            <span key={`second-${index}`} className="scroll-keyword">
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bottom-scroll-container {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100vw;
          height: 60px;
          background: linear-gradient(180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.3) 20%,
            rgba(0, 0, 0, 0.7) 50%,
            rgba(0, 0, 0, 0.95) 100%
          );
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 9999;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          pointer-events: none;
        }

        .bottom-scroll-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg,
            transparent,
            rgba(139, 92, 246, 0.5) 20%,
            rgba(59, 130, 246, 0.5) 50%,
            rgba(139, 92, 246, 0.5) 80%,
            transparent
          );
          animation: shimmer 8s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(-100%);
          }
          50% {
            opacity: 1;
            transform: translateX(100%);
          }
        }

        .scroll-track {
          position: relative;
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          mask: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .scroll-content {
          position: absolute;
          display: flex;
          align-items: center;
          white-space: nowrap;
          animation: scrollLeftToRight 45s linear infinite;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        .scroll-keyword {
          display: inline-block;
          padding: 6px 16px;
          margin-right: 30px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          background: linear-gradient(135deg,
            rgba(139, 92, 246, 0.1) 0%,
            rgba(59, 130, 246, 0.05) 100%
          );
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 20px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          letter-spacing: 0.02em;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          font-size: 0.7rem;
          pointer-events: auto;
          cursor: pointer;
        }

        .scroll-keyword::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg,
            transparent,
            rgba(139, 92, 246, 0.2),
            transparent
          );
          transition: left 0.6s ease;
        }

        .scroll-keyword:hover::before {
          left: 100%;
        }

        .scroll-keyword:hover {
          color: rgba(255, 255, 255, 1);
          background: linear-gradient(135deg,
            rgba(139, 92, 246, 0.2) 0%,
            rgba(59, 130, 246, 0.15) 100%
          );
          border-color: rgba(139, 92, 246, 0.4);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 
            0 10px 25px -5px rgba(139, 92, 246, 0.25),
            0 5px 15px -5px rgba(59, 130, 246, 0.2),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
        }

        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        /* Glow effect for keywords */
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(139, 92, 246, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
          }
        }

        .scroll-keyword:nth-child(3n) {
          animation: glow 4s ease-in-out infinite;
          animation-delay: 0s;
        }

        .scroll-keyword:nth-child(3n+1) {
          animation: glow 4s ease-in-out infinite;
          animation-delay: 1.3s;
        }

        .scroll-keyword:nth-child(3n+2) {
          animation: glow 4s ease-in-out infinite;
          animation-delay: 2.6s;
        }

        @media (max-width: 768px) {
          .bottom-scroll-container {
            height: 50px;
          }

          .scroll-track {
            height: 35px;
          }

          .scroll-keyword {
            padding: 5px 14px;
            margin-right: 20px;
            font-size: 0.65rem;
          }

          .scroll-content {
            animation-duration: 35s;
          }
        }

        @media (max-width: 480px) {
          .bottom-scroll-container {
            height: 45px;
          }

          .scroll-track {
            height: 30px;
          }

          .scroll-keyword {
            padding: 4px 12px;
            margin-right: 15px;
            font-size: 0.6rem;
            letter-spacing: 0.01em;
          }

          .scroll-content {
            animation-duration: 30s;
          }
        }

        /* Smooth scrolling on Safari */
        @supports (-webkit-touch-callout: none) {
          .scroll-content {
            -webkit-transform: translateZ(0);
            -webkit-animation: scrollLeftToRight 45s linear infinite;
          }
        }
      `}</style>
    </div>
  )
}