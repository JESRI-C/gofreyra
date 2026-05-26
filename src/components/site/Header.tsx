import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import freyraIcon from "@/assets/freyra-icon.png";
import { useLocale } from "@/i18n/LocaleContext";
import { t } from "@/i18n/chrome";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const T = t(locale);
  const base = locale === "en" ? "/en" : "";
  const home = locale === "en" ? "/en" : "/";

  const platformItems = T.platformMenu.items;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to={home} className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <img src={freyraIcon} alt="GoFreyra" className="w-9 h-9 object-contain" />
          <span className="text-brand-deep">GoFreyra</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <NavDropdown label={T.platformMenu.title} items={platformItems} wide />
          <Link to={`${base}/brancher`} className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground">{T.nav.brancher}</Link>
          <Link to={`${base}/use-cases`} className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground">{T.nav.useCases}</Link>
          <Link to={`${base}/data`} className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground">{T.nav.data}</Link>
          <Link to={`${base}/problemer`} className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground">{T.nav.problemer}</Link>
          <Link to={`${base}/indsigter`} className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground">{T.nav.indsigter}</Link>
          <Link to={locale === "en" ? "/en/pricing" : "/priser"} className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground">{T.nav.priser}</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <LanguageSwitcher />
          <Link to={locale === "en" ? "/en/contact" : "/kontakt"} className="text-sm font-medium text-foreground/80 hover:text-foreground px-3">{T.nav.kontakt}</Link>
          <Button asChild variant="outline" className="rounded-full h-9 px-4">
            <Link to={locale === "en" ? "/en/dashboard" : "/dashboard"}>{T.cta.login}</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            <Link to={locale === "en" ? "/en/book-demo" : "/book-demo"}>{T.cta.bookDemo}</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 space-y-3">
            <MobileGroup label={T.platformMenu.title} items={platformItems} onClick={() => setOpen(false)} />
            <Link to={`${base}/brancher`} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">{T.nav.brancher}</Link>
            <Link to={`${base}/use-cases`} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">{T.nav.useCases}</Link>
            <Link to={`${base}/data`} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">{T.nav.data}</Link>
            <Link to={`${base}/problemer`} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">{T.nav.problemer}</Link>
            <Link to={`${base}/indsigter`} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">{T.nav.indsigter}</Link>
            <Link to={locale === "en" ? "/en/pricing" : "/priser"} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">{T.nav.priser}</Link>
            <Link to={locale === "en" ? "/en/about" : "/om"} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">{T.nav.om}</Link>
            <Link to={locale === "en" ? "/en/contact" : "/kontakt"} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">{T.nav.kontakt}</Link>
            <div className="py-2"><LanguageSwitcher /></div>
            <Button asChild variant="outline" className="w-full rounded-full">
              <Link to={locale === "en" ? "/en/dashboard" : "/dashboard"} onClick={() => setOpen(false)}>{T.cta.loginMobile}</Link>
            </Button>
            <Button asChild className="w-full rounded-full">
              <Link to={locale === "en" ? "/en/book-demo" : "/book-demo"} onClick={() => setOpen(false)}>{T.cta.bookDemo}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

type NavItem = { to: string; label: string; desc?: string };

function NavDropdown({ label, items, wide }: { label: string; items: readonly NavItem[]; wide?: boolean }) {
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

function MobileGroup({ label, items, onClick }: { label: string; items: readonly NavItem[]; onClick: () => void }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-2 mb-1">{label}</div>
      {items.map((i) => (
        <Link key={i.to} to={i.to} onClick={onClick} className="block py-1.5 text-sm">{i.label}</Link>
      ))}
    </div>
  );
}
