import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import freyraIcon from "@/assets/freyra-icon.png";

const NAV = [
  { to: "/ydelser", label: "Ydelser" },
  { to: "/kommuner", label: "Til kommuner" },
  { to: "/platformen", label: "Platformen" },
  { to: "/om", label: "Om" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <img src={freyraIcon} alt="Freyra" className="w-9 h-9 object-contain" />
          <span className="text-brand-deep">Freyra</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            <Link to="/kontakt">Book en snak</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 space-y-3">
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
            <Button asChild className="w-full rounded-full">
              <Link to="/kontakt" onClick={() => setOpen(false)}>Book en snak</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
