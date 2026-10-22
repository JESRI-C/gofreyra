import { Plane, Database, ShieldCheck, FileText, TreePine } from "lucide-react";

/**
 * Skematisk illustration af evidenskæden.
 * Rent diagram uden opfundne tal eller dashboard-data.
 */
export function EvidenceChain({ compact = false }: { compact?: boolean }) {
  const steps = [
    { icon: <Plane className="w-5 h-5" />, t: "Dronefoto", d: "Felt- og dronedata med GPS" },
    { icon: <Database className="w-5 h-5" />, t: "Offentlige data", d: "Kort, jord, vejr og satellit" },
    { icon: <ShieldCheck className="w-5 h-5" />, t: "Verifikation", d: "AI-assisteret og faglig vurdering" },
    { icon: <FileText className="w-5 h-5" />, t: "Baseline", d: "Versioneret rapport og evidenspakke" },
    { icon: <TreePine className="w-5 h-5" />, t: "Beplantning", d: "Egnethed pr. areal og opfølgning" },
  ];

  return (
    <div className={`card-soft bg-card ${compact ? "p-5" : "p-6 md:p-8"}`}>
      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Evidenskæden</div>
      <div className="mt-5 grid gap-3">
        {steps.map((s, i) => (
          <div key={s.t} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-md bg-accent text-brand-deep grid place-items-center shrink-0">{s.icon}</div>
              {i < steps.length - 1 && <div className="w-px flex-1 min-h-4 bg-border my-1" />}
            </div>
            <div className="pt-1.5">
              <div className="font-semibold text-sm">{s.t}</div>
              {!compact && <div className="text-xs text-muted-foreground mt-0.5">{s.d}</div>}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-border text-xs text-muted-foreground">
        Hvert trin er versioneret og kan spores tilbage til kilden.
      </div>
    </div>
  );
}
