import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageLayout } from "@/components/site/PageLayout";
import { buildHead } from "@/components/site/SEO";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Indtast dit navn").max(120),
  company: z.string().trim().min(1, "Indtast virksomhed/organisation").max(160),
  email: z.string().trim().email("Ugyldig email").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  sector: z.string().trim().max(80).optional().or(z.literal("")),
  challenge: z.string().trim().max(500).optional().or(z.literal("")),
  interest_area: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const interests = [
  "ESG-rapportering",
  "Biodiversitetsovervågning",
  "Sensordata",
  "Dashboard",
  "Impact-dokumentation",
  "Pilotprojekt",
];

export const Route = createFileRoute("/book-demo")({
  head: () => buildHead({
    title: "Book demo — GoFreyra SaaS-platform",
    description: "Book en demo og se, hvordan miljødata fra virkeligheden kan blive til verificerbar bæredygtighedsdokumentation.",
    path: "/book-demo",
  }),
  component: BookDemoPage,
});

function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Tjek felterne");
      return;
    }
    setLoading(true);
    const { error: dbErr } = await supabase.from("demo_requests").insert({
      name: parsed.data.name,
      company: parsed.data.company,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      sector: parsed.data.sector || null,
      challenge: parsed.data.challenge || null,
      interest_area: parsed.data.interest_area || null,
      message: parsed.data.message || null,
    });
    setLoading(false);
    if (dbErr) {
      setError("Noget gik galt. Prøv igen om lidt.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-20 max-w-3xl">
          <span className="eyebrow">Book demo</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Se GoFreyra med jeres egne data.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            30 minutter med en specialist. Vi gennemgår jeres datakilder, dokumentationsbehov og hvordan SmartConnect+, DecisionsIQ, ESG Ledger og Impact Exchange passer ind.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Pilotopsætning er typisk klar på 2-4 uger. Udfyld formularen, så vender vi tilbage hurtigst muligt.
          </p>
        </div>
      </section>

      <section className="container-page py-12 grid lg:grid-cols-3 gap-5">
        {[
          { t: "1. Vi vender tilbage", d: "Inden for én arbejdsdag aftaler vi tidspunkt og scope." },
          { t: "2. 30 min demo", d: "Tilpasset jeres datakilder, sektor og dokumentationsbehov." },
          { t: "3. Næste skridt", d: "Forslag til pilotforløb — typisk klar på 2-4 uger." },
        ].map((s) => (
          <div key={s.t} className="card-soft p-6"><div className="font-semibold">{s.t}</div><p className="mt-2 text-sm text-muted-foreground">{s.d}</p></div>
        ))}
      </section>

      <section className="container-page py-8 grid lg:grid-cols-2 gap-6">
        <div className="card-soft p-6"><div className="font-semibold">Hvem demoen er for</div><ul className="mt-3 space-y-1.5 text-sm text-muted-foreground list-disc pl-5"><li>ESG- og bæredygtighedsansvarlige</li><li>Drift, miljø og forsyning</li><li>Kommuner og natur­projekter</li><li>Lodsejere og rådgivere</li></ul></div>
        <div className="card-soft p-6"><div className="font-semibold">Hvad I får ud af det</div><ul className="mt-3 space-y-1.5 text-sm text-muted-foreground list-disc pl-5"><li>Konkret gennemgang med jeres datakilder</li><li>Forslag til moduler og pilot-scope</li><li>Indikation af tid og indsats</li><li>Svar på CSRD- og dokumentations­spørgsmål</li></ul></div>
      </section>

      <section className="container-page py-8">
        <div className="max-w-2xl mx-auto card-soft p-6 md:p-10">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 grid place-items-center mx-auto">
                <CheckCircle2 className="w-7 h-7 text-primary" />
              </div>
              <h2 className="mt-4 text-2xl font-bold">Tak</h2>
              <p className="mt-2 text-muted-foreground">
                Vi kontakter dig hurtigst muligt for at drøfte jeres projekt og demobehov.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Navn *" name="name" required />
                <Field label="Virksomhed/organisation *" name="company" required />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Email *" name="email" type="email" required />
                <Field label="Telefon" name="phone" type="tel" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Sektor" name="sector" placeholder="Kommune, industri, naturprojekt …" />
                <div>
                  <Label htmlFor="interest_area" className="mb-1.5 block text-sm font-medium">Interesseområde</Label>
                  <select
                    id="interest_area"
                    name="interest_area"
                    className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option value="">Vælg…</option>
                    {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="challenge" className="mb-1.5 block text-sm font-medium">Største udfordring</Label>
                <Input id="challenge" name="challenge" maxLength={500} />
              </div>
              <div>
                <Label htmlFor="message" className="mb-1.5 block text-sm font-medium">Besked</Label>
                <Textarea id="message" name="message" rows={4} maxLength={2000} />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" disabled={loading} className="w-full rounded-full h-11">
                {loading ? "Sender…" : "Send forespørgsel"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">Vi bruger kun dine oplysninger til at kontakte dig om GoFreyra.</p>
            </form>
          )}
        </div>
      </section>
    </PageLayout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <Label htmlFor={name} className="mb-1.5 block text-sm font-medium">{label}</Label>
      <Input id={name} name={name} type={type} required={required} placeholder={placeholder} />
    </div>
  );
}
