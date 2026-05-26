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
  name: z.string().trim().min(1, "Enter your name").max(120),
  company: z.string().trim().min(1, "Enter your company / organisation").max(160),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  sector: z.string().trim().max(80).optional().or(z.literal("")),
  challenge: z.string().trim().max(500).optional().or(z.literal("")),
  interest_area: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const interests = [
  "ESG reporting",
  "Biodiversity monitoring",
  "Sensor data",
  "Dashboard",
  "Impact documentation",
  "Pilot project",
];

export const Route = createFileRoute("/en/book-demo")({
  head: () => buildHead({
    title: "Book a demo — GoFreyra SaaS platform",
    description: "Book a demo and see how data from the real world can become verifiable sustainability documentation.",
    path: "/book-demo",
    locale: "en",
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
      setError(parsed.error.issues[0]?.message ?? "Check the fields");
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
      setError("Something went wrong. Please try again in a moment.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-20 max-w-3xl">
          <span className="eyebrow">Book a demo</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">See GoFreyra with your own data.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            30 minutes with a specialist. We walk through your data sources, documentation needs and how SmartConnect+, DecisionsIQ, ESG Ledger and Impact Exchange fit in.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            A pilot setup is typically ready in 2–4 weeks. Fill in the form and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="container-page py-12 grid lg:grid-cols-3 gap-5">
        {[
          { t: "1. We'll be in touch", d: "Within one business day we'll agree time and scope." },
          { t: "2. 30-minute demo", d: "Tailored to your data sources, sector and documentation needs." },
          { t: "3. Next steps", d: "A pilot proposal — typically ready in 2–4 weeks." },
        ].map((s) => (
          <div key={s.t} className="card-soft p-6"><div className="font-semibold">{s.t}</div><p className="mt-2 text-sm text-muted-foreground">{s.d}</p></div>
        ))}
      </section>

      <section className="container-page py-8 grid lg:grid-cols-2 gap-6">
        <div className="card-soft p-6"><div className="font-semibold">Who the demo is for</div><ul className="mt-3 space-y-1.5 text-sm text-muted-foreground list-disc pl-5"><li>ESG and sustainability leads</li><li>Operations, environment and utilities</li><li>Municipalities and nature projects</li><li>Landowners and advisors</li></ul></div>
        <div className="card-soft p-6"><div className="font-semibold">What you'll get out of it</div><ul className="mt-3 space-y-1.5 text-sm text-muted-foreground list-disc pl-5"><li>A concrete walkthrough with your data sources</li><li>Proposed modules and pilot scope</li><li>An indication of time and effort</li><li>Answers to CSRD and documentation questions</li></ul></div>
      </section>

      <section className="container-page py-8">
        <div className="max-w-2xl mx-auto card-soft p-6 md:p-10">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 grid place-items-center mx-auto">
                <CheckCircle2 className="w-7 h-7 text-primary" />
              </div>
              <h2 className="mt-4 text-2xl font-bold">Thank you</h2>
              <p className="mt-2 text-muted-foreground">
                We'll be in touch shortly to discuss your project and demo needs.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Name *" name="name" required />
                <Field label="Company / organisation *" name="company" required />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Email *" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Sector" name="sector" placeholder="Municipality, industry, nature project …" />
                <div>
                  <Label htmlFor="interest_area" className="mb-1.5 block text-sm font-medium">Area of interest</Label>
                  <select
                    id="interest_area"
                    name="interest_area"
                    className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option value="">Select…</option>
                    {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="challenge" className="mb-1.5 block text-sm font-medium">Biggest challenge</Label>
                <Input id="challenge" name="challenge" maxLength={500} />
              </div>
              <div>
                <Label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</Label>
                <Textarea id="message" name="message" rows={4} maxLength={2000} />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" disabled={loading} className="w-full rounded-full h-11">
                {loading ? "Sending…" : "Send request"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">We only use your details to contact you about GoFreyra.</p>
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
