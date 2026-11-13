import { ydelserFor } from "@/data/ydelser";
import { LLink } from "@/components/site/LLink";
import { BrandFamily } from "@/components/site/BrandFamily";
import { GoFreyraOwnerLogo, FreyraGroupLogo } from "@/components/site/brand";
import { useLocale } from "@/i18n/useLocale";
import { CHROME_COPY } from "@/i18n/pages/chrome";

export function Footer() {
  const locale = useLocale();
  const t = CHROME_COPY[locale].footer;
  const ydelser = ydelserFor(locale);
  const cls = "text-sm text-foreground/80 hover:text-brand-deep hover:underline";
  const head = "text-xs font-semibold uppercase tracking-[0.12em] text-brand-deep mb-4";
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-14 md:py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_0.8fr_1fr]">
        <div>
          <LLink to="/" className="inline-block rounded-sm" aria-label={CHROME_COPY[locale].nav.home}>
            <GoFreyraOwnerLogo alt="" className="h-16" />
          </LLink>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">{t.tagline}</p>
        </div>

        <div>
          <div className={head}>{t.services}</div>
          <ul className="space-y-2.5">
            <li><LLink to="/ydelser" className={cls}>{t.allServices}</LLink></li>
            {ydelser.map((y) => (
              <li key={y.slug}>
                <LLink to="/ydelser/$slug" params={{ slug: y.slug }} className={cls}>{y.title}</LLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className={head}>{t.pages}</div>
          <ul className="space-y-2.5">
            {t.pageLinks.map((l) => (
              <li key={l.to}><LLink to={l.to} className={cls}>{l.label}</LLink></li>
            ))}
          </ul>
        </div>

        <div>
          <div className={head}>{t.knowledge}</div>
          <ul className="space-y-2.5">
            {t.knowledgeLinks.map((l) => (
              <li key={l.to}><LLink to={l.to} className={cls}>{l.label}</LLink></li>
            ))}
          </ul>
        </div>

        <div>
          <div className={head}>{t.company}</div>
          <address className="not-italic text-sm text-foreground/80 space-y-1">
            <div>Gofreyra ApS</div>
            <div>CVR 45384489</div>
            <div>Bøgevej 4, 7160 Tørring</div>
            <div>{t.owned}</div>
          </address>
          <FreyraGroupLogo className="mt-5 h-7" />
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Gofreyra ApS. {t.rights}</div>
          <BrandFamily />
          <LLink to="/privatlivspolitik" className="hover:text-foreground hover:underline">{t.privacy}</LLink>
        </div>
      </div>
    </footer>
  );
}
