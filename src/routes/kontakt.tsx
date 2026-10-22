import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageLayout } from "@/components/site/PageLayout";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, MapPin, Building } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Skriv en besked").max(2000),
});

export const Route = createFileRoute("/kontakt")({
  head: () => buildHead({
    title: "Kontakt | Freyra Evidence Workspace",
    description: "Kontakt Freyra om et pilotforløb, en førregistrering eller et samarbejde. Skriv via formularen, så vender vi tilbage.",
    path: "/kontakt",
    jsonLd: breadcrumbJsonLd([{ name: "Forside", path: "/" }, { name: "Kontakt", path: "/kontakt" }]),
  }),
  component: ContactPage,
});

function ContactPage() {
  const [done, setDone] = useState(false);
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
    const { error: dbErr } = await supabase.from("contact_messages").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company || null,
      subject: parsed.data.subject || null,
      message: parsed.data.message,
    });
    setLoading(false);
    if (dbErr) { setError("Noget gik galt. Prøv igen."); return; }
    setDone(true);
  }

  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-20 max-w-3xl">
          <span className="eyebrow">Kontakt</span>
          <h1 className="mt-4 text-4xl md:text-5xl ">Book en snak om jeres projekt.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Fortæl os kort om området eller opgaven, så vender vi tilbage med en konkret vurdering af, hvad der kan dokumenteres.
          </p>
        </div>
      </section>

      <section className="container-page py-14 grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <div className="space-y-5">
          <div className="card-soft p-6">
            <div className="flex items-center gap-2 text-sm font-semibold"><Building className="w-4 h-4 text-primary" /> Selskab</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Gofreyra ApS<br />
              CVR 45384489<br />
              Ejet af Freyra Group ApS
            </p>
          </div>
          <div className="card-soft p-6">
            <div className="flex items-center gap-2 text-sm font-semibold"><MapPin className="w-4 h-4 text-primary" /> Adresse</div>
            <p className="mt-2 text-sm text-muted-foreground">Bøgevej 4, 7160 Tørring</p>
          </div>
          {/* TODO: Tilføj direkte email og telefon, når de er klar fra kunden. */}
          <div className="card-soft p-6">
            <div className="text-sm font-semibold">Hvad sker der bagefter?</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Vi læser jeres besked og vender tilbage inden for én arbejdsdag. Typisk starter vi med en kort samtale om området, datagrundlaget og hvad en førregistrering kan give jer.
            </p>
          </div>
        </div>

        <div className="card-soft p-6 md:p-8">
          {done ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-md bg-primary/10 grid place-items-center mx-auto">
                <CheckCircle2 className="w-7 h-7 text-primary" />
              </div>
              <h2 className="mt-4 text-2xl ">Tak for beskeden</h2>
              <p className="mt-2 text-muted-foreground">Vi vender tilbage inden for én arbejdsdag.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div><Label htmlFor="name">Navn *</Label><Input id="name" name="name" required className="mt-1.5" /></div>
                <div><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" required className="mt-1.5" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div><Label htmlFor="company">Virksomhed eller kommune</Label><Input id="company" name="company" className="mt-1.5" /></div>
                <div><Label htmlFor="subject">Emne</Label><Input id="subject" name="subject" className="mt-1.5" /></div>
              </div>
              <div><Label htmlFor="message">Besked *</Label><Textarea id="message" name="message" required rows={5} className="mt-1.5" placeholder="Fortæl kort om området eller opgaven" /></div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" disabled={loading} className="w-full rounded-md h-11">{loading ? "Sender…" : "Send besked"}</Button>
              <p className="text-xs text-muted-foreground">
                Vi bruger kun jeres oplysninger til at svare på henvendelsen. Læs mere i vores privatlivspolitik.
              </p>
            </form>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
