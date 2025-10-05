'use client'
import AIVoiceReceptionist from './AIVoiceReceptionist'
import AIAutomation from './AIAutomation'

export default function DualCalculators() {
  return (
    <>
      <div className="dual-calculators-container">
        <AIVoiceReceptionist />
        <AIAutomation />
      </div>

      <style jsx global>{`
        .dual-calculators-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        .calculator-card {
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 215, 0, 0.4);
          border-radius: 20px;
          padding: 24px;
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.1),
            0 0 20px rgba(255, 215, 0, 0.2);
          backdrop-filter: blur(15px) saturate(180%);
          -webkit-backdrop-filter: blur(15px) saturate(180%);
        }

        .calculator-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .header-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: rgba(255, 215, 0, 0.15);
          border: 1px solid rgba(255, 215, 0, 0.5);
          border-radius: 14px;
          color: #FFD700;
          margin: 0 auto 10px;
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
        }

        .calculator-title {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .input-section {
          margin-bottom: 16px;
        }

        .input-label {
          display: block;
          color: rgba(255, 255, 255, 0.9);
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .value-display {
          color: #FFD700;
          font-weight: 700;
          font-size: 14px;
          margin-left: 6px;
        }

        .slider-container {
          position: relative;
        }

        .slider {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          outline: none;
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          background: linear-gradient(135deg, #FFD700, #1e3a8a);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(255, 215, 0, 0.4);
          transition: all 0.2s ease;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 3px 10px rgba(255, 215, 0, 0.6);
        }

        .slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          background: linear-gradient(135deg, #FFD700, #1e3a8a);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(255, 215, 0, 0.4);
          transition: all 0.2s ease;
        }

        .slider::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 3px 10px rgba(255, 215, 0, 0.6);
        }

        .slider-markers {
          display: flex;
          justify-content: space-between;
          margin-top: 4px;
          padding: 0 3px;
        }

        .slider-markers span {
          color: rgba(255, 255, 255, 0.5);
          font-size: 10px;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          color: rgba(255, 215, 0, 0.8);
          width: 18px;
          height: 18px;
        }

        .currency-symbol-icon {
          position: absolute;
          left: 12px;
          color: rgba(255, 215, 0, 0.8);
          font-size: 13px;
          font-weight: 600;
          pointer-events: none;
          z-index: 1;
          display: flex;
          align-items: center;
          height: 100%;
        }

        .text-input {
          width: 100%;
          padding: 10px 12px 10px 50px;
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 215, 0, 0.3);
          border-radius: 10px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          outline: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
        }

        .text-input:focus {
          border-color: #FFD700;
          box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.15);
        }

        .text-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .currency-selector-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .currency-select {
          width: 100%;
          padding: 10px 12px 10px 36px;
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 215, 0, 0.3);
          border-radius: 10px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          outline: none;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23FFD700' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 36px;
        }

        .currency-select:focus {
          border-color: #FFD700;
          box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.15);
        }

        .currency-select option {
          background: #1a1a1a;
          color: #ffffff;
          padding: 10px;
        }

        .results-section {
          margin: 18px 0;
          padding: 16px;
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(255, 215, 0, 0.25);
          border-radius: 14px;
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
        }

        .result-group {
          margin-bottom: 12px;
        }

        .result-group:last-child {
          margin-bottom: 0;
        }

        .result-group-title {
          color: rgba(255, 215, 0, 0.9);
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .result-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .result-item:last-child {
          border-bottom: none;
        }

        .result-item-compact {
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .result-item-compact:last-child {
          border-bottom: none;
        }

        .result-item.highlight,
        .result-item-compact.highlight {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05));
          border-radius: 8px;
          padding: 10px;
          margin-top: 6px;
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
          font-size: 11px;
          font-weight: 500;
          margin-bottom: 2px;
        }

        .result-amount {
          color: #ef4444;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .result-amount-small {
          color: #ef4444;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .result-amount-medium {
          color: #ef4444;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .result-amount.large {
          font-size: 22px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .calculator-footer {
          margin-top: 16px;
        }

        .disclaimer {
          color: rgba(255, 255, 255, 0.5);
          font-size: 10px;
          text-align: center;
          margin-bottom: 10px;
        }

        .cta-button {
          display: block;
          width: 100%;
          padding: 12px 18px;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #000000;
          font-size: 13px;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(255, 215, 0, 0.4);
        }

        .cta-button:hover {
          background: linear-gradient(135deg, #FFA500 0%, #FFD700 100%);
          box-shadow: 0 6px 30px rgba(255, 215, 0, 0.7);
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .dual-calculators-container {
            grid-template-columns: 1fr;
            gap: 24px;
            max-width: 600px;
          }

          .calculator-card {
            padding: 28px;
          }

          .calculator-title {
            font-size: 22px;
          }
        }

        @media (max-width: 768px) {
          .dual-calculators-container {
            gap: 20px;
          }

          .calculator-card {
            padding: 24px;
          }

          .calculator-title {
            font-size: 20px;
          }

          .result-amount {
            font-size: 17px;
          }

          .result-amount.large {
            font-size: 20px;
          }

          .result-amount-small {
            font-size: 14px;
          }

          .result-amount-medium {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .calculator-card {
            padding: 20px;
          }

          .calculator-title {
            font-size: 18px;
          }

          .header-icon {
            width: 44px;
            height: 44px;
          }

          .result-amount {
            font-size: 16px;
          }

          .result-amount.large {
            font-size: 19px;
          }

          .result-amount-small {
            font-size: 13px;
          }

          .result-amount-medium {
            font-size: 15px;
          }

          .cta-button {
            font-size: 13px;
            padding: 11px 16px;
          }
        }
      `}</style>
    </>
  )
}
