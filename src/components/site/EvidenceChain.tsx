import { Plane, Database, ShieldCheck, FileText, TreePine } from "lucide-react";
import { useCopy } from "@/i18n/useLocale";
import { COPY } from "@/i18n/pages/evidence-chain";

/**
 * Skematisk illustration af evidenskæden.
 * Rent diagram uden opfundne tal eller dashboard-data.
 */
export function EvidenceChain({ compact = false }: { compact?: boolean }) {
  const t = useCopy(COPY);
  const steps = [
    { icon: <Plane className="w-5 h-5" />, t: t.droneTitle, d: t.droneDescription },
    { icon: <Database className="w-5 h-5" />, t: t.publicDataTitle, d: t.publicDataDescription },
    { icon: <ShieldCheck className="w-5 h-5" />, t: t.verificationTitle, d: t.verificationDescription },
    { icon: <FileText className="w-5 h-5" />, t: t.baselineTitle, d: t.baselineDescription },
    { icon: <TreePine className="w-5 h-5" />, t: t.plantingTitle, d: t.plantingDescription },
  ];

  return (
    <div className={`card-soft bg-card ${compact ? "p-5" : "p-6 md:p-8"}`}>
      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{t.heading}</div>
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
        {t.footer}
      </div>
    </div>
  );
}
