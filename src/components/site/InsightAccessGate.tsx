import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock, Check, ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { INTEREST_AREAS, type Insight } from "@/data/insights";

const Schema = z.object({
  name: z.string().trim().min(1, "Navn er påkrævet").max(120),
  company: z.string().trim().min(1, "Virksomhed er påkrævet").max(160),
  email: z.string().trim().email("Ugyldig email").max(200),
  role: z.string().trim().max(120).optional().or(z.literal("")),
  interest_area: z.string().trim().max(80).optional().or(z.literal("")),
  consent: z.literal(true, { errorMap: () => ({ message: "Samtykke er påkrævet" }) }),
});

export function InsightAccessGate({ insight, onUnlock }: { insight: Insight; onUnlock: () => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    interest_area: "",
    consent: false,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = Schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Tjek formularen");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("insight_access_requests").insert({
      name: parsed.data.name,
      company: parsed.data.company,
      email: parsed.data.email,
      role: parsed.data.role || null,
      interest_area: parsed.data.interest_area || null,
      article_slug: insight.slug,
      article_title: insight.title,
      consent: true,
      status: "new",
    });
    setSubmitting(false);
    if (error) {
      toast.error("Noget gik galt. Prøv igen om lidt.");
      return;
    }
    toast.success("Tak. Du har nu adgang til hele indsigten.");
    onUnlock();
  }

  return (
    <div className="rounded-2xl border border-border p-6 md:p-8 shadow-sm" style={{ backgroundColor: "#F5F1E8" }}>
      <div className="flex items-center gap-2 text-brand-deep">
        <Lock className="w-4 h-4" />
        <span className="text-xs font-semibold uppercase tracking-wider">Adgang til hele indsigten</span>
      </div>
      <h3 className="mt-3 text-2xl md:text-3xl font-bold text-brand-deep">Få adgang til hele indsigten</h3>
      <p className="mt-3 text-foreground/80 max-w-2xl">
        Denne analyse går dybere ned i datagrundlag, dokumentation og praktiske anvendelser. Udfyld formularen, så får du adgang til hele indholdet.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
        <Field label="Navn" required>
          <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={120} required />
        </Field>
        <Field label="Virksomhed/organisation" required>
          <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} maxLength={160} required />
        </Field>
        <Field label="Email" required>
          <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={200} required />
        </Field>
        <Field label="Rolle">
          <Input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} maxLength={120} placeholder="Fx ESG-ansvarlig" />
        </Field>
        <Field label="Interesseområde" className="sm:col-span-2">
          <select
            value={form.interest_area}
            onChange={(e) => setForm({ ...form, interest_area: e.target.value })}
            className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
          >
            <option value="">Vælg…</option>
            {INTEREST_AREAS.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </Field>

        <label className="sm:col-span-2 flex items-start gap-3 text-sm text-foreground/80 cursor-pointer">
          <Checkbox checked={form.consent} onCheckedChange={(v) => setForm({ ...form, consent: v === true })} className="mt-0.5" />
          <span>Jeg accepterer, at GoFreyra må kontakte mig med relevant viden, invitationer og information om platformen.</span>
        </label>

        <div className="sm:col-span-2 flex flex-wrap items-center gap-3 mt-2">
          <Button type="submit" disabled={submitting} className="rounded-full h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground">
            {submitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sender…</> : <>Få adgang <ArrowRight className="ml-1.5 w-4 h-4" /></>}
          </Button>
          <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-primary" /> Vi deler ikke jeres oplysninger med tredjepart.
          </span>
        </div>
      </form>
    </div>
  );
}

function Field({ label, required, children, className }: { label: string; required?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <Label className="text-sm font-medium">{label}{required && <span className="text-primary"> *</span>}</Label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
