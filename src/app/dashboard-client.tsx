'use client';

import { stats, topPages, trafficSources, activity, projects, devices } from './data';

function StatCard({ s }: { s: typeof stats[0] }) {
  return (
    <div className="stat-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <span style={{ fontSize: 14, color: 'var(--apple-ink-muted-48)', letterSpacing: '-0.224px' }}>{s.label}</span>
        <span style={{ fontSize: 16, opacity: 0.4 }}>{s.icon}</span>
      </div>
      <div style={{ fontFamily: 'var(--apple-font-display)', fontSize: 34, fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.374px', color: 'var(--apple-ink)', marginBottom: 4 }}>{s.value}</div>
      <div style={{ fontSize: 13, fontWeight: 400, color: s.dir === 'down' ? '#e34e4e' : '#30b94e' }}>{s.delta}</div>
      <div className="stat-bar" style={{ marginTop: 12 }}>
        <div className="fill" style={{ width: s.barWidth, background: s.color }}></div>
      </div>
    </div>
  );
}

function RevenueChart() {
  return (
    <div className="apple-card">
      <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 24px 0' }}>
        <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px' }}>Revenue — Last 30 Days</h3>
        <a href="#" style={{ fontSize: 14, color: 'var(--apple-primary)', textDecoration: 'none' }}>View Report →</a>
      </div>
      <div style={{ padding: '16px 24px 24px' }}>
        <div style={{ width: '100%', height: 240, position: 'relative', overflow: 'hidden', borderRadius: 'var(--apple-rounded-sm)' }}>
          <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 500 220" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0066cc" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#0066cc" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <line x1="0" y1="40" x2="500" y2="40" stroke="var(--apple-hairline)" strokeWidth="1" strokeDasharray="4,4"/>
            <line x1="0" y1="90" x2="500" y2="90" stroke="var(--apple-hairline)" strokeWidth="1" strokeDasharray="4,4"/>
            <line x1="0" y1="140" x2="500" y2="140" stroke="var(--apple-hairline)" strokeWidth="1" strokeDasharray="4,4"/>
            <line x1="0" y1="190" x2="500" y2="190" stroke="var(--apple-hairline)" strokeWidth="1" strokeDasharray="4,4"/>
            <text x="2" y="42" style={{ fontSize: 10, fill: 'var(--apple-ink-muted-48)' }}>40K</text>
            <text x="2" y="92" style={{ fontSize: 10, fill: 'var(--apple-ink-muted-48)' }}>30K</text>
            <text x="2" y="142" style={{ fontSize: 10, fill: 'var(--apple-ink-muted-48)' }}>20K</text>
            <text x="2" y="192" style={{ fontSize: 10, fill: 'var(--apple-ink-muted-48)' }}>10K</text>
            <polygon points="0,190 30,175 60,180 90,155 120,145 150,130 180,135 210,105 240,90 270,95 300,70 330,75 360,90 400,85 430,65 460,70 500,55 500,220 0,220" fill="url(#lg)"/>
            <polyline points="0,190 30,175 60,180 90,155 120,145 150,130 180,135 210,105 240,90 270,95 300,70 330,75 360,90 400,85 430,65 460,70 500,55"
              fill="none" stroke="#0066cc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="300" cy="70" r="4.5" fill="#0066cc" stroke="#fff" strokeWidth="2.5"/>
            <circle cx="430" cy="65" r="3.5" fill="#0066cc" stroke="#fff" strokeWidth="2"/>
            <text x="30" y="215" style={{ fontSize: 10, fill: 'var(--apple-ink-muted-48)' }}>May 1</text>
            <text x="150" y="215" style={{ fontSize: 10, fill: 'var(--apple-ink-muted-48)' }}>May 10</text>
            <text x="300" y="215" style={{ fontSize: 10, fill: 'var(--apple-ink-muted-48)' }}>May 20</text>
            <text x="430" y="215" style={{ fontSize: 10, fill: 'var(--apple-ink-muted-48)' }}>May 30</text>
          </svg>
        </div>
      </div>
      <div style={{ padding: '8px 24px', borderTop: '1px solid var(--apple-divider-soft)', fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
        Peak day: May 24 — $3,847 · ↑ 23% MoM
      </div>
    </div>
  );
}

function TopPages() {
  return (
    <div className="apple-card">
      <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 24px 0' }}>
        <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px' }}>Top Pages</h3>
        <a href="#" style={{ fontSize: 14, color: 'var(--apple-primary)', textDecoration: 'none' }}>Report →</a>
      </div>
      <div style={{ padding: '16px 24px 0' }}>
        <div className="table-wrap">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.3px', color: 'var(--apple-ink-muted-48)', textTransform: 'uppercase', textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid var(--apple-hairline)' }}>Page</th>
              <th style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.3px', color: 'var(--apple-ink-muted-48)', textTransform: 'uppercase', textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid var(--apple-hairline)' }}>Visitors</th>
              <th style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.3px', color: 'var(--apple-ink-muted-48)', textTransform: 'uppercase', textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid var(--apple-hairline)' }}>Bounce</th>
              <th style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.3px', color: 'var(--apple-ink-muted-48)', textTransform: 'uppercase', textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid var(--apple-hairline)' }}>Δ</th>
            </tr>
          </thead>
          <tbody>
            {topPages.map((p) => (
              <tr key={p.page}>
                <td style={{ fontSize: 14, padding: '8px 4px', borderBottom: '1px solid var(--apple-divider-soft)', color: 'var(--apple-primary)' }}>{p.page}</td>
                <td style={{ fontSize: 14, padding: '8px 4px', borderBottom: '1px solid var(--apple-divider-soft)' }}>{p.visitors}</td>
                <td style={{ fontSize: 14, padding: '8px 4px', borderBottom: '1px solid var(--apple-divider-soft)' }}>{p.bounce}</td>
                <td style={{ fontSize: 14, padding: '8px 4px', borderBottom: '1px solid var(--apple-divider-soft)', color: p.dir === 'up' ? '#30b94e' : '#e34e4e' }}>{p.delta}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <div style={{ padding: '8px 24px', borderTop: '1px solid var(--apple-divider-soft)', fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
        Total sessions: 15,912 · Avg. duration: 4m 32s
      </div>
    </div>
  );
}

function TrafficSources() {
  return (
    <div className="apple-card">
      <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 24px 0' }}>
        <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px' }}>Traffic Sources</h3>
        <a href="#" style={{ fontSize: 14, color: 'var(--apple-primary)', textDecoration: 'none' }}>Details</a>
      </div>
      <div style={{ padding: '16px 24px 24px' }}>
        {trafficSources.map((s) => (
          <div key={s.label} style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 4 }}>
              <span>{s.label}</span>
              <span style={{ color: 'var(--apple-ink-muted-48)', fontWeight: 500 }}>{s.pct}%</span>
            </div>
            <div className="token-bar">
              <div style={{ width: `${s.pct}%`, height: 6, borderRadius: 3, background: s.color, opacity: 'opacity' in s ? (s as any).opacity : 1 }}></div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '8px 24px', borderTop: '1px solid var(--apple-divider-soft)', fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
        Organic ↑ 4% from last period
      </div>
    </div>
  );
}

function DeviceDonut() {
  const total = devices.reduce((a, d) => a + d.pct, 0);
  const circumference = 2 * Math.PI * 42;
  let offset = 0;
  const segments = devices.map((d) => {
    const segLen = (d.pct / 100) * circumference;
    const seg = { ...d, dashArray: segLen, dashOffset: circumference - offset - segLen };
    offset += segLen;
    return seg;
  });

  return (
    <div className="apple-card">
      <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 24px 0' }}>
        <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px' }}>Devices</h3>
        <a href="#" style={{ fontSize: 14, color: 'var(--apple-primary)', textDecoration: 'none' }}>Details</a>
      </div>
      <div style={{ padding: '16px 24px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
          <div style={{ position: 'relative', width: 100, height: 100 }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="var(--apple-canvas-parchment)" strokeWidth="8"/>
              <circle cx="50" cy="50" r="42" fill="none" stroke="var(--apple-primary)" strokeWidth="8" strokeDasharray={`${segments[0].dashArray} ${circumference - segments[0].dashArray}`} strokeLinecap="round"/>
              <circle cx="50" cy="50" r="42" fill="none" stroke="#30b94e" strokeWidth="8" strokeDasharray={`${segments[1].dashArray} ${circumference - segments[1].dashArray}`} strokeDashoffset={-(segments[0].dashArray + 0)} strokeLinecap="round"/>
              <circle cx="50" cy="50" r="42" fill="none" stroke="#ff9f0a" strokeWidth="8" strokeDasharray={`${segments[2].dashArray} ${circumference - segments[2].dashArray}`} strokeDashoffset={-(segments[0].dashArray + segments[1].dashArray)} strokeLinecap="round"/>
            </svg>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: 22, fontWeight: 600, fontFamily: 'var(--apple-font-display)', color: 'var(--apple-ink)' }}>65%</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {devices.map((d) => (
              <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--apple-ink-muted-48)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: d.color }}></span>
                {d.label} <span style={{ marginLeft: 'auto', fontWeight: 500 }}>{d.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityFeed() {
  const dotClass: Record<string, string> = { blue: 'activity-dot-blue', green: 'activity-dot-green', orange: 'activity-dot-orange', purple: 'activity-dot-purple' };
  return (
    <div className="apple-card">
      <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 24px 0' }}>
        <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px' }}>Recent Activity</h3>
        <a href="#" style={{ fontSize: 14, color: 'var(--apple-primary)', textDecoration: 'none' }}>View All</a>
      </div>
      <div style={{ padding: '16px 24px 0' }}>
        {activity.map((a, i) => (
          <div className="activity-item" key={i}>
            <div className={`activity-dot ${dotClass[a.dot]}`}></div>
            <div className="activity-text" style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.43, color: 'var(--apple-ink)' }}>{a.title}</div>
              <div style={{ fontSize: 12, color: 'var(--apple-ink-muted-48)', marginTop: 1 }}>{a.meta}</div>
            </div>
            <div className="activity-time">{a.time}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: '8px 24px', borderTop: '1px solid var(--apple-divider-soft)', fontSize: 12, color: 'var(--apple-ink-muted-48)', textAlign: 'center' }}>
        Show all activity →
      </div>
    </div>
  );
}

function ProjectsTable() {
  return (
    <div className="apple-card" style={{ marginBottom: 0 }}>
      <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 24px 0' }}>
        <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px' }}>Active Projects</h3>
        <button className="btn btn-primary" style={{ fontSize: 14, padding: '7px 18px' }}>+ New Project</button>
      </div>
      <div style={{ padding: '16px 24px 0' }}>
        <div className="table-wrap">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.3px', color: 'var(--apple-ink-muted-48)', textTransform: 'uppercase', textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid var(--apple-hairline)' }}>Project</th>
              <th style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.3px', color: 'var(--apple-ink-muted-48)', textTransform: 'uppercase', textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid var(--apple-hairline)' }}>Lead</th>
              <th style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.3px', color: 'var(--apple-ink-muted-48)', textTransform: 'uppercase', textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid var(--apple-hairline)' }}>Status</th>
              <th style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.3px', color: 'var(--apple-ink-muted-48)', textTransform: 'uppercase', textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid var(--apple-hairline)' }}>Tasks</th>
              <th style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.3px', color: 'var(--apple-ink-muted-48)', textTransform: 'uppercase', textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid var(--apple-hairline)' }}>Due</th>
              <th style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.3px', color: 'var(--apple-ink-muted-48)', textTransform: 'uppercase', textAlign: 'left', padding: '8px 4px', borderBottom: '1px solid var(--apple-hairline)' }}>Progress</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.name}>
                <td style={{ fontSize: 14, padding: '8px 4px', borderBottom: '1px solid var(--apple-divider-soft)', color: 'var(--apple-primary)' }}>{p.name}</td>
                <td style={{ fontSize: 14, padding: '8px 4px', borderBottom: '1px solid var(--apple-divider-soft)' }}>{p.lead}</td>
                <td style={{ fontSize: 14, padding: '8px 4px', borderBottom: '1px solid var(--apple-divider-soft)' }}><span className={`badge ${p.badge}`}>{p.status}</span></td>
                <td style={{ fontSize: 14, padding: '8px 4px', borderBottom: '1px solid var(--apple-divider-soft)' }}>{p.tasks}</td>
                <td style={{ fontSize: 14, padding: '8px 4px', borderBottom: '1px solid var(--apple-divider-soft)' }}>{p.due}</td>
                <td style={{ padding: '8px 4px', borderBottom: '1px solid var(--apple-divider-soft)' }}>
                  <div style={{ width: 80 }}><div className="token-bar"><div style={{ width: `${p.progress}%`, height: 5, borderRadius: 3, background: p.color }}></div></div></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <>
      {/* Header */}
      <div style={{ marginBottom: 32, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <h1 className="dashboard-title" style={{ fontFamily: 'var(--apple-font-display)', fontWeight: 600, lineHeight: 1.1, color: 'var(--apple-ink)' }}>Dashboard</h1>
          <p style={{ fontSize: 17, fontWeight: 400, lineHeight: 1.47, letterSpacing: '-0.374px', color: 'var(--apple-ink-muted-48)', marginTop: 4 }}>
            Welcome back, Alex. Here's a live showcase of Apple's design system at work.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button className="btn btn-pearl-capsule">Export</button>
          <button className="btn btn-primary" style={{ fontSize: 15 }}>+ New</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid-stats">
        {stats.map((s) => <StatCard key={s.label} s={s} />)}
      </div>

      {/* Revenue + Top Pages */}
      <div className="grid-revenue">
        <RevenueChart />
        <TopPages />
      </div>

      {/* Traffic + Devices + Activity */}
      <div className="grid-cards">
        <TrafficSources />
        <DeviceDonut />
        <ActivityFeed />
      </div>

      {/* Projects */}
      <ProjectsTable />

      {/* Footer note */}
      <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--apple-hairline)', textAlign: 'center', fontSize: 12, color: 'var(--apple-ink-muted-48)' }}>
        Built with the Apple DESIGN.md spec · <a href="/tokens" style={{ color: 'var(--apple-primary)', textDecoration: 'none' }}>View Design Tokens</a> · npx getdesign@latest add apple
      </div>
    </>
  );
}
