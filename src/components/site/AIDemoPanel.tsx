import { useState } from "react";
import { Link } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { aiDemoScenarios, type DemoScenario } from "@/data/aiDemoScenarios";
import { Sparkles, Loader2, ArrowRight, MapPin, AlertTriangle, CheckCircle2, AlertCircle } from "lucide-react";

function StatusDot({ status }: { status?: string }) {
  if (status === "ok") return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />;
  if (status === "warn") return <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />;
  if (status === "alert") return <AlertCircle className="w-3.5 h-3.5 text-red-600" />;
  return <span className="w-3.5 h-3.5 inline-block rounded-full bg-muted" />;
}

export function AIDemoPanel() {
  const [active, setActive] = useState<DemoScenario>(aiDemoScenarios[0]);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function runAnalysis() {
    setLoading(true);
    setError(null);
    setOutput("");
    try {
      const res = await fetch("/api/ai-esg-analyse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scenario: active }),
      });
      if (!res.ok || !res.body) {
        const t = await res.text().catch(() => "");
        throw new Error(t || `Fejl (${res.status})`);
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        setOutput((prev) => prev + decoder.decode(value, { stream: true }));
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Noget gik galt");
    } finally {
      setLoading(false);
    }
  }

  function pick(s: DemoScenario) {
    if (loading) return;
    setActive(s);
    setOutput("");
    setError(null);
  }

  return (
    <section className="container-page py-16 md:py-20">
      <div className="max-w-3xl">
        <span className="eyebrow inline-flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" /> AI live demo
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">Prøv DecisionsIQ på et eksempel.</h2>
        <p className="mt-3 text-muted-foreground text-lg">
          Vælg et scenarie og kør en ESG-analyse i realtid. Samme motor som ligger bag dashboardets AI insight panel.
        </p>
      </div>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {aiDemoScenarios.map((s) => {
          const isActive = s.id === active.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => pick(s)}
              className={`text-left card-soft p-4 bg-card transition border ${
                isActive ? "border-brand-deep ring-2 ring-brand-deep/15" : "border-transparent hover:border-border"
              }`}
            >
              <div className="text-sm font-semibold">{s.title}</div>
              <div className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {s.location}
              </div>
              <div className="mt-2 text-xs text-muted-foreground line-clamp-2">{s.short}</div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 card-soft bg-card p-6">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">Datapunkter</div>
          <div className="mt-1 font-semibold">{active.title}</div>
          <p className="mt-2 text-sm text-muted-foreground">{active.context}</p>
          <ul className="mt-4 space-y-2">
            {active.data.map((d) => (
              <li key={d.label} className="flex items-start gap-2 text-sm">
                <StatusDot status={d.status} />
                <div className="flex-1">
                  <div className="text-foreground">{d.label}</div>
                  <div className="text-muted-foreground text-xs">{d.value}</div>
                </div>
              </li>
            ))}
          </ul>
          <Button
            onClick={runAnalysis}
            disabled={loading}
            className="mt-5 w-full rounded-full h-11"
          >
            {loading ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Analyserer…</>
            ) : (
              <><Sparkles className="w-4 h-4 mr-2" /> Kør AI-analyse</>
            )}
          </Button>
        </div>

        <div className="lg:col-span-3 card-soft bg-card p-6 min-h-[360px] flex flex-col">
          <div className="text-xs uppercase tracking-wide text-muted-foreground">AI-vurdering</div>
          {!output && !loading && !error && (
            <div className="flex-1 grid place-items-center text-center text-muted-foreground text-sm py-10">
              <div>
                <Sparkles className="w-6 h-6 mx-auto mb-2 text-brand-deep/60" />
                Klik "Kør AI-analyse" for at se en live ESG-vurdering<br />af det valgte scenarie.
              </div>
            </div>
          )}
          {error && (
            <div className="mt-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md p-3">
              {error}
            </div>
          )}
          {(output || loading) && (
            <div className="mt-3 prose prose-sm max-w-none prose-headings:font-semibold prose-strong:text-brand-deep">
              <ReactMarkdown>{output || "_Henter analyse…_"}</ReactMarkdown>
              {loading && <span className="inline-block w-2 h-4 align-middle bg-brand-deep/60 animate-pulse ml-0.5" />}
            </div>
          )}
          {output && !loading && (
            <div className="mt-6 pt-5 border-t flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-full h-10 px-5">
                <Link to="/book-demo">Se det på jeres egne data <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
              </Button>
              <Link to="/platform/decisionsiq" className="text-sm text-brand-deep hover:underline">
                Læs om DecisionsIQ →
              </Link>
            </div>
          )}
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Demoen kører på syntetiske data og er illustrativ. På rigtige opgaver kører DecisionsIQ på jeres egne sensordata, kontekst og rapporteringskrav.
      </p>
    </section>
  );
}
