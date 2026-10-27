import freyraIcon from "@/assets/freyra-icon.png";
import { ydelserFor } from "@/data/ydelser";
import { LLink } from "@/components/site/LLink";
import { useLocale } from "@/i18n/useLocale";
import { CHROME_COPY } from "@/i18n/pages/chrome";

export function Footer() {
  const locale = useLocale();
  const t = CHROME_COPY[locale].footer;
  const ydelser = ydelserFor(locale);
  const cls = "text-sm text-muted-foreground hover:text-foreground";
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <div className="flex items-center gap-2 font-semibold text-lg">
            <img src={freyraIcon} alt="Freyra" className="w-8 h-8 object-contain" />
            <span className="text-brand-deep">Freyra</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">{t.tagline}</p>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">{t.services}</div>
          <ul className="space-y-2">
            <li><LLink to="/ydelser" className={cls}>{t.allServices}</LLink></li>
            {ydelser.map((y) => (
              <li key={y.slug}>
                <LLink to="/ydelser/$slug" params={{ slug: y.slug }} className={cls}>{y.title}</LLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">{t.pages}</div>
          <ul className="space-y-2">
            {t.pageLinks.map((l) => (
              <li key={l.to}><LLink to={l.to} className={cls}>{l.label}</LLink></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">{t.knowledge}</div>
          <ul className="space-y-2">
            {t.knowledgeLinks.map((l) => (
              <li key={l.to}><LLink to={l.to} className={cls}>{l.label}</LLink></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">{t.company}</div>
          <address className="not-italic text-sm text-muted-foreground space-y-1">
            <div>Gofreyra ApS</div>
            <div>CVR 45384489</div>
            <div>Bøgevej 4, 7160 Tørring</div>
            <div>{t.owned}</div>
          </address>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Gofreyra ApS. {t.rights}</div>
          <LLink to="/privatlivspolitik" className="hover:text-foreground">{t.privacy}</LLink>
        </div>
      </div>
    </footer>
  );
}
