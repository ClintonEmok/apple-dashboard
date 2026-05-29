'use client';

import { colors, typographySizes } from './../data';

function TokenSwatch({ color }: { color: typeof colors[0] }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0' }}>
      <div style={{ width: 28, height: 28, borderRadius: 6, background: color.hex, border: color.hex === '#ffffff' ? '1px solid var(--apple-hairline)' : 'none', flexShrink: 0 }}></div>
      <div style={{ minWidth: 110 }}>
        <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--apple-ink)' }}>{color.name}</div>
        <div style={{ fontSize: 11, color: 'var(--apple-ink-muted-48)', fontFamily: 'monospace' }}>{color.hex}</div>
      </div>
      <div className="token-bar" style={{ flex: 1 }}>
        <div style={{ width: `${color.usage}%`, height: 4, borderRadius: 2, background: color.hex === '#f5f5f7' ? '#bdbdbd' : color.hex }}></div>
      </div>
      <span style={{ fontSize: 11, color: 'var(--apple-ink-muted-48)', maxWidth: 220, textAlign: 'right' }}>{color.role}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 48, marginBottom: 16 }}>
      <hr style={{ flex: 1, border: 'none', borderTop: '1px solid var(--apple-hairline)' }} />
      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.8px', textTransform: 'uppercase', color: 'var(--apple-ink-muted-48)', whiteSpace: 'nowrap' }}>{children}</span>
      <hr style={{ flex: 1, border: 'none', borderTop: '1px solid var(--apple-hairline)' }} />
    </div>
  );
}

const spacing = [
  { token: 'xxs', px: 4 },
  { token: 'xs', px: 8 },
  { token: 'sm', px: 12 },
  { token: 'md', px: 17 },
  { token: 'lg', px: 24 },
  { token: 'xl', px: 32 },
  { token: 'xxl', px: 48 },
  { token: 'section', px: 80 },
];

const radii = [
  { token: 'none', px: 0, desc: 'Full-bleed tiles' },
  { token: 'xs', px: 5, desc: 'Inline chips (rare)' },
  { token: 'sm', px: 8, desc: 'Dark utility buttons' },
  { token: 'md', px: 11, desc: 'Pearl button capsules' },
  { token: 'lg', px: 18, desc: 'Utility/store cards' },
  { token: 'pill', px: 9999, desc: 'All CTAs · chips · search' },
];

const elevation = [
  { level: 'Flat', desc: 'No shadow, no border', use: 'Full-bleed tiles, global nav, footer' },
  { level: 'Soft hairline', desc: '1px rgba(0,0,0,0.08)', use: 'Utility cards, sub-nav separator' },
  { level: 'Backdrop blur', desc: 'backdrop-filter: blur(N) on Parchment 80%', use: 'Sub-nav, floating sticky bar' },
  { level: 'Product shadow', desc: 'rgba(0,0,0,0.22) 3px 5px 30px', use: 'Product renders on a surface (only one)' },
];

