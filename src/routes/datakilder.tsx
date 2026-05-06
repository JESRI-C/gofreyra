import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ExternalLink, Search, ShieldCheck, Database } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { SOURCES, APPROVAL_LABEL, type SourcePriority } from "@/data/sources";

export const Route = createFileRoute("/datakilder")({
  head: () =>
    buildHead({
      title: "Datakilder — Officielt source registry | GoFreyra",
      description:
        "GoFreyra henter data fra officielle danske og europæiske kilder: DMI, Danmarks Miljøportal, GBIF, Natura 2000, Copernicus, Satlas, Eurostat, SoilGrids og IPCC. Hver kilde har licens, frekvens og godkendelsesstatus.",
      path: "/datakilder",
    }),
  component: DatakilderPage,
});

const PRIORITIES: ("Alle" | SourcePriority)[] = ["Alle", "High", "Medium", "Low"];

function DatakilderPage() {
  const [q, setQ] = useState("");
  const [prio, setPrio] = useState<(typeof PRIORITIES)[number]>("Alle");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return SOURCES.filter((s) => {
      if (prio !== "Alle" && s.priority !== prio) return false;
      if (!needle) return true;
      return (
        s.name.toLowerCase().includes(needle) ||
        s.provider.toLowerCase().includes(needle) ||
        s.dataType.toLowerCase().includes(needle) ||
        s.module.toLowerCase().includes(needle) ||
        s.geography.toLowerCase().includes(needle)
      );
    });
  }, [q, prio]);

  const stats = useMemo(() => {
    const total = SOURCES.length;
    const high = SOURCES.filter((s) => s.priority === "High").length;
    const dk = SOURCES.filter((s) => s.geography.toLowerCase().includes("danmark")).length;
    const eu = SOURCES.filter((s) => s.geography.toLowerCase().includes("eu")).length;
    return { total, high, dk, eu };
  }, []);

  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24">
          <span className="eyebrow">Source registry</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05] max-w-3xl">
            Datakilderne bag GoFreyra
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Vi bygger ikke claims på løse formuleringer. Hver indikator i platformen er
            koblet til en officiel kilde med licens, opdateringsfrekvens, attribution og
            godkendelsesstatus — så data kan dokumenteres og revideres.
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
            {[
              { k: stats.total, l: "Officielle kilder" },
              { k: stats.high, l: "MVP-prioritet High" },
              { k: stats.dk, l: "Danske kilder" },
              { k: stats.eu, l: "EU-kilder" },
            ].map((s) => (
              <div key={s.l} className="card-soft p-4 bg-card">
                <div className="text-2xl font-bold">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Søg i kilder, udbyder, datatype, modul…"
              className="w-full h-11 pl-9 pr-3 rounded-full border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {PRIORITIES.map((p) => (
              <button
                key={p}
                onClick={() => setPrio(p)}
                className={`px-3.5 h-9 rounded-full text-xs font-medium border transition ${
                  prio === p
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card border-border text-foreground/70 hover:text-foreground"
                }`}
              >
                {p === "Alle" ? "Alle prioriteter" : `Prioritet ${p}`}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          {filtered.map((s) => (
            <article
              key={s.id}
              className="card-soft p-5 md:p-6 bg-card grid md:grid-cols-[1fr_auto] gap-5"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold">{s.name}</h2>
                  <span className="text-xs text-muted-foreground">· {s.provider}</span>
                </div>
                <p className="mt-2 text-sm text-foreground/80">{s.dataType}</p>
                <p className="mt-1 text-xs text-muted-foreground italic">{s.notes}</p>

                <dl className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-2 text-xs">
                  <Meta label="Geografi" value={s.geography} />
                  <Meta label="Adgang" value={s.access} />
                  <Meta label="Licens" value={s.license} />
                  <Meta label="Frekvens" value={s.updateFrequency} />
                  <Meta label="Modul" value={s.module} />
                  <Meta label="Widget" value={s.widget} />
                </dl>
              </div>

              <div className="flex md:flex-col gap-2 md:items-end md:justify-between">
                <div className="flex flex-wrap gap-1.5 md:justify-end">
                  <Badge tone={s.priority === "High" ? "primary" : "muted"}>
                    {s.priority}
                  </Badge>
                  <Badge
                    tone={s.approval === "approved_for_discovery" ? "ok" : "muted"}
                    icon={<ShieldCheck className="w-3 h-3" />}
                  >
                    {APPROVAL_LABEL[s.approval]}
                  </Badge>
                  {s.attribution && <Badge tone="muted">Attribution</Badge>}
                </div>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary"
                >
                  Officiel kilde <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="card-soft p-10 text-center text-sm text-muted-foreground">
              Ingen kilder matcher din søgning.
            </div>
          )}
        </div>
      </section>

      <section className="container-page py-12">
        <div className="surface-beige rounded-3xl p-8 md:p-12">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/15 text-brand-deep grid place-items-center">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Governance før eksport
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                Ingen kilde må bruges i en ekstern rapport, før licens og adgang er
                afklaret. Hver datahentning skrives som et evidence event med
                SHA-256 hash, så rapporten kan verificeres bagud.
              </p>
              <ul className="mt-5 grid md:grid-cols-2 gap-2 text-sm">
                {[
                  "Source approval før rapportgenerering",
                  "Hashing af alle evidence events",
                  "Last_updated synligt på alle widgets",
                  "AI-insights kræver source IDs",
                  "Readiness — ikke compliance — i MVP",
                  "Versionér emissionsfaktorer og metoder",
                ].map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="text-primary">●</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium text-foreground/90">{value}</dd>
    </div>
  );
}

function Badge({
  children,
  tone,
  icon,
}: {
  children: React.ReactNode;
  tone: "primary" | "muted" | "ok";
  icon?: React.ReactNode;
}) {
  const cls =
    tone === "primary"
      ? "bg-primary/15 text-brand-deep"
      : tone === "ok"
        ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
        : "bg-secondary text-foreground/70";
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${cls}`}
    >
      {icon}
      {children}
    </span>
  );
}
