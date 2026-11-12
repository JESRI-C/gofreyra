import { toLocale, localizePath, SCHEMA_LANG } from "@/i18n/locale";
import { useLocale } from "@/i18n/useLocale";
import { KNOWLEDGE_COPY } from "@/i18n/pages/knowledge";
import { LLink } from "@/components/site/LLink";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Band, PageHero } from "@/components/site/blocks";
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
      <PageHero
        tone="sky"
        title={k.hub.h1}
        body={k.hub.intro}
        breadcrumb={(
        <nav aria-label={k.breadcrumb} className="text-sm text-muted-foreground">
          <LLink to="/" className="hover:text-foreground">{k.home}</LLink> <span aria-hidden>/</span> <span>{k.viden}</span>
        </nav>
        )}
      >

      </PageHero>

      {clusters(locale).map((c, ci) => (
        <Band key={c.name} tone={ci % 2 === 1 ? "ivory" : "paper"}>
          <div className="container-page py-20 md:py-28 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <h2 className="text-3xl md:text-5xl lg:sticky lg:top-28 self-start">{c.name}</h2>
            <div className="border-b border-border min-w-0">
              {c.items.map((a) => {
                const pillar = a.kind === "pillar";
                return (
                  <article key={a.slug} className="border-t border-border py-8">
                    {pillar && <div className="text-xs font-medium uppercase tracking-wider text-forest">{k.hub.overview}</div>}
                    <h3 className="mt-2 font-display text-2xl md:text-3xl">
                      <LLink to="/viden/$slug" params={{ slug: a.slug }} className="hover:text-forest transition">{a.h1}</LLink>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{shorten(a.intro, 160)}</p>
                    <LLink to="/viden/$slug" params={{ slug: a.slug }} className="mt-4 inline-flex items-center text-sm font-medium text-forest" aria-label={`${k.hub.readAria}${a.h1}`}>
                      {k.hub.read} <ArrowRight className="ml-1 w-4 h-4" />
                    </LLink>
                  </article>
                );
              })}
            </div>
          </div>
        </Band>
      ))}

      <Band tone="sky">
      <div className="container-page py-20 md:py-28">
        <div className="border-t border-border pt-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">{k.ordbog}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{k.hub.glossaryBody}</p>
          </div>
          <LLink to="/ordbog" className="inline-flex items-center text-sm font-medium text-forest">
            {k.hub.toGlossary} <ArrowRight className="ml-1 w-4 h-4" />
          </LLink>
        </div>
      </div>
      </Band>

      <CTASection />
    </PageLayout>
  );
}
