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
    <div className={`border-y border-border ${compact ? "py-5" : "py-8 md:py-10"}`}>
      <div className="eyebrow">{t.heading}</div>
      <div className="mt-8 grid gap-5">
        {steps.map((s, i) => (
          <div key={s.t} className="flex items-stretch gap-5">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-2 border-eyebrow text-eyebrow grid place-items-center shrink-0">{s.icon}</div>
              {i < steps.length - 1 && <div className="w-px flex-1 min-h-6 bg-border mt-2" />}
            </div>
            <div className="pt-1.5">
              <div className="font-display text-lg">{s.t}</div>
              {!compact && <div className="text-sm text-muted-foreground mt-1">{s.d}</div>}
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
