import { Activity, ShieldCheck, Sparkles, MapPin, CheckCircle2, TrendingUp } from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 via-transparent to-brand-mid/20 blur-3xl rounded-[3rem]" />
      <div className="relative rounded-2xl border border-border bg-card shadow-card overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-secondary/40">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="ml-3 text-xs text-muted-foreground">GoFreyra Dashboard · Projektområde Vestjylland</span>
          </div>
          <span className="text-xs text-muted-foreground">Live · opdateret kl. 09:42</span>
        </div>

        <div className="grid grid-cols-12 gap-4 p-5">
          {/* KPI cards */}
          <KPI icon={<Activity className="w-4 h-4" />} label="Aktive sensorer" value="184" trend="+6" tone="ok" />
          <KPI icon={<TrendingUp className="w-4 h-4" />} label="Biodiversitetsindeks" value="0,72" trend="+0,04" tone="ok" />
          <KPI icon={<ShieldCheck className="w-4 h-4" />} label="ESG-dokumentation" value="92%" trend="komplet" tone="ok" />
          <KPI icon={<Sparkles className="w-4 h-4" />} label="AI-anbefalinger" value="7" trend="nye" tone="alert" />

          {/* Map */}
          <div className="col-span-12 md:col-span-7 rounded-xl border border-border bg-secondary/30 h-64 relative overflow-hidden">
            <div className="absolute inset-0 opacity-90"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 40%, rgba(43,196,138,0.18), transparent 40%), radial-gradient(circle at 70% 60%, rgba(102,161,130,0.22), transparent 45%), linear-gradient(135deg, #f5f1e8 0%, #ffffff 100%)",
              }} />
            <div className="absolute inset-0">
              {[
                { x: "20%", y: "35%" }, { x: "35%", y: "55%" }, { x: "48%", y: "30%" },
                { x: "62%", y: "60%" }, { x: "75%", y: "40%" }, { x: "55%", y: "75%" },
              ].map((p, i) => (
                <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: p.x, top: p.y }}>
                  <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20" />
                </div>
              ))}
            </div>
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-xs font-medium bg-card px-2.5 py-1 rounded-full border border-border">
              <MapPin className="w-3 h-3 text-primary" /> Sensor-noder
            </div>
            <div className="absolute bottom-3 right-3 text-xs bg-card px-2.5 py-1 rounded-full border border-border">
              184 noder · 6 zoner
            </div>
          </div>

          {/* Side panel */}
          <div className="col-span-12 md:col-span-5 space-y-3">
            <div className="rounded-xl border border-border p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-deep uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> AI-anbefaling
              </div>
              <p className="mt-2 text-sm text-foreground/90">
                Sensor 042 viser unormalt fald i vandkvalitet. Anbefaler kontrol af afløb i zone 3.
              </p>
              <div className="mt-3 flex gap-2 text-xs">
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-brand-deep font-medium">Høj prioritet</span>
                <span className="px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">Vandkvalitet</span>
              </div>
            </div>

            <div className="rounded-xl border border-border p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-semibold">Audit trail</div>
                <span className="text-xs text-muted-foreground">i dag</span>
              </div>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <AuditRow time="09:38" text="ESG-rapport Q3 verificeret" />
                <AuditRow time="08:15" text="Datakilde tilføjet: drone-flyvning #218" />
                <AuditRow time="07:02" text="Biodiversitetsindeks opdateret" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KPI({ icon, label, value, trend, tone }: { icon: React.ReactNode; label: string; value: string; trend: string; tone: "ok" | "alert" }) {
  return (
    <div className="col-span-6 md:col-span-3 rounded-xl border border-border p-4 bg-card">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">{icon} {label}</div>
      <div className="mt-2 text-2xl font-bold tracking-tight">{value}</div>
      <div className={`mt-1 text-xs font-medium ${tone === "ok" ? "text-brand-deep" : "text-amber-600"}`}>{trend}</div>
    </div>
  );
}
function AuditRow({ time, text }: { time: string; text: string }) {
  return (
    <li className="flex gap-2">
      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-primary flex-shrink-0" />
      <span><span className="text-foreground/60 font-mono mr-1">{time}</span>{text}</span>
    </li>
  );
}
