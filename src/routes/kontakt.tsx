import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageLayout } from "@/components/site/PageLayout";
import { buildHead } from "@/components/site/SEO";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Mail } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Skriv en besked").max(2000),
});

export const Route = createFileRoute("/kontakt")({
  head: () => buildHead({
    title: "Kontakt — GoFreyra",
    description: "Kontakt GoFreyra. Skriv til os om platform, pilotprojekter eller partnerskaber.",
    path: "/kontakt",
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
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Lad os tale sammen.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Skriv til os om platformen, et pilotprojekt eller et partnerskab. Vi vender tilbage inden for én arbejdsdag.
          </p>
        </div>
      </section>

      <section className="container-page py-14 grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <div className="space-y-5">
          <div className="card-soft p-6">
            <div className="flex items-center gap-2 text-sm font-semibold"><Mail className="w-4 h-4 text-primary" /> Email</div>
            <a href="mailto:hello@gofreyra.com" className="mt-2 block text-lg font-medium text-brand-deep">hello@gofreyra.com</a>
          </div>
          <div className="card-soft p-6">
            <div className="text-sm font-semibold">GoFreyra</div>
            <p className="mt-2 text-sm text-muted-foreground">Dansk SaaS-platform til miljødata, ESG-dokumentation og verificerbar impact.</p>
          </div>
          <div className="card-soft p-6">
            <div className="text-sm font-semibold">Vil du se platformen?</div>
            <p className="mt-2 text-sm text-muted-foreground">Book 30 minutter med en specialist — vi tilpasser demoen til jeres datakilder.</p>
            <Button asChild className="mt-3 rounded-full"><Link to="/book-demo">Book demo</Link></Button>
          </div>
        </div>

        <div className="card-soft p-6 md:p-8">
          {done ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 grid place-items-center mx-auto">
                <CheckCircle2 className="w-7 h-7 text-primary" />
              </div>
              <h2 className="mt-4 text-2xl font-bold">Tak for beskeden</h2>
              <p className="mt-2 text-muted-foreground">Vi vender tilbage hurtigst muligt.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div><Label htmlFor="name">Navn *</Label><Input id="name" name="name" required className="mt-1.5" /></div>
                <div><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" required className="mt-1.5" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div><Label htmlFor="company">Virksomhed</Label><Input id="company" name="company" className="mt-1.5" /></div>
                <div><Label htmlFor="subject">Emne</Label><Input id="subject" name="subject" className="mt-1.5" /></div>
              </div>
              <div><Label htmlFor="message">Besked *</Label><Textarea id="message" name="message" required rows={5} className="mt-1.5" /></div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" disabled={loading} className="w-full rounded-full h-11">{loading ? "Sender…" : "Send besked"}</Button>
            </form>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
