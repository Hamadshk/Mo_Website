import Head from 'next/head'
import { useEffect } from 'react'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.body.classList.add('agentcorti-page')

    return () => {
      document.body.classList.remove('agentcorti-page')
    }
  }, [])

  return (
    <>
      <Head>
        <title>Privacy Policy - AgentCorti</title>
        <meta name="description" content="Privacy Policy for AgentCorti" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="privacy-policy-page">
        {/* Background Elements */}
        <div className="background-container">
          <div className="gradient-background"></div>
          <div className="noise-texture"></div>
          <div className="gradient-mesh"></div>
        </div>

        {/* Fixed Navigation */}
        <header className="main-navigation">
          <nav className="nav-container">
            {/* Logo */}
            <div className="logo-section">
              <a href="/">
                <img
                  src="/images/Mo_Logo.jpeg"
                  alt="Mo Logo"
                  className="logo-image-corti"
                />
              </a>
            </div>

            {/* Navigation Menu */}
            <div className="nav-menu">
              <a href="/#home" className="nav-link">Home</a>
              <a href="/#services" className="nav-link">Services</a>
              <a href="/#industries" className="nav-link">Industries</a>
              <a href="/#contact" className="nav-link">Contact</a>
            </div>

            {/* CTA Button */}
            <a href="https://calendly.com/agentcorti/30min" target="_blank" rel="noopener noreferrer" className="nav-cta-button">
              Book A Call
            </a>
          </nav>
        </header>

        {/* Privacy Policy Content */}
        <main className="privacy-content-wrapper">
          <div className="privacy-content-container">
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-updated">Last Updated: 20 October 2025</p>

            <div className="privacy-info">
              <p><strong>Business Name:</strong> AgentCorti</p>
              <p><strong>Contact Email:</strong> agentcorti@gmail.com</p>
              <p><strong>Location:</strong> London, United Kingdom</p>
            </div>

            <hr className="privacy-divider" />

            <section className="privacy-section">
              <h2>1. Who We Are</h2>
              <p>
                AgentCorti ("we", "us", or "our") is an AI automation and virtual agent service provider.
                We help businesses streamline workflows, automate communication, and enhance productivity using AI technology.
              </p>
              <p>
                We are committed to protecting your personal data and respecting your privacy. This Policy explains
                what data we collect, how we use it, and your rights.
              </p>
            </section>

            <hr className="privacy-divider" />

            <section className="privacy-section">
              <h2>2. Data We Collect</h2>
              <p>We may collect the following information:</p>
              <ul>
                <li>Contact details (name, email, phone)</li>
                <li>Business information you voluntarily provide</li>
                <li>Cookies and analytics data (Google Analytics, Meta Pixel, etc.)</li>
                <li>Marketing preferences</li>
                <li>Payment details (processed securely via Stripe or PayPal — we never see full card information)</li>
                <li>Call, chatbot, WhatsApp or voice agent interactions (where applicable)</li>
                <li>Operational metrics (e.g., number of calls handled by AI agents — no sensitive data)</li>
              </ul>
              <p>
                We do not intentionally collect or store sensitive personal data unless a client specifically
                requests and consents to it.
              </p>
            </section>

            <hr className="privacy-divider" />

            <section className="privacy-section">
              <h2>3. How We Use Your Data</h2>
              <p>We use your data to:</p>
              <ul>
                <li>Provide our AI services and automations</li>
                <li>Improve user experience</li>
                <li>Respond to enquiries</li>
                <li>Send marketing communications (with consent)</li>
                <li>Track site performance and advertising</li>
                <li>Process payments</li>
                <li>Provide analytics and metrics to clients</li>
              </ul>
            </section>

            <hr className="privacy-divider" />

            <section className="privacy-section">
              <h2>4. Cookies & Tracking</h2>
              <p>
                We use cookies and tracking tools such as Google Analytics and Meta Pixel to improve our website
                and marketing performance. You can manage cookie preferences in your browser at any time.
              </p>
            </section>

            <hr className="privacy-divider" />

            <section className="privacy-section">
              <h2>5. AI, Voice & Automation Data</h2>
              <p>
                When using our AI agents, voice agents, or chat systems, we may process interaction data through
                platforms such as:
              </p>
              <ul>
                <li>OpenAI</li>
                <li>Vapid (voice agent platform)</li>
                <li>WhatsApp Business</li>
                <li>n8n / automations</li>
                <li>GoHighLevel (CRM)</li>
                <li>Calendly (bookings)</li>
              </ul>
              <p>
                We process only the data required to deliver the service. In many cases, data is stored on your
                chosen cloud systems, not ours.
              </p>
            </section>

            <hr className="privacy-divider" />

            <section className="privacy-section">
              <h2>6. Data Storage & Retention</h2>
              <ul>
                <li>We store minimal data ourselves (mainly analytics and operational metrics)</li>
                <li>Client data processed by AI agents is stored on your own CRM or cloud platform where applicable</li>
                <li>We retain non-sensitive data for long-term operational and record-keeping purposes</li>
                <li>You may request deletion at any time (see Section 9)</li>
              </ul>
            </section>

            <hr className="privacy-divider" />

            <section className="privacy-section">
              <h2>7. Sharing Your Data</h2>
              <p>We may share data with trusted third-party processors such as:</p>
              <ul>
                <li>OpenAI</li>
                <li>Google</li>
                <li>Meta</li>
                <li>Stripe</li>
                <li>Calendly</li>
                <li>WhatsApp</li>
                <li>Vapid</li>
                <li>GoHighLevel</li>
                <li>n8n</li>
              </ul>
              <p>We never sell your data.</p>
            </section>

            <hr className="privacy-divider" />

            <section className="privacy-section">
              <h2>8. International Data Transfers</h2>
              <p>
                As a global service, your data may be processed internationally using secure, GDPR-approved
                Standard Contractual Clauses or equivalent safeguards.
              </p>
            </section>

            <hr className="privacy-divider" />

            <section className="privacy-section">
              <h2>9. Your Rights</h2>
              <p>Under GDPR and applicable laws, you may request:</p>
              <ul>
                <li>Access to your data</li>
                <li>Correction</li>
                <li>Deletion ("Right to be Forgotten")</li>
                <li>Data export</li>
                <li>To opt-out of marketing</li>
              </ul>
              <p>Contact us at <a href="mailto:agentcorti@gmail.com">agentcorti@gmail.com</a> to make a request.</p>
            </section>

            <hr className="privacy-divider" />

            <section className="privacy-section">
              <h2>10. Children</h2>
              <p>We do not knowingly collect or process data relating to children or minors.</p>
            </section>

            <hr className="privacy-divider" />

            <section className="privacy-section">
              <h2>11. Security</h2>
              <p>
                We use encryption, secure third-party platforms, and access controls to safeguard your data.
              </p>
            </section>

            <hr className="privacy-divider" />

            <section className="privacy-section">
              <h2>12. Updates to This Policy</h2>
              <p>
                We may update this policy occasionally. The latest version will always be available on our website.
              </p>
            </section>

            <hr className="privacy-divider" />

            <section className="privacy-section">
              <h2>13. Contact</h2>
              <p>
                If you have any questions or concerns about your data, contact:<br />
                📌 <a href="mailto:agentcorti@gmail.com">agentcorti@gmail.com</a>
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
