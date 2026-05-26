import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import freyraIcon from "@/assets/freyra-icon.png";

const platformItems = [
  { to: "/platform", label: "GoFreyra Platform", desc: "Hele platformen i ét overblik" },
  { to: "/platform/smartconnect", label: "SmartConnect+", desc: "Indsamler data fra sensor, drone, satellit og felt" },
  { to: "/platform/decisionsiq", label: "DecisionsIQ", desc: "Analyserer data og giver konkrete anbefalinger" },
  { to: "/platform/esg-ledger", label: "ESG Ledger", desc: "Dokumenterer data med audit trail og kildehenvisning" },
  { to: "/platform/impact-exchange", label: "Impact Exchange", desc: "Synliggør og aktiverer verificeret impact" },
  { to: "/dashboard", label: "GoFreyra Dashboard", desc: "Samler det hele i ét operationelt overblik" },
];


export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <img src={freyraIcon} alt="GoFreyra" className="w-9 h-9 object-contain" />
          <span className="text-brand-deep">GoFreyra</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <NavDropdown label="Platform" items={platformItems} wide />
          <Link to="/brancher" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground">Brancher</Link>
          <Link to="/use-cases" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground">Use cases</Link>
          <Link to="/data" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground">Data</Link>
          <Link to="/problemer" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground">Problemer</Link>
          <Link to="/indsigter" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground">Indsigter</Link>
          <Link to="/priser" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground">Priser</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link to="/kontakt" className="text-sm font-medium text-foreground/80 hover:text-foreground px-3">Kontakt</Link>
          <Button asChild variant="outline" className="rounded-full h-9 px-4">
            <Link to="/dashboard">Log ind</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            <Link to="/book-demo">Book demo</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 space-y-3">
            <MobileGroup label="Platform" items={platformItems} onClick={() => setOpen(false)} />
            <Link to="/brancher" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">Brancher</Link>
            <Link to="/use-cases" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">Use cases</Link>
            <Link to="/data" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">Data</Link>
            <Link to="/problemer" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">Problemer</Link>
            <Link to="/indsigter" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">Indsigter</Link>
            <Link to="/priser" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">Priser</Link>
            <Link to="/om" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">Om</Link>
            <Link to="/kontakt" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">Kontakt</Link>
            <Button asChild variant="outline" className="w-full rounded-full">
              <Link to="/dashboard" onClick={() => setOpen(false)}>Log ind på dashboard</Link>
            </Button>
            <Button asChild className="w-full rounded-full">
              <Link to="/book-demo" onClick={() => setOpen(false)}>Book demo</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavDropdown({ label, items, wide }: { label: string; items: { to: string; label: string; desc?: string }[]; wide?: boolean }) {
  return (
    <div className="relative group">
      <button className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground inline-flex items-center gap-1">
        {label} <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
      </button>
      <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-0 top-full pt-2 ${wide ? "w-[420px]" : "w-64"}`}>
        <div className="card-soft p-2 bg-card">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="block px-3 py-2.5 rounded-lg hover:bg-secondary transition"
            >
              <div className="font-medium text-sm">{it.label}</div>
              {it.desc && <div className="text-xs text-muted-foreground mt-0.5">{it.desc}</div>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileGroup({ label, items, onClick }: { label: string; items: { to: string; label: string }[]; onClick: () => void }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-2 mb-1">{label}</div>
      {items.map((i) => (
        <Link key={i.to} to={i.to} onClick={onClick} className="block py-1.5 text-sm">{i.label}</Link>
      ))}
    </div>
  );
}
