'use client'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI Solutions | Next-Generation Voice Agents & Intelligent Automation</title>
        <meta name="description" content="Transform your business with cutting-edge AI voice agents, intelligent automation, and marketing intelligence. Join 500+ companies reducing costs by 85% while delivering exceptional customer experiences." />
        <meta name="keywords" content="AI voice agents, intelligent automation, marketing intelligence, business automation, AI solutions, voice calling agents, enterprise AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aisolutions.com/" />
        <meta property="og:title" content="AI Solutions | Next-Generation Voice Agents & Intelligent Automation" />
        <meta property="og:description" content="Transform your business with cutting-edge AI voice agents, intelligent automation, and marketing intelligence." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aisolutions.com/" />
        <meta property="twitter:title" content="AI Solutions | Next-Generation Voice Agents & Intelligent Automation" />
        <meta property="twitter:description" content="Transform your business with cutting-edge AI voice agents, intelligent automation, and marketing intelligence." />
      </Head>

      <Navigation />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
    </div>
  )
}