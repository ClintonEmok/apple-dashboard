'use client';

export default function AnalyticsPage() {
  return (
    <>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'var(--apple-font-display)', fontSize: 40, fontWeight: 600, lineHeight: 1.1, color: 'var(--apple-ink)' }}>Analytics</h1>
        <p style={{ fontSize: 17, fontWeight: 400, lineHeight: 1.47, letterSpacing: '-0.374px', color: 'var(--apple-ink-muted-48)', marginTop: 4 }}>
          Deep dive into your metrics with Apple-crafted data displays.
        </p>
      </div>

      {/* KPI Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 16 }}>
        {[
          { label: 'Page Views', value: '284,391', delta: '+18.3%', color: 'var(--apple-primary)' },
          { label: 'Avg. Session', value: '4m 32s', delta: '+0.3%', color: '#30b94e' },
          { label: 'Bounce Rate', value: '31.2%', delta: '-2.1pp', color: '#ff9f0a' },
        ].map((kpi) => (
          <div key={kpi.label} className="stat-card">
            <div style={{ fontFamily: 'var(--apple-font-display)', fontSize: 34, fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.374px', color: 'var(--apple-ink)', marginBottom: 4 }}>{kpi.value}</div>
            <div style={{ fontSize: 14, color: 'var(--apple-ink-muted-48)', letterSpacing: '-0.224px', marginBottom: 4 }}>{kpi.label}</div>
            <div style={{ fontSize: 13, color: '#30b94e' }}>{kpi.delta}</div>
            <div className="stat-bar" style={{ marginTop: 12 }}>
              <div className="fill" style={{ width: '60%', background: kpi.color }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <div className="apple-card">
          <div style={{ padding: '24px 24px 0' }}>
            <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px', marginBottom: 16 }}>Daily Active Users</h3>
          </div>
          <div style={{ padding: '0 24px 24px' }}>
            <div style={{ width: '100%', height: 200 }}>
              <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 500 180" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lg2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0066cc" stopOpacity="0.1"/>
                    <stop offset="100%" stopColor="#0066cc" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <line x1="0" y1="40" x2="500" y2="40" stroke="var(--apple-hairline)" strokeWidth="1" strokeDasharray="3,3"/>
                <line x1="0" y1="90" x2="500" y2="90" stroke="var(--apple-hairline)" strokeWidth="1" strokeDasharray="3,3"/>
                <line x1="0" y1="140" x2="500" y2="140" stroke="var(--apple-hairline)" strokeWidth="1" strokeDasharray="3,3"/>
                <polygon points="0,170 40,150 80,155 120,130 160,140 200,110 240,100 280,105 320,75 360,80 400,90 440,65 480,70 500,85 500,180 0,180" fill="url(#lg2)"/>
                <polyline points="0,170 40,150 80,155 120,130 160,140 200,110 240,100 280,105 320,75 360,80 400,90 440,65 480,70 500,85" fill="none" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="440" cy="65" r="4" fill="#0066cc" stroke="#fff" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          <div style={{ padding: '8px 24px', borderTop: '1px solid var(--apple-divider-soft)', fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
            DAU trending ↑ · Peak at 8,421 on May 24
          </div>
        </div>
        <div className="apple-card">
          <div style={{ padding: '24px 24px 0' }}>
            <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px', marginBottom: 8 }}>Geographic Breakdown</h3>
          </div>
          <div style={{ padding: '0 24px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { country: 'United States', pct: 42 },
              { country: 'United Kingdom', pct: 18 },
              { country: 'Germany', pct: 14 },
              { country: 'Netherlands', pct: 11 },
              { country: 'Other', pct: 15 },
            ].map((g) => (
              <div key={g.country}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 4 }}>
                  <span>{g.country}</span>
                  <span style={{ color: 'var(--apple-ink-muted-48)', fontWeight: 500 }}>{g.pct}%</span>
                </div>
                <div className="token-bar"><div style={{ width: `${g.pct}%`, height: 6, borderRadius: 3, background: g.country === 'United States' ? 'var(--apple-primary)' : 'var(--apple-ink-muted-48)', opacity: g.country === 'United States' ? 1 : 0.3 }}></div></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech stack */}
      <div className="apple-card">
        <div style={{ padding: '24px' }}>
          <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px', marginBottom: 16 }}>Tech Stack Performance</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, textAlign: 'center' }}>
            {[
              { metric: 'API P50', value: '47ms', status: 'Good' },
              { metric: 'API P99', value: '214ms', status: 'Warning' },
              { metric: 'CDN Hit Rate', value: '94.2%', status: 'Good' },
              { metric: 'Error Rate', value: '0.12%', status: 'Excellent' },
            ].map((t) => (
              <div key={t.metric} style={{ padding: '16px 0' }}>
                <div style={{ fontFamily: 'var(--apple-font-display)', fontSize: 24, fontWeight: 600, lineHeight: 1.1, color: 'var(--apple-ink)', marginBottom: 4 }}>{t.value}</div>
                <div style={{ fontSize: 14, color: 'var(--apple-ink-muted-48)', marginBottom: 4 }}>{t.metric}</div>
                <span className="badge" style={{ background: t.status === 'Excellent' ? '#e8f5e9' : t.status === 'Good' ? '#e3f2fd' : '#fff3e0', color: t.status === 'Excellent' ? '#1b8a2e' : t.status === 'Good' ? 'var(--apple-primary)' : '#b86a00' }}>{t.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
