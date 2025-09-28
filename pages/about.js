import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>About - Mo Website</title>
        <meta name="description" content="About page" />
      </Head>

      <main>
        <h1>About</h1>
        <p>This is the about page of Mo Website.</p>
      </main>
    </div>
  )
}