import { Link } from "@tanstack/react-router";
import freyraIcon from "@/assets/freyra-icon.png";
import { NewsletterSignup } from "./NewsletterSignup";
import { useLocale } from "@/i18n/LocaleContext";
import { t } from "@/i18n/chrome";

export function Footer() {
  const locale = useLocale();
  const T = t(locale);
  const isEn = locale === "en";

  const platformLinks = isEn
    ? [
        { to: "/en/platform", label: "Platform" },
        { to: "/en/platform/smartconnect", label: "SmartConnect+" },
        { to: "/en/platform/decisionsiq", label: "DecisionsIQ" },
        { to: "/en/platform/esg-ledger", label: "ESG Ledger" },
        { to: "/en/platform/impact-exchange", label: "Impact Exchange" },
        { to: "/en/dashboard", label: "Dashboard" },
      ]
    : [
        { to: "/platform", label: "Platform" },
        { to: "/platform/smartconnect", label: "SmartConnect+" },
        { to: "/platform/decisionsiq", label: "DecisionsIQ" },
        { to: "/platform/esg-ledger", label: "ESG Ledger" },
        { to: "/platform/impact-exchange", label: "Impact Exchange" },
        { to: "/dashboard", label: "Dashboard" },
      ];

  const solutionLinks = isEn
    ? [
        { to: "/loesninger/kommuner", label: "Municipalities" },
        { to: "/loesninger/industri", label: "Industry & utilities" },
        { to: "/loesninger/esg-compliance", label: "ESG & compliance" },
        { to: "/loesninger/naturprojekter", label: "Nature projects" },
      ]
    : [
        { to: "/loesninger/kommuner", label: "Kommuner" },
        { to: "/loesninger/industri", label: "Industri og forsyning" },
        { to: "/loesninger/esg-compliance", label: "ESG og compliance" },
        { to: "/loesninger/naturprojekter", label: "Naturprojekter" },
      ];

  const companyLinks = isEn
    ? [
        { to: "/en/about", label: "About GoFreyra" },
        { to: "/indsigter", label: "Insights" },
        { to: "/use-cases", label: "Use cases" },
        { to: "/brancher", label: "Industries" },
        { to: "/data", label: "Data" },
        { to: "/problemer", label: "Problems" },
        { to: "/projekter", label: "Projects" },
        { to: "/datakilder", label: "Data sources" },
        { to: "/ordbog", label: "Glossary" },
        { to: "/en/pricing", label: "Pricing" },
        { to: "/en/book-demo", label: "Book a demo" },
        { to: "/en/contact", label: "Contact" },
      ]
    : [
        { to: "/om", label: "Om GoFreyra" },
        { to: "/indsigter", label: "Indsigter" },
        { to: "/use-cases", label: "Use cases" },
        { to: "/brancher", label: "Brancher" },
        { to: "/data", label: "Data" },
        { to: "/problemer", label: "Problemer" },
        { to: "/projekter", label: "Projekter" },
        { to: "/datakilder", label: "Datakilder" },
        { to: "/ordbog", label: "Ordbog" },
        { to: "/priser", label: "Priser" },
        { to: "/book-demo", label: "Book demo" },
        { to: "/kontakt", label: "Kontakt" },
      ];

  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="container-page py-14 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <img src={freyraIcon} alt="GoFreyra" className="w-8 h-8 object-contain" />
            <span className="text-brand-deep">GoFreyra</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">{T.footer.tagline}</p>
          <div className="mt-6">
            <p className="text-sm font-semibold">{T.footer.newsletterTitle}</p>
            <p className="text-xs text-muted-foreground mt-1">{T.footer.newsletterBody}</p>
            <NewsletterSignup />
          </div>
        </div>

        <FooterCol title={T.footer.colPlatform} links={platformLinks} />
        <FooterCol title={T.footer.colSolutions} links={solutionLinks} />
        <FooterCol title={T.footer.colCompany} links={companyLinks} />
      </div>
      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} GoFreyra. {T.footer.rights}</div>
          <div>{T.footer.built}</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <div className="text-sm font-semibold mb-3">{title}</div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
