'use client';

import Link from 'next/link';

export default function GlobalNav() {
  return (
    <nav className="global-nav">
      <div className="global-nav-inner">
        <Link href="/" style={{ fontWeight: 600, fontSize: 13, opacity: 0.9, color: 'var(--apple-on-dark)', textDecoration: 'none', marginRight: 'auto' }}>
           Design Showcase
        </Link>
        <div className="nav-links" style={{ display: 'flex', gap: 24 }}>
          <Link href="/">Dashboard</Link>
          <Link href="/analytics">Analytics</Link>
          <Link href="/components">Components</Link>
          <Link href="/tokens">Tokens</Link>
        </div>
        <div style={{ display: 'flex', gap: 20, marginLeft: 'auto' }}>
          <a href="#">Search</a>
          <a href="#">Menu</a>
        </div>
      </div>
    </nav>
  );
}
