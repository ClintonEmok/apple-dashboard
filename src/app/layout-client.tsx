'use client';

import { useState } from "react";
import GlobalNav from "@/components/GlobalNav";
import SubNav from "@/components/SubNav";
import Sidebar from "@/components/Sidebar";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <GlobalNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <SubNav />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}
      <main className="main-content">
        {children}
      </main>
    </>
  );
}
