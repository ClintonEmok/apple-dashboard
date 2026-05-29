export const stats = [
  { label: 'Active Users', value: '12,847', delta: '+8.2%', dir: 'up', barWidth: '72%', color: 'var(--apple-primary)', icon: '👤' },
  { label: 'Revenue (MTD)', value: '$48,210', delta: '+12.4%', dir: 'up', barWidth: '85%', color: '#30b94e', icon: '💰' },
  { label: 'Conversion', value: '3.47%', delta: '+0.8pp', dir: 'up', barWidth: '60%', color: '#ff9f0a', icon: '📈' },
  { label: 'Response Time', value: '214ms', delta: '+12ms from target', dir: 'down', barWidth: '45%', color: '#e34e4e', icon: '⚡' },
]

export const topPages = [
  { page: '/dashboard', visitors: '4,291', bounce: '22%', delta: '+8%', dir: 'up' },
  { page: '/pricing', visitors: '3,847', bounce: '18%', delta: '+12%', dir: 'up' },
  { page: '/features', visitors: '3,102', bounce: '25%', delta: '-3%', dir: 'down' },
  { page: '/docs', visitors: '2,654', bounce: '31%', delta: '+5%', dir: 'up' },
  { page: '/blog', visitors: '2,018', bounce: '45%', delta: '-2%', dir: 'down' },
]

export const trafficSources = [
  { label: 'Organic Search', pct: 42, color: 'var(--apple-primary)' },
  { label: 'Direct', pct: 28, color: 'var(--apple-primary)', opacity: 0.7 },
  { label: 'Referral', pct: 18, color: '#30b94e' },
  { label: 'Social', pct: 12, color: '#ff9f0a' },
]

export const activity = [
  { dot: 'blue', title: 'New deployment pushed to production', meta: 'v2.4.1 by @alex', time: '2m' },
  { dot: 'green', title: 'Stripe sync completed', meta: '1,247 transactions processed', time: '14m' },
  { dot: 'orange', title: 'CPU threshold warning — us-east-1', meta: 'Auto-scaled 2 instances', time: '32m' },
  { dot: 'purple', title: 'User import from CSV completed', meta: '342 new accounts created', time: '1h' },
  { dot: 'blue', title: 'Database backup finished', meta: '2.4 GB · 12s duration', time: '2h' },
]

export const projects = [
  { name: 'Dashboard Redesign', lead: 'Sarah Chen', status: 'Live', badge: 'badge-live', tasks: '24 / 24', due: 'Completed', progress: 100, color: '#30b94e' },
  { name: 'Payment API v2', lead: 'Marcus Kim', status: 'Beta', badge: 'badge-beta', tasks: '18 / 23', due: 'Jun 12', progress: 78, color: 'var(--apple-primary)' },
  { name: 'Mobile App — iOS', lead: 'Priya Patel', status: 'Dev', badge: 'badge-dev', tasks: '9 / 31', due: 'Jul 8', progress: 29, color: '#ff9f0a' },
  { name: 'Data Pipeline', lead: 'James Wu', status: 'Paused', badge: 'badge-paused', tasks: '22 / 28', due: 'TBD', progress: 79, color: '#e34e4e' },
  { name: 'Customer Portal', lead: 'Emma de Vries', status: 'Beta', badge: 'badge-beta', tasks: '15 / 18', due: 'Jun 5', progress: 83, color: 'var(--apple-primary)' },
]

export const devices = [
  { label: 'Desktop', pct: 65, color: 'var(--apple-primary)' },
  { label: 'Mobile', pct: 25, color: '#30b94e' },
  { label: 'Tablet', pct: 10, color: '#ff9f0a' },
]

export const colors = [
  { name: 'Action Blue', hex: '#0066cc', usage: 100, role: 'Primary interactive — all CTAs, links, focus' },
  { name: 'Focus Blue', hex: '#0071e3', usage: 80, role: 'Focus ring on buttons' },
  { name: 'Sky Link Blue', hex: '#2997ff', usage: 60, role: 'Inline links on dark surfaces' },
  { name: 'Ink', hex: '#1d1d1f', usage: 90, role: 'All text on light surfaces' },
  { name: 'Parchment', hex: '#f5f5f7', usage: 70, role: 'Alternating tile / footer surface' },
  { name: 'Canvas', hex: '#ffffff', usage: 50, role: 'Primary background' },
  { name: 'Dark Tile 1', hex: '#272729', usage: 40, role: 'Dark product tile surface' },
  { name: 'Pure Black', hex: '#000000', usage: 20, role: 'Global nav bar background' },
]

export const typographySizes = [
  { size: 10, name: 'Micro Legal', weight: 400, tracking: '-0.08px', lineHeight: 1.3 },
  { size: 12, name: 'Nav Link / Fine Print', weight: 400, tracking: '-0.12px', lineHeight: 1.0 },
  { size: 14, name: 'Caption / Button Utility', weight: 400, tracking: '-0.224px', lineHeight: 1.43 },
  { size: 17, name: 'Body / Dense Link', weight: 400, tracking: '-0.374px', lineHeight: 1.47 },
  { size: 21, name: 'Tagline', weight: 600, tracking: '0.231px', lineHeight: 1.19 },
  { size: 24, name: 'Lead Airy', weight: 300, tracking: '0', lineHeight: 1.5 },
  { size: 28, name: 'Lead', weight: 400, tracking: '0.196px', lineHeight: 1.14 },
  { size: 40, name: 'Display LG', weight: 600, tracking: '0', lineHeight: 1.1 },
  { size: 56, name: 'Hero Display', weight: 600, tracking: '-0.28px', lineHeight: 1.07 },
]
