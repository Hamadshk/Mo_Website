'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, DollarSign, Phone } from 'lucide-react'

export default function RevenueLossCalculator() {
  const [missedCalls, setMissedCalls] = useState(10)
  const [avgClientValue, setAvgClientValue] = useState(500)

  const dailyLoss = missedCalls * avgClientValue
  const monthlyLoss = dailyLoss * 30
  const yearlyLoss = dailyLoss * 365

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="calculator-container">
      <motion.div
        className="calculator-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="calculator-header">
          <div className="header-icon">
            <TrendingDown size={32} />
          </div>
          <h2 className="calculator-title">Revenue Loss Calculator</h2>
        </div>

        {/* Missed Calls Slider */}
        <div className="input-section">
          <label className="input-label">
            Missed calls per day: <span className="value-display">{missedCalls === 50 ? '50+' : missedCalls}</span>
          </label>
          <div className="slider-container">
            <input
              type="range"
              min="1"
              max="50"
              value={missedCalls}
              onChange={(e) => setMissedCalls(parseInt(e.target.value))}
              className="slider"
            />
            <div className="slider-markers">
              <span>1</span>
              <span>25</span>
              <span>50+</span>
            </div>
          </div>
        </div>

        {/* Average Client Value Input */}
        <div className="input-section">
          <label className="input-label">
            Average client value ($)
          </label>
          <div className="input-wrapper">
            <DollarSign className="input-icon" size={20} />
            <input
              type="number"
              value={avgClientValue}
              onChange={(e) => setAvgClientValue(parseFloat(e.target.value) || 0)}
              className="text-input"
              placeholder="500"
            />
          </div>
        </div>

        {/* Results */}
        <div className="results-section">
          <div className="result-item">
            <Phone className="result-icon" size={18} />
            <div className="result-content">
              <div className="result-label">Lost revenue per day</div>
              <motion.div
                className="result-amount"
                key={`daily-${dailyLoss}`}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {formatCurrency(dailyLoss)}
              </motion.div>
            </div>
          </div>

          <div className="result-item">
            <div className="result-content">
              <div className="result-label">Lost revenue per month</div>
              <motion.div
                className="result-amount"
                key={`monthly-${monthlyLoss}`}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {formatCurrency(monthlyLoss)}
              </motion.div>
            </div>
          </div>

          <div className="result-item highlight">
            <div className="result-content">
              <div className="result-label">Lost revenue per year</div>
              <motion.div
                className="result-amount large"
                key={`yearly-${yearlyLoss}`}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {formatCurrency(yearlyLoss)}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="calculator-footer">
          <p className="disclaimer">*Based on potential revenue from missed call opportunities</p>
          <motion.a
            href="https://calendly.com/agentcorti/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Stop Losing Money - Book Demo
          </motion.a>
        </div>
      </motion.div>

      <style jsx>{`
        .calculator-container {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .calculator-card {
          background: linear-gradient(145deg, rgba(30, 58, 138, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 24px;
          padding: 32px;
          max-width: 480px;
          width: 100%;
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.3),
            0 0 40px rgba(212, 175, 55, 0.1);
          backdrop-filter: blur(20px);
        }

        .calculator-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .header-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(30, 58, 138, 0.2));
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 16px;
          color: #D4AF37;
          margin: 0 auto 16px;
        }

        .calculator-title {
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .input-section {
          margin-bottom: 28px;
        }

        .input-label {
          display: block;
          color: rgba(255, 255, 255, 0.9);
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 12px;
        }

        .value-display {
          color: #D4AF37;
          font-weight: 700;
          font-size: 18px;
          margin-left: 8px;
        }

        .slider-container {
          position: relative;
        }

        .slider {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          outline: none;
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #D4AF37, #1e3a8a);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(212, 175, 55, 0.4);
          transition: all 0.2s ease;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.6);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #D4AF37, #1e3a8a);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(212, 175, 55, 0.4);
          transition: all 0.2s ease;
        }

        .slider::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.6);
        }

        .slider-markers {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          padding: 0 4px;
        }

        .slider-markers span {
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          color: rgba(212, 175, 55, 0.7);
        }

        .text-input {
          width: 100%;
          padding: 14px 16px 14px 44px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 12px;
          color: #ffffff;
          font-size: 16px;
          font-weight: 500;
          outline: none;
          transition: all 0.3s ease;
        }

        .text-input:focus {
          border-color: #D4AF37;
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
        }

        .text-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .results-section {
          margin: 32px 0;
          padding: 24px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 16px;
        }

        .result-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .result-item:last-child {
          border-bottom: none;
        }

        .result-item.highlight {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05));
          border-radius: 12px;
          padding: 20px 16px;
          margin-top: 12px;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .result-icon {
          color: rgba(239, 68, 68, 0.8);
          flex-shrink: 0;
        }

        .result-content {
          flex: 1;
        }

        .result-label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .result-amount {
          color: #ef4444;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .result-amount.large {
          font-size: 32px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .calculator-footer {
          margin-top: 24px;
        }

        .disclaimer {
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
          text-align: center;
          margin-bottom: 16px;
        }

        .cta-button {
          display: block;
          width: 100%;
          padding: 16px 24px;
          background: linear-gradient(135deg, #1e3a8a 0%, #D4AF37 100%);
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(30, 58, 138, 0.4);
        }

        .cta-button:hover {
          background: linear-gradient(135deg, #D4AF37 0%, #1e3a8a 100%);
          box-shadow: 0 6px 30px rgba(212, 175, 55, 0.5);
          transform: translateY(-1px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .calculator-container {
            min-height: 400px;
            padding: 16px;
          }

          .calculator-card {
            padding: 24px;
          }

          .calculator-title {
            font-size: 24px;
          }

          .result-amount {
            font-size: 20px;
          }

          .result-amount.large {
            font-size: 28px;
          }
        }

        @media (max-width: 480px) {
          .calculator-card {
            padding: 20px;
          }

          .calculator-title {
            font-size: 22px;
          }

          .header-icon {
            width: 56px;
            height: 56px;
          }

          .result-amount {
            font-size: 18px;
          }

          .result-amount.large {
            font-size: 24px;
          }

          .cta-button {
            font-size: 15px;
            padding: 14px 20px;
          }
        }
      `}</style>
    </div>
  )
}