export default function TokensPage() {
  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: 'var(--apple-font-display)', fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: 'var(--apple-ink)' }}>Design Tokens</h1>
        <p style={{ fontSize: 17, fontWeight: 400, lineHeight: 1.47, letterSpacing: '-0.374px', color: 'var(--apple-ink-muted-48)', marginTop: 4 }}>
          Apple's complete design token system — 21 colors, 16 typography sizes, 7 radii, 8 spacing levels, 4 elevation levels, and 24 components.
        </p>
      </div>

      {/* === COLOR PALETTE === */}
      <SectionTitle>Color Palette</SectionTitle>

      <div className="apple-card" style={{ marginBottom: 16 }}>
        <div style={{ padding: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {colors.map((c) => (
              <TokenSwatch key={c.name} color={c} />
            ))}
          </div>
        </div>
        <div style={{ padding: '8px 24px', borderTop: '1px solid var(--apple-divider-soft)', fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
          <span style={{ color: 'var(--apple-primary)' }}>Action Blue (#0066cc)</span> is the <strong>only</strong> interactive color. Zero decorative gradients. Zero secondary brand colors.
        </div>
      </div>

      {/* === TYPOGRAPHY === */}
      <SectionTitle>Typography Scale</SectionTitle>

      <div className="apple-card" style={{ marginBottom: 16 }}>
        <div style={{ padding: 24 }}>
          {typographySizes.map((t) => (
            <div key={t.size} style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '6px 0', borderBottom: '1px solid var(--apple-divider-soft)' }}>
              <span style={{ fontSize: 10, color: 'var(--apple-ink-muted-48)', width: 36, textAlign: 'right', flexShrink: 0 }}>{t.size}px</span>
              <span style={{
                fontSize: t.size,
                fontWeight: t.weight,
                letterSpacing: t.tracking,
                lineHeight: t.lineHeight,
                fontFamily: 'var(--apple-font-display)',
                color: 'var(--apple-ink)',
              }}>
                {t.name}
              </span>
              <span style={{ fontSize: 11, color: 'var(--apple-ink-muted-48)', marginLeft: 'auto', whiteSpace: 'nowrap' }}>
                {t.weight} · {t.tracking}
              </span>
            </div>
          ))}
        </div>
        <div style={{ padding: '8px 24px', borderTop: '1px solid var(--apple-divider-soft)', fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
          17px body (not 16px) · Weight 600 for headlines, not 700 · Weight 500 deliberately absent · Weight 300 is rare and intentional
        </div>
      </div>

      {/* === SPACING + RADIUS === */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <div className="apple-card">
          <div style={{ padding: 24 }}>
            <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px', marginBottom: 16 }}>Spacing Scale</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {spacing.map((s) => (
                <div key={s.token} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 12, color: 'var(--apple-ink-muted-48)', width: 80 }}>{s.px}px / {s.token}</span>
                  <div style={{ height: s.px <= 8 ? 4 : s.px <= 17 ? 6 : s.px <= 32 ? 8 : 10, width: Math.min(s.px, 80), background: 'var(--apple-primary)', borderRadius: 2 }}></div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: '8px 24px', borderTop: '1px solid var(--apple-divider-soft)', fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
            Base unit: 8px · Section vertical padding: 80px
          </div>
        </div>

        <div className="apple-card">
          <div style={{ padding: 24 }}>
            <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px', marginBottom: 16 }}>Border Radius</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {radii.map((r) => (
                <div key={r.token} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: 12, color: 'var(--apple-ink-muted-48)', width: 80 }}>{r.token} ({r.px}px)</span>
                  <div style={{
                    width: r.px === 9999 ? 60 : 40,
                    height: 20,
                    background: 'var(--apple-primary)',
                    borderRadius: r.px === 9999 ? '9999px' : r.px,
                    flexShrink: 0,
                  }}></div>
                  <span style={{ fontSize: 11, color: 'var(--apple-ink-muted-48)' }}>{r.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: '8px 24px', borderTop: '1px solid var(--apple-divider-soft)', fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
            The pill (9999px) is the signature Apple shape — on every primary CTA, search, and chip
          </div>
        </div>
      </div>

      {/* === ELEVATION === */}
      <SectionTitle>Elevation & Depth</SectionTitle>

      <div className="apple-card">
        <div style={{ padding: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {elevation.map((e) => (
              <div key={e.level} style={{ padding: 16, background: e.level === 'Flat' ? 'var(--apple-canvas)' : e.level === 'Soft hairline' ? 'var(--apple-canvas)' : e.level === 'Backdrop blur' ? 'rgba(245,245,247,0.8)' : 'var(--apple-canvas-parchment)', borderRadius: 'var(--apple-rounded-sm)', border: e.level === 'Soft hairline' ? '1px solid rgba(0,0,0,0.08)' : 'none', backdropFilter: e.level === 'Backdrop blur' ? 'blur(20px)' : 'none', boxShadow: e.level === 'Product shadow' ? 'rgba(0,0,0,0.22) 3px 5px 30px 0' : 'none' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--apple-ink)', marginBottom: 8 }}>{e.level}</div>
                <div style={{ fontSize: 11, color: 'var(--apple-ink-muted-48)', marginBottom: 6 }}>{e.desc}</div>
                <div style={{ fontSize: 10, color: 'var(--apple-ink-muted-48)', opacity: 0.7 }}>Use: {e.use}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: '8px 24px', borderTop: '1px solid var(--apple-divider-soft)', fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
          "Apple uses exactly one drop-shadow, and it is applied to photographic product imagery — never to cards, never to buttons, never to text."
        </div>
      </div>

      {/* === DESIGN.MD REFERENCE === */}
      <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--apple-hairline)', textAlign: 'center', fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
        Generated from <span style={{ color: 'var(--apple-primary)' }}>getdesign@latest add apple</span> · {colors.length} colors · {typographySizes.length} type sizes · {radii.length} radii · {spacing.length} spacings
      </div>
    </>
  );
}
