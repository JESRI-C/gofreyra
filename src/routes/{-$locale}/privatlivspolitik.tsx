import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";
import { localizePath, toLocale } from "@/i18n/locale";
import { useCopy } from "@/i18n/useLocale";
import { COPY } from "@/i18n/pages/privatliv";

export const Route = createFileRoute("/{-$locale}/privatlivspolitik")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const t = COPY[locale];
    return buildHead({
      title: t.metaTitle,
      description: t.metaDescription,
      path: "/privatlivspolitik",
      locale,
      jsonLd: breadcrumbJsonLd([
        { name: t.breadcrumbHome, path: localizePath("/", locale) },
        { name: t.breadcrumbPrivacy, path: localizePath("/privatlivspolitik", locale) },
      ]),
    });
  },
  component: PrivacyPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl ">{title}</h2>
      <div className="mt-3 space-y-3 text-sm text-foreground/85 leading-relaxed">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  const t = useCopy(COPY);

  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-20 max-w-3xl">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="mt-4 text-4xl md:text-5xl ">{t.heading}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{t.updated}</p>
          {t.translationNotice ? <p>{t.translationNotice}</p> : null}
        </div>
      </section>

      <div className="container-page py-14 max-w-3xl">
        <Section title={t.controller.title}>
          <p>
            {t.controller.description}
          </p>
          <p>{t.controller.contact}</p>
        </Section>

        <Section title={t.collection.title}>
          <p>
            {t.collection.contactForm}
          </p>
          <p>
            {t.collection.workspace}
          </p>
        </Section>

        <Section title={t.purpose.title}>
          <p>
            {t.purpose.description}
          </p>
        </Section>

        <Section title={t.retention.title}>
          <p>
            {t.retention.description}
          </p>
        </Section>

        <Section title={t.disclosure.title}>
          <p>
            {t.disclosure.description}
          </p>
        </Section>

        <Section title={t.cookies.title}>
          <p>
            {t.cookies.description}
          </p>
        </Section>

        <Section title={t.rights.title}>
          <p>
            {t.rights.description}
          </p>
          <p>
            {t.rights.complaint}
          </p>
        </Section>

        <Section title={t.changes.title}>
          <p>
            {t.changes.description}
          </p>
        </Section>
      </div>
    </PageLayout>
  );
}
