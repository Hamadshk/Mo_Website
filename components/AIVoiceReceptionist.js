'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, DollarSign, Phone } from 'lucide-react'

export default function AIVoiceReceptionist() {
  const [missedCalls, setMissedCalls] = useState(10)
  const [avgClientValue, setAvgClientValue] = useState(500)
  const [inputValue, setInputValue] = useState('500')

  const dailyLoss = missedCalls * avgClientValue
  const monthlyLoss = dailyLoss * 30
  const yearlyLoss = dailyLoss * 365

  const handleInputChange = (e) => {
    const value = e.target.value

    // Allow only numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setInputValue(value)

      // Parse the value, if empty set to 0
      const numValue = value === '' ? 0 : parseFloat(value)
      if (!isNaN(numValue)) {
        setAvgClientValue(numValue)
      }
    }
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <motion.div
      className="calculator-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="calculator-header">
        <div className="header-icon">
          <Phone size={24} />
        </div>
        <h2 className="calculator-title">AI Voice Receptionist</h2>
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
          <DollarSign className="input-icon" size={18} />
          <input
            type="text"
            inputMode="numeric"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={(e) => {
              // Format the input on blur
              if (e.target.value === '' || parseFloat(e.target.value) === 0) {
                setInputValue('0')
                setAvgClientValue(0)
              } else {
                setInputValue(avgClientValue.toString())
              }
            }}
            className="text-input"
            placeholder="500"
          />
        </div>
      </div>

      {/* Results */}
      <div className="results-section">
        <div className="result-item">
          <Phone className="result-icon" size={16} />
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
  )
}
