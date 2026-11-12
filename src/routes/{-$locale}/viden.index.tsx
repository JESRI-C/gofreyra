import { toLocale, localizePath, SCHEMA_LANG } from "@/i18n/locale";
import { useLocale } from "@/i18n/useLocale";
import { KNOWLEDGE_COPY } from "@/i18n/pages/knowledge";
import { LLink } from "@/components/site/LLink";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";
import { clusters, shorten } from "@/lib/viden-helpers";
import { DEFAULT_OG_IMAGE } from "@/lib/photo-variants";

export const Route = createFileRoute("/{-$locale}/viden/")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const k = KNOWLEDGE_COPY[locale];
    return buildHead({
      title: k.hub.title,
      description: k.hub.description,
      path: "/viden",
      locale,
      ogImage: DEFAULT_OG_IMAGE,
      jsonLd: breadcrumbJsonLd([
        { name: k.home, path: localizePath("/", locale) },
        { name: k.viden, path: localizePath("/viden", locale) },
      ]),
    });
  },
  component: VidenHub,
});

function VidenHub() {
  const locale = useLocale();
  const k = KNOWLEDGE_COPY[locale];
  return (
    <PageLayout>
      <section className="container-page py-12 md:py-16 max-w-3xl">
        <nav aria-label={k.breadcrumb} className="text-sm text-muted-foreground">
          <LLink to="/" className="hover:text-foreground">{k.home}</LLink> <span aria-hidden>/</span> <span>{k.viden}</span>
        </nav>
        <h1 className="mt-5 text-3xl md:text-5xl leading-[1.12]">{k.hub.h1}</h1>
        <p className="mt-6 text-lg text-muted-foreground">{k.hub.intro}</p>
      </section>

      {clusters(locale).map((c, ci) => (
        <section key={c.name} className={ci % 2 === 1 ? "surface-beige" : ""}>
          <div className="container-page py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl">{c.name}</h2>
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {c.items.map((a) => {
                const pillar = a.kind === "pillar";
                return (
                  <article key={a.slug} className={`card-soft p-6 bg-card ${pillar ? "md:col-span-2 lg:col-span-3 border-primary/30" : ""}`}>
                    {pillar && <div className="text-xs font-medium uppercase tracking-wider text-brand-deep">{k.hub.overview}</div>}
                    <h3 className={`mt-1 font-semibold ${pillar ? "text-xl md:text-2xl" : "text-base"}`}>
                      <LLink to="/viden/$slug" params={{ slug: a.slug }} className="hover:text-brand-deep transition">{a.h1}</LLink>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{shorten(a.intro, 160)}</p>
                    <LLink to="/viden/$slug" params={{ slug: a.slug }} className="mt-4 inline-flex items-center text-sm font-medium text-brand-deep" aria-label={`${k.hub.readAria}${a.h1}`}>
                      {k.hub.read} <ArrowRight className="ml-1 w-4 h-4" />
                    </LLink>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="container-page py-12">
        <div className="card-soft p-6 bg-card flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">{k.ordbog}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{k.hub.glossaryBody}</p>
          </div>
          <LLink to="/ordbog" className="inline-flex items-center text-sm font-medium text-brand-deep">
            {k.hub.toGlossary} <ArrowRight className="ml-1 w-4 h-4" />
          </LLink>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
