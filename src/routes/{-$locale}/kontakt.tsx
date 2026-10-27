import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { contactSchema, type ContactErrorKey } from "@/i18n/contact-schema";
import { PageLayout } from "@/components/site/PageLayout";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, MapPin, Building } from "lucide-react";
import { localizePath, toLocale } from "@/i18n/locale";
import { useCopy } from "@/i18n/useLocale";
import { COPY } from "@/i18n/pages/kontakt";

export const Route = createFileRoute("/{-$locale}/kontakt")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const t = COPY[locale];
    return buildHead({
      title: t.metaTitle,
      description: t.metaDescription,
      path: "/kontakt",
      locale,
      jsonLd: breadcrumbJsonLd([{ name: t.breadcrumbHome, path: localizePath("/", locale) }, { name: t.contact, path: localizePath("/kontakt", locale) }]),
    });
  },
  component: ContactPage,
});

function ContactPage() {
  const t = useCopy(COPY);

  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  // Errors are stored as keys and rendered from the active locale's copy.
  const [error, setError] = useState<ContactErrorKey | "checkFields" | "submissionError" | null>(null);
  const errorText = error === null ? null : error === "checkFields" || error === "submissionError" ? t[error] : t.validation[error];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      setError((parsed.error.issues[0]?.message as ContactErrorKey | undefined) ?? "checkFields");
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
    if (dbErr) { setError("submissionError"); return; }
    setDone(true);
  }

  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-20 max-w-3xl">
          <span className="eyebrow">{t.contact}</span>
          <h1 className="mt-4 text-4xl md:text-5xl ">{t.heading}</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.introduction}
          </p>
        </div>
      </section>

      <section className="container-page py-14 grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <div className="space-y-5">
          <div className="card-soft p-6">
            <div className="flex items-center gap-2 text-sm font-semibold"><Building className="w-4 h-4 text-primary" /> {t.companyHeading}</div>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.companyName}<br />
              {t.companyRegistration}<br />
              {t.companyOwnership}
            </p>
          </div>
          <div className="card-soft p-6">
            <div className="flex items-center gap-2 text-sm font-semibold"><MapPin className="w-4 h-4 text-primary" /> {t.addressHeading}</div>
            <p className="mt-2 text-sm text-muted-foreground">{t.address}</p>
          </div>
          <div className="card-soft p-6">
            <div className="text-sm font-semibold">{t.contactPersonHeading}</div>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.contactPersonName}<br />
              {t.contactPersonRole}<br />
              {t.contactPersonDescription}
            </p>
          </div>
          <div className="card-soft p-6">
            <div className="text-sm font-semibold">{t.nextStepsHeading}</div>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.nextStepsDescription}
            </p>
          </div>
        </div>

        <div className="card-soft p-6 md:p-8">
          {done ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-md bg-primary/10 grid place-items-center mx-auto">
                <CheckCircle2 className="w-7 h-7 text-primary" />
              </div>
              <h2 className="mt-4 text-2xl ">{t.successHeading}</h2>
              <p className="mt-2 text-muted-foreground">{t.successDescription}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div><Label htmlFor="name">{t.nameLabel}</Label><Input id="name" name="name" required className="mt-1.5" /></div>
                <div><Label htmlFor="email">{t.emailLabel}</Label><Input id="email" name="email" type="email" required className="mt-1.5" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div><Label htmlFor="company">{t.companyLabel}</Label><Input id="company" name="company" className="mt-1.5" /></div>
                <div><Label htmlFor="subject">{t.subjectLabel}</Label><Input id="subject" name="subject" className="mt-1.5" /></div>
              </div>
              <div><Label htmlFor="message">{t.messageLabel}</Label><Textarea id="message" name="message" required rows={5} className="mt-1.5" placeholder={t.messagePlaceholder} /></div>
              {errorText && <p className="text-sm text-destructive" role="alert">{errorText}</p>}
              <Button type="submit" disabled={loading} className="w-full rounded-md h-11">{loading ? t.sending : t.sendMessage}</Button>
              <p className="text-xs text-muted-foreground">
                {t.privacyNotice}
              </p>
            </form>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
