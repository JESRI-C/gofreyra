import { LLink } from "@/components/site/LLink";
import { Link } from "@tanstack/react-router";
import freyraIcon from "@/assets/freyra-icon.png";
import { YDELSER } from "@/data/ydelser";

const SIDER = [
  { to: "/kommuner", label: "Til kommuner" },
  { to: "/fonde-og-lodsejere", label: "Fonde og lodsejere" },
  { to: "/platformen", label: "Platformen" },
  { to: "/saadan-arbejder-vi", label: "Sådan arbejder vi" },
  { to: "/luftfoto", label: "Luftfoto" },
  { to: "/faq", label: "FAQ" },
  { to: "/om", label: "Om" },
  { to: "/kontakt", label: "Kontakt" },
  { to: "/privatlivspolitik", label: "Privatlivspolitik" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <div className="flex items-center gap-2 font-semibold text-lg">
            <img src={freyraIcon} alt="Freyra" className="w-8 h-8 object-contain" />
            <span className="text-brand-deep">Freyra</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Freyra Evidence Workspace. En verificerbar evidenskæde for natur- og arealprojekter i Grøn Trepart.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Ydelser</div>
          <ul className="space-y-2">
            <li>
              <LLink to="/ydelser" className="text-sm text-muted-foreground hover:text-foreground">Alle ydelser</LLink>
            </li>
            {YDELSER.map((y) => (
              <li key={y.slug}>
                <LLink to="/ydelser/$slug" params={{ slug: y.slug }} className="text-sm text-muted-foreground hover:text-foreground">{y.title}</LLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Sider</div>
          <ul className="space-y-2">
            {SIDER.map((l) => (
              <li key={l.to}>
                <LLink to={l.to} className="text-sm text-muted-foreground hover:text-foreground">{l.label}</LLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Viden</div>
          <ul className="space-y-2">
            <li><LLink to="/viden" className="text-sm text-muted-foreground hover:text-foreground">Viden</LLink></li>
            <li><LLink to="/ordbog" className="text-sm text-muted-foreground hover:text-foreground">Ordbog</LLink></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Selskab</div>
          <address className="not-italic text-sm text-muted-foreground space-y-1">
            <div>Gofreyra ApS</div>
            <div>CVR 45384489</div>
            <div>Bøgevej 4, 7160 Tørring</div>
            <div>Ejet af Freyra Group ApS</div>
          </address>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Gofreyra ApS. Alle rettigheder forbeholdes.</div>
          <LLink to="/privatlivspolitik" className="hover:text-foreground">Privatlivspolitik</LLink>
        </div>
      </div>
    </footer>
  );
}
