import { ydelserFor } from "@/data/ydelser";
import { LLink } from "@/components/site/LLink";
import { BrandFamily } from "@/components/site/BrandFamily";
import { BrandGlyph, BrandMark } from "@/components/brand/marks";
import { useLocale } from "@/i18n/useLocale";
import { CHROME_COPY } from "@/i18n/pages/chrome";

export function Footer() {
  const locale = useLocale();
  const t = CHROME_COPY[locale].footer;
  const ydelser = ydelserFor(locale);
  const cls = "text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline";
  const head = "font-display text-base text-sky mb-4";
  return (
    <footer>
      <div className="tone-forest relative overflow-hidden">
        <BrandGlyph
          id="group"
          strokeWidth={0.8}
          className="pointer-events-none absolute -right-32 -top-24 h-[560px] w-[560px] text-sage/15 md:-right-10"
        />
        <div className="relative container-page py-16 md:py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <LLink to="/" className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Freyra">
              <BrandMark id="gofreyra" variant="reverse" size={56} />
              <span className="font-display text-3xl font-semibold tracking-[-0.03em] text-ivory">Freyra</span>
            </LLink>
            <p className="mt-5 text-base text-muted-foreground max-w-sm leading-relaxed">{t.tagline}</p>
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
            <address className="not-italic text-sm text-muted-foreground space-y-1.5">
              <div>Gofreyra ApS</div>
              <div>CVR 45384489</div>
              <div>Bøgevej 4, 7160 Tørring</div>
              <div>{t.owned}</div>
            </address>
          </div>
        </div>
      </div>
      <div className="tone-ivory border-t border-border">
        <div className="container-page py-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Gofreyra ApS. {t.rights}</div>
          <BrandFamily />
          <LLink to="/privatlivspolitik" className="hover:text-foreground">{t.privacy}</LLink>
        </div>
      </div>
    </footer>
  );
}
