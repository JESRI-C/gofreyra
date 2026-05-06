import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="container-page py-14 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-bold">F</span>
            GoFreyra
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Dansk SaaS-platform til miljødata, ESG-dokumentation og verificerbar impact.
          </p>
        </div>

        <FooterCol title="Platform" links={[
          { to: "/platform", label: "Platform" },
          { to: "/platform/smartconnect", label: "SmartConnect+" },
          { to: "/platform/decisionsiq", label: "DecisionsIQ" },
          { to: "/platform/esg-ledger", label: "ESG Ledger" },
          { to: "/platform/impact-exchange", label: "Impact Exchange" },
          { to: "/dashboard", label: "Dashboard" },
        ]} />

        <FooterCol title="Løsninger" links={[
          { to: "/loesninger/kommuner", label: "Kommuner" },
          { to: "/loesninger/industri", label: "Industri og forsyning" },
          { to: "/loesninger/esg-compliance", label: "ESG og compliance" },
          { to: "/loesninger/naturprojekter", label: "Naturprojekter" },
        ]} />

        <FooterCol title="Selskab" links={[
          { to: "/om", label: "Om GoFreyra" },
          { to: "/indsigter", label: "Indsigter" },
          { to: "/use-cases", label: "Use cases" },
          { to: "/datakilder", label: "Datakilder" },
          { to: "/book-demo", label: "Book demo" },
          { to: "/kontakt", label: "Kontakt" },
        ]} />
      </div>
      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} GoFreyra. Alle rettigheder forbeholdes.</div>
          <div>Bygget til målbar bæredygtighed.</div>
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
