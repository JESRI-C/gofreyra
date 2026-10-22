import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import freyraIcon from "@/assets/freyra-icon.png";
import { YDELSER } from "@/data/ydelser";

const NAV = [
  { to: "/kommuner", label: "Til kommuner" },
  { to: "/fonde-og-lodsejere", label: "Fonde og lodsejere" },
  { to: "/platformen", label: "Platformen" },
  { to: "/saadan-arbejder-vi", label: "Sådan arbejder vi" },
  { to: "/viden", label: "Viden" },
  { to: "/om", label: "Om" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

const linkCls = "px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <img src={freyraIcon} alt="Freyra" className="w-9 h-9 object-contain" />
          <span className="text-brand-deep">Freyra</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <div className="relative group">
            <Link to="/ydelser" className={`${linkCls} inline-flex items-center gap-1`}>
              Ydelser <ChevronDown className="w-3.5 h-3.5" />
            </Link>
            <div className="absolute left-0 top-full pt-1 hidden group-hover:block">
              <div className="w-80 rounded-md border border-border bg-background shadow-lg p-2">
                {YDELSER.map((y) => (
                  <Link
                    key={y.slug}
                    to="/ydelser/$slug"
                    params={{ slug: y.slug }}
                    className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground"
                  >
                    {y.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} className={linkCls}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">
            <Link to="/kontakt">Book en snak</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 space-y-1">
            <button
              className="flex w-full items-center justify-between py-2 text-sm font-medium"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              Ydelser <ChevronDown className={`w-4 h-4 transition ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-3 space-y-1 border-l border-border">
                <Link to="/ydelser" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">
                  Alle ydelser
                </Link>
                {YDELSER.map((y) => (
                  <Link
                    key={y.slug}
                    to="/ydelser/$slug"
                    params={{ slug: y.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-muted-foreground"
                  >
                    {y.title}
                  </Link>
                ))}
              </div>
            )}
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full rounded-md">
                <Link to="/kontakt" onClick={() => setOpen(false)}>Book en snak</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
