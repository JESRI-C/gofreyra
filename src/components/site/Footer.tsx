import { Link } from "@tanstack/react-router";
import freyraIcon from "@/assets/freyra-icon.png";

const LINKS = [
  { to: "/ydelser", label: "Ydelser" },
  { to: "/kommuner", label: "Til kommuner" },
  { to: "/platformen", label: "Platformen" },
  { to: "/om", label: "Om" },
  { to: "/kontakt", label: "Kontakt" },
  { to: "/privatlivspolitik", label: "Privatlivspolitik" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="container-page py-14 grid gap-10 md:grid-cols-3">
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
          <div className="text-sm font-semibold mb-3">Sider</div>
          <ul className="space-y-2">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground">{l.label}</Link>
              </li>
            ))}
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
          <Link to="/privatlivspolitik" className="hover:text-foreground">Privatlivspolitik</Link>
        </div>
      </div>
    </footer>
  );
}
