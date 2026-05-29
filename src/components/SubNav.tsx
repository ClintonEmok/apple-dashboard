'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SubNav() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Dashboard' },
    { href: '/analytics', label: 'Analytics' },
    { href: '/components', label: 'Components' },
    { href: '/tokens', label: 'Design Tokens' },
  ];

  return (
    <div className="sub-nav">
      <div className="sub-nav-inner">
        <span className="sub-nav-product">Apple Design System</span>
        <div className="sub-nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/" className="btn-sm stay">+ New</Link>
        </div>
      </div>
    </div>
  );
}
