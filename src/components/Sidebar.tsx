'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sections = [
  {
    title: 'Dashboard',
    links: [
      { href: '/', label: 'Overview' },
      { href: '/analytics', label: 'Analytics' },
      { href: '/analytics', label: 'Reports' },
    ],
  },
  {
    title: 'Components',
    links: [
      { href: '/components', label: 'Buttons' },
      { href: '/components', label: 'Navigation' },
      { href: '/components', label: 'Cards & Tiles' },
      { href: '/components', label: 'Forms & Inputs' },
      { href: '/components', label: 'Data Display' },
    ],
  },
  {
    title: 'Design System',
    links: [
      { href: '/tokens', label: 'Color Tokens' },
      { href: '/tokens', label: 'Typography' },
      { href: '/tokens', label: 'Spacing & Radius' },
    ],
  },
];

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
      <div className="sidebar__close" onClick={onClose}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      {sections.map((section) => (
        <div className="sidebar-section" key={section.title}>
          <h4>{section.title}</h4>
          {section.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={isActive(link.href) ? 'active-link' : ''}
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ))}
      <div className="sidebar-section" style={{ borderTop: '1px solid var(--apple-hairline)', paddingTop: 16 }}>
        <Link href="#" style={{ fontSize: 13, color: 'var(--apple-ink-muted-48)' }} onClick={onClose}>Settings</Link>
        <Link href="#" style={{ fontSize: 13, color: 'var(--apple-ink-muted-48)' }} onClick={onClose}>Sign Out</Link>
      </div>
    </aside>
  );
}
