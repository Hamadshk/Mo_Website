import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <nav style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
        <Link href="/" style={{ marginRight: '20px' }}>
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
      </nav>
      <main style={{ padding: '20px' }}>
        {children}
      </main>
    </div>
  )
}