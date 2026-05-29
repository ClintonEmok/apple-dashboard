'use client';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 48, marginBottom: 16 }}>
      <hr style={{ flex: 1, border: 'none', borderTop: '1px solid var(--apple-hairline)' }} />
      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.8px', textTransform: 'uppercase', color: 'var(--apple-ink-muted-48)', whiteSpace: 'nowrap' }}>{children}</span>
      <hr style={{ flex: 1, border: 'none', borderTop: '1px solid var(--apple-hairline)' }} />
    </div>
  );
}

function ComponentCard({ title, children, subtitle }: { title: string; children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="apple-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 24px 0' }}>
        <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px' }}>{title}</h3>
        {subtitle && <span style={{ fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>{subtitle}</span>}
      </div>
      <div style={{ padding: 24 }}>{children}</div>
    </div>
  );
}

export default function ComponentsPage() {
  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: 'var(--apple-font-display)', fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: 'var(--apple-ink)' }}>Components</h1>
        <p style={{ fontSize: 17, fontWeight: 400, lineHeight: 1.47, letterSpacing: '-0.374px', color: 'var(--apple-ink-muted-48)', marginTop: 4 }}>
          Every Apple UI component, visualized and documented. All 7 button variants, navigation patterns, form elements, cards, and tiles.
        </p>
      </div>

      {/* === BUTTONS === */}
      <SectionTitle>Buttons — 7 Variants</SectionTitle>

      <ComponentCard title="All Button Variants" subtitle="1 radius family · 1 accent color">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', marginBottom: 24 }}>
          <button className="btn btn-primary">Learn More</button>
          <button className="btn btn-secondary-pill">Buy</button>
          <button className="btn btn-dark-utility">Sign In</button>
          <button className="btn btn-pearl-capsule">Options</button>
          <button className="btn" style={{ background: 'var(--apple-primary)', color: 'var(--apple-on-primary)', fontSize: 18, fontWeight: 300, padding: '14px 28px', borderRadius: 'var(--apple-rounded-pill)' }}>Shop Now</button>
          <button className="btn" style={{ width: 44, height: 44, borderRadius: 'var(--apple-rounded-pill)', background: 'var(--apple-chip)', color: 'var(--apple-ink)', fontSize: 18, opacity: 0.85 }}>▶</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
          <div><code style={{ background: 'var(--apple-canvas-parchment)', padding: '2px 6px', borderRadius: 4 }}>button-primary</code> — Blue pill, 17px/400, 11px×22px, Action Blue #0066cc</div>
          <div><code style={{ background: 'var(--apple-canvas-parchment)', padding: '2px 6px', borderRadius: 4 }}>button-secondary-pill</code> — Ghost pill, 1px border, same cadence</div>
          <div><code style={{ background: 'var(--apple-canvas-parchment)', padding: '2px 6px', borderRadius: 4 }}>button-dark-utility</code> — Ink bg, 14px, sm radius (8px), nav actions</div>
          <div><code style={{ background: 'var(--apple-canvas-parchment)', padding: '2px 6px', borderRadius: 4 }}>button-pearl-capsule</code> — Pearl bg, 14px, md radius (11px), product cards</div>
          <div><code style={{ background: 'var(--apple-canvas-parchment)', padding: '2px 6px', borderRadius: 4 }}>button-store-hero</code> — Large, 18px/300 weight, 14px×28px, store landing</div>
          <div><code style={{ background: 'var(--apple-canvas-parchment)', padding: '2px 6px', borderRadius: 4 }}>button-icon-circular</code> — 44px circle, translucent chip bg, overflow</div>
        </div>

        <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--apple-divider-soft)', fontSize: 12, color: 'var(--apple-ink-muted-48)', display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <span>🎯 <code>transform: scale(0.95)</code> on press — Apple micro-interaction</span>
          <span>🎯 Focus ring: 2px solid #0071e3</span>
          <span>🎯 Single blue accent — no secondary brand color</span>
        </div>
      </ComponentCard>

      {/* === NAVIGATION === */}
      <SectionTitle>Navigation Components</SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <ComponentCard title="global-nav" subtitle="Fixed top bar">
          <div style={{ background: 'var(--apple-black)', borderRadius: 'var(--apple-rounded-sm)', height: 44, display: 'flex', alignItems: 'center', padding: '0 20px', gap: 20 }}>
            <span style={{ color: 'var(--apple-on-dark)', opacity: 0.9, fontSize: 13, fontWeight: 600, marginRight: 'auto' }}></span>
            {['Store','Mac','iPad','iPhone','Watch'].map((l) => <span key={l} style={{ color: 'var(--apple-on-dark)', opacity: 0.6, fontSize: 11 }}>{l}</span>)}
            <span style={{ color: 'var(--apple-on-dark)', opacity: 0.6, fontSize: 11, marginLeft: 'auto' }}>🔍</span>
          </div>
          <div style={{ marginTop: 12, fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
            Surface: <code>#000000</code> · Height: 44px · Type: nav-link (12px/400) · Opacity: 0.7
          </div>
        </ComponentCard>

        <ComponentCard title="sub-nav-frosted" subtitle="Product-specific nav">
          <div style={{ background: 'rgba(245,245,247,0.8)', backdropFilter: 'blur(20px)', borderRadius: 'var(--apple-rounded-sm)', height: 52, display: 'flex', alignItems: 'center', padding: '0 20px', gap: 20, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            <span style={{ fontSize: 21, fontWeight: 600, letterSpacing: '0.231px', color: 'var(--apple-ink)' }}>iPhone</span>
            <span style={{ fontSize: 13, color: 'var(--apple-ink)', opacity: 0.65, marginLeft: 'auto' }}>Overview</span>
            <span style={{ fontSize: 13, color: 'var(--apple-ink)', opacity: 0.65 }}>Tech Specs</span>
            <span style={{ background: 'var(--apple-primary)', color: 'var(--apple-on-primary)', fontSize: 12, padding: '4px 14px', borderRadius: 'var(--apple-rounded-pill)' }}>Buy</span>
          </div>
          <div style={{ marginTop: 12, fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
            Height: 52px · Backdrop blur: 20px · Surface: Parchment @ 80% opacity
          </div>
        </ComponentCard>
      </div>

      {/* === PRODUCT TILES + FORMS === */}
      <SectionTitle>Surfaces & Inputs</SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <ComponentCard title="product-tile-dark" subtitle="Full-bleed · 80px padding">
          <div style={{ background: 'var(--apple-tile-1)', color: 'var(--apple-on-dark)', padding: 32, borderRadius: 'var(--apple-rounded-sm)', textAlign: 'center' }}>
            <h4 style={{ fontSize: 21, fontWeight: 600, letterSpacing: '0.231px', marginBottom: 8 }}>MacBook Pro</h4>
            <p style={{ fontSize: 14, color: 'var(--apple-body-muted)', marginBottom: 16 }}>M4 chip. Built for Apple Intelligence.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button className="btn btn-primary" style={{ fontSize: 14, padding: '7px 18px' }}>Learn more</button>
              <button className="btn" style={{ fontSize: 14, padding: '7px 18px', borderRadius: 'var(--apple-rounded-pill)', background: 'transparent', color: 'var(--apple-primary-on-dark)', border: '1px solid var(--apple-primary-on-dark)' }}>Buy</button>
            </div>
            <div style={{ marginTop: 24, height: 60, background: 'rgba(255,255,255,0.06)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'rgba(0,0,0,0.22) 3px 5px 30px' }}>
              <div style={{ width: 160, height: 30, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)', borderRadius: 4 }}></div>
            </div>
          </div>
          <div style={{ marginTop: 12, fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
            Product shadow: <code>rgba(0,0,0,0.22) 3px 5px 30px</code> — only on imagery, never on UI
          </div>
        </ComponentCard>

        <ComponentCard title="search-input + configurator chips" subtitle="Pill-shaped inputs">
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input className="search-input" type="text" defaultValue="iPhone case" placeholder="Search accessories..." />
          </div>
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 12, color: 'var(--apple-ink-muted-48)', marginBottom: 12 }}>Configurator option chips:</div>
            <div className="chip-grid">
              {[
                { label: 'Black', hex: '#1d1d1f', price: '$999', selected: true },
                { label: 'White', hex: '#f5f5f7', price: '$999' },
                { label: 'Purple', hex: '#af52de', price: '$1,099' },
                { label: 'Green', hex: '#30b94e', price: '$999' },
              ].map((c) => (
                <div key={c.label} className={`chip${c.selected ? ' selected' : ''}`}>
                  <div style={{ width: 20, height: 20, borderRadius: 4, background: c.hex, flexShrink: 0 }}></div>
                  <span style={{ fontSize: 13, color: 'var(--apple-ink)', flex: 1 }}>{c.label}</span>
                  <span style={{ fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>{c.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 12, fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
            Search: pill radius · 44px height · 17px body. Chips: pill radius, selected = 2px primary-focus border
          </div>
        </ComponentCard>
      </div>

      {/* === STICKY BAR + UTILITY CARDS === */}
      <SectionTitle>Store Patterns</SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <ComponentCard title="floating-sticky-bar" subtitle="iPhone buy page floating bar">
          <div style={{ background: 'rgba(245,245,247,0.85)', backdropFilter: 'blur(20px)', borderRadius: 'var(--apple-rounded-lg)', height: 64, display: 'flex', alignItems: 'center', padding: '12px 24px', border: '1px solid rgba(0,0,0,0.06)' }}>
            <span style={{ fontSize: 17, color: 'var(--apple-ink-muted-80)' }}>iPhone 17 Pro</span>
            <span style={{ fontSize: 17, color: 'var(--apple-ink)', marginLeft: 12 }}>$1,199</span>
            <div style={{ marginLeft: 'auto' }}>
              <button className="btn btn-primary" style={{ fontSize: 15, padding: '8px 20px' }}>Add to Bag</button>
            </div>
          </div>
          <div style={{ marginTop: 12, fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
            Height: 64px · Parchment @85% · backdrop-filter · fixed bottom on scroll
          </div>
        </ComponentCard>

        <ComponentCard title="store-utility-card" subtitle="Accessories grid · 18px radius">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { icon: '🎧', name: 'AirPods Pro', price: '$249' },
              { icon: '⌚', name: 'Apple Watch', price: '$399' },
              { icon: '📱', name: 'MagSafe Case', price: '$49' },
            ].map((item) => (
              <div key={item.name} style={{ background: 'var(--apple-canvas)', border: '1px solid var(--apple-hairline)', borderRadius: 'var(--apple-rounded-lg)', padding: 16, textAlign: 'center' }}>
                <div style={{ width: '100%', height: 70, background: 'var(--apple-canvas-parchment)', borderRadius: 'var(--apple-rounded-sm)', marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{item.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--apple-ink)' }}>{item.name}</div>
                <div style={{ fontSize: 13, color: 'var(--apple-ink-muted-48)', marginBottom: 6 }}>{item.price}</div>
                <a href="#" style={{ fontSize: 13, color: 'var(--apple-primary)', textDecoration: 'none' }}>Buy →</a>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12, fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
            1px hairline · lg radius (18px) · 24px padding · image at sm radius (8px)
          </div>
        </ComponentCard>
      </div>

      {/* === DENSE FOOTER === */}
      <SectionTitle>Footer — Dense Link Columns</SectionTitle>

      <ComponentCard title="dense-link footer pattern" subtitle="2.41 line-height">
        <div style={{ background: 'var(--apple-canvas-parchment)', borderRadius: 'var(--apple-rounded-sm)', padding: 32 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 24 }}>
            {[
              { title: 'Shop & Learn', links: ['Store','Mac','iPad','iPhone','Watch','Vision'] },
              { title: 'Services', links: ['Apple Music','Apple TV+','iCloud','Apple One','Apple Books'] },
              { title: 'Apple Values', links: ['Accessibility','Environment','Privacy','Racial Equity'] },
              { title: 'About Apple', links: ['Newsroom','Leadership','Careers','Investors','Events'] },
            ].map((col) => (
              <div key={col.title}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--apple-ink-muted-80)', marginBottom: 4 }}>{col.title}</div>
                {col.links.map((link) => (
                  <a key={link} href="#" style={{ display: 'block', fontSize: 17, fontWeight: 400, lineHeight: 2.41, letterSpacing: 0, color: 'var(--apple-ink-muted-48)', textDecoration: 'none' }}>{link}</a>
                ))}
              </div>
            ))}
          </div>
          <div style={{ paddingTop: 16, borderTop: '1px solid var(--apple-hairline)', fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
            The 2.41 line-height makes dense columns scannable — Apple's signature footer pattern
          </div>
        </div>
      </ComponentCard>

      <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--apple-hairline)', textAlign: 'center', fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
        <span style={{ color: 'var(--apple-primary)' }}>All components documented in the Apple DESIGN.md spec</span>
      </div>
    </>
  );
}
