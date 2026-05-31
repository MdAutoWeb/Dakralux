"use client";

import { useCallback, useEffect, useState } from "react";
import type { LeadDashboardStats } from "@/lib/lead-stats";

export default function AdminLeadsPage() {
  const [key, setKey] = useState("");
  const [inputKey, setInputKey] = useState("");
  const [stats, setStats] = useState<LeadDashboardStats | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("leads_admin_key");
    if (saved) setKey(saved);
  }, []);

  const load = useCallback(async (adminKey: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/leads/stats?key=${encodeURIComponent(adminKey)}`);
      if (!res.ok) {
        setError(res.status === 401 ? "Ongeldige sleutel." : "Kon statistieken niet laden.");
        setStats(null);
        return;
      }
      setStats(await res.json());
      sessionStorage.setItem("leads_admin_key", adminKey);
      setKey(adminKey);
    } catch {
      setError("Netwerkfout.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (key) load(key);
  }, [key, load]);

  if (!key) {
    return (
      <main className="min-h-screen bg-[#1E1E1E] text-white flex items-center justify-center p-6">
        <form
          className="w-full max-w-md space-y-4 border border-[#CADA44] rounded-lg p-8"
          onSubmit={(e) => {
            e.preventDefault();
            load(inputKey.trim());
          }}
        >
          <h1 className="text-2xl font-bold text-[#CADA44]">Lead dashboard</h1>
          <p className="text-sm text-white/80">Voer je beheerderssleutel in (LEADS_ADMIN_SECRET).</p>
          <input
            type="password"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            className="w-full px-4 py-3 bg-black border border-[#CADA44] rounded-md"
            placeholder="Sleutel"
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#CADA44] text-[#1E1E1E] font-semibold rounded-md"
          >
            Inloggen
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#1E1E1E] text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#CADA44]">Dakralux leads</h1>
            <p className="text-white/70 text-sm mt-1">CRM-statistieken (live uit Airtable)</p>
          </div>
          <button
            type="button"
            onClick={() => load(key)}
            disabled={loading}
            className="px-4 py-2 border border-[#CADA44] rounded-md text-sm hover:bg-[#CADA44]/10"
          >
            {loading ? "Laden…" : "Vernieuwen"}
          </button>
        </header>

        {error && <p className="text-red-400">{error}</p>}

        {stats && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard label="Totaal leads" value={stats.total} />
              <StatCard label="Deze week" value={stats.thisWeek} />
              <StatCard label="Deze maand" value={stats.thisMonth} />
              <StatCard label="Gem. score" value={stats.averageScore} />
              <StatCard label="Conversie (Done)" value={`${stats.conversionRate}%`} />
              <StatCard label="Achterstallig" value={stats.overdue} highlight={stats.overdue > 0} />
              <StatCard label="Dubbels" value={stats.duplicates} />
            </div>

            <section className="grid md:grid-cols-2 gap-6">
              <Breakdown title="Per status" data={stats.byStatus} />
              <Breakdown title="Per prioriteit" data={stats.byPriority} />
            </section>

            <p className="text-sm text-white/60">
              Open Airtable voor detailwerk. View-setup: zie{" "}
              <code className="text-[#CADA44]">docs/AIRTABLE-CRM-EXTRAS.md</code>
            </p>
          </>
        )}
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string | number;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        highlight ? "border-red-500 bg-red-500/10" : "border-[#CADA44]/40 bg-black/40"
      }`}
    >
      <p className="text-xs text-white/60 uppercase tracking-wide">{label}</p>
      <p className="text-2xl font-bold mt-1 text-[#CADA44]">{value}</p>
    </div>
  );
}

function Breakdown({ title, data }: { title: string; data: Record<string, number> }) {
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
  return (
    <div className="border border-[#CADA44]/40 rounded-lg p-5">
      <h2 className="font-semibold text-[#CADA44] mb-4">{title}</h2>
      <ul className="space-y-2 text-sm">
        {entries.map(([k, v]) => (
          <li key={k} className="flex justify-between">
            <span>{k}</span>
            <span className="font-mono">{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
