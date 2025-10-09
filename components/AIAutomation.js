'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, DollarSign, Users, Clock, Globe } from 'lucide-react'

export default function AIAutomation() {
  const [hoursPerDay, setHoursPerDay] = useState(0)
  const [numStaff, setNumStaff] = useState(0)
  const [hourlyRate, setHourlyRate] = useState(0)
  const [inputValue, setInputValue] = useState('0')
  const [currency, setCurrency] = useState('USD')
  const [hasInteracted, setHasInteracted] = useState(false)

  // Calculations
  const dailyLossPerStaff = hoursPerDay * hourlyRate
  const totalDailyLoss = dailyLossPerStaff * numStaff
  const monthlyLossPerStaff = dailyLossPerStaff * 22 // Working days per month
  const totalMonthlyLoss = totalDailyLoss * 22
  const yearlyLossPerStaff = dailyLossPerStaff * 260 // Working days per year
  const totalYearlyLoss = totalDailyLoss * 260

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'CA$' },
    { code: 'AED', name: 'UAE Dirham', symbol: 'AED' },
    { code: 'SAR', name: 'Saudi Riyal', symbol: 'SAR' }
  ]

  const handleInputChange = (e) => {
    const value = e.target.value

    // Allow only numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setInputValue(value)

      // Parse the value, if empty set to 0
      const numValue = value === '' ? 0 : parseFloat(value)
      if (!isNaN(numValue)) {
        setHourlyRate(numValue)
      }
    }
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <motion.div
      className="calculator-card calculator-card-sideways"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Left Side - Inputs */}
      <div className="calculator-inputs">
        {/* Header */}
        <div className="calculator-header">
          <div className="header-icon">
            <Clock size={24} />
          </div>
          <h2 className="calculator-title">AI Automation</h2>
        </div>

        {/* Hours spent on admin Slider */}
        <div className="input-section">
          <label className="input-label">
            Hours spent on admin: <span className="value-display">{hoursPerDay === 12 ? '12+' : hoursPerDay}</span>
          </label>
          <div className="slider-container">
            <input
              type="range"
              min="0"
              max="12"
              value={hoursPerDay}
              onChange={(e) => {
                setHoursPerDay(parseInt(e.target.value))
                setHasInteracted(true)
              }}
              className="slider"
            />
            <div className="slider-markers">
              <span>0</span>
              <span>6</span>
              <span>12+</span>
            </div>
          </div>
        </div>

        {/* Number of staff Slider */}
        <div className="input-section">
          <label className="input-label">
            Number of staff: <span className="value-display">{numStaff === 20 ? '20+' : numStaff}</span>
          </label>
          <div className="slider-container">
            <input
              type="range"
              min="0"
              max="20"
              value={numStaff}
              onChange={(e) => {
                setNumStaff(parseInt(e.target.value))
                setHasInteracted(true)
              }}
              className="slider"
            />
            <div className="slider-markers">
              <span>0</span>
              <span>10</span>
              <span>20+</span>
            </div>
          </div>
        </div>

        {/* Currency Selector */}
        <div className="input-section">
          <label className="input-label">
            Currency
          </label>
          <div className="currency-selector-wrapper">
            <Globe className="input-icon" size={18} />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="currency-select"
              data-testid="currency-select-automation"
            >
              {currencies.map((curr) => (
                <option key={curr.code} value={curr.code}>
                  {curr.code} - {curr.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Hourly Rate Input */}
        <div className="input-section">
          <label className="input-label">
            Hourly Rate ({currencies.find(c => c.code === currency)?.symbol})
          </label>
          <div className="input-wrapper">
            <span className="currency-symbol-icon">{currencies.find(c => c.code === currency)?.symbol}</span>
            <input
              type="text"
              inputMode="numeric"
              value={inputValue}
              onChange={(e) => {
                handleInputChange(e)
                setHasInteracted(true)
              }}
              onBlur={(e) => {
                // Format the input on blur
                if (e.target.value === '' || parseFloat(e.target.value) === 0) {
                  setInputValue('0')
                  setHourlyRate(0)
                } else {
                  setInputValue(hourlyRate.toString())
                }
              }}
              className="text-input"
              placeholder="50"
              data-testid="hourly-rate-input"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Results */}
      {hasInteracted && (
        <motion.div
          className="calculator-results"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="results-section">
        {/* Per Staff Member Results */}
        <div className="result-group">
          <div className="result-group-title">Per Staff Member</div>
          <div className="result-item-compact">
            <div className="result-content">
              <div className="result-label">Lost revenue per day</div>
              <motion.div
                className="result-amount-small"
                key={`daily-staff-${dailyLossPerStaff}-${currency}`}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                data-testid="daily-loss-per-staff"
              >
                {formatCurrency(dailyLossPerStaff)}
              </motion.div>
            </div>
          </div>
          <div className="result-item-compact">
            <div className="result-content">
              <div className="result-label">Lost revenue per month</div>
              <motion.div
                className="result-amount-small"
                key={`monthly-staff-${monthlyLossPerStaff}-${currency}`}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                data-testid="monthly-loss-per-staff"
              >
                {formatCurrency(monthlyLossPerStaff)}
              </motion.div>
            </div>
          </div>
          <div className="result-item-compact">
            <div className="result-content">
              <div className="result-label">Lost revenue per year</div>
              <motion.div
                className="result-amount-small"
                key={`yearly-staff-${yearlyLossPerStaff}-${currency}`}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                data-testid="yearly-loss-per-staff"
              >
                {formatCurrency(yearlyLossPerStaff)}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Total Results */}
        <div className="result-group">
          <div className="result-group-title">Total ({numStaff} staff)</div>
          <div className="result-item-compact">
            <div className="result-content">
              <div className="result-label">Lost revenue per day</div>
              <motion.div
                className="result-amount-small"
                key={`daily-total-${totalDailyLoss}-${currency}`}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                data-testid="total-daily-loss"
              >
                {formatCurrency(totalDailyLoss)}
              </motion.div>
            </div>
          </div>
          <div className="result-item-compact">
            <div className="result-content">
              <div className="result-label">Lost revenue per month</div>
              <motion.div
                className="result-amount-small"
                key={`monthly-total-${totalMonthlyLoss}-${currency}`}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                data-testid="total-monthly-loss"
              >
                {formatCurrency(totalMonthlyLoss)}
              </motion.div>
            </div>
          </div>
          <div className="result-item-compact highlight">
            <div className="result-content">
              <div className="result-label">Lost revenue per year</div>
              <motion.div
                className="result-amount-medium"
                key={`yearly-total-${totalYearlyLoss}-${currency}`}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                data-testid="total-yearly-loss"
              >
                {formatCurrency(totalYearlyLoss)}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="calculator-footer">
        <p className="disclaimer">*Based on productive hours lost to admin tasks</p>
        <motion.a
          href="https://calendly.com/agentcorti/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Automate Your Tasks - Book Demo
        </motion.a>
      </div>
        </motion.div>
      )}
    </motion.div>
  )
}
