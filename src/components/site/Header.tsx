import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/brand/marks";
import { ydelserFor } from "@/data/ydelser";
import { LLink } from "@/components/site/LLink";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { BrandFamily } from "@/components/site/BrandFamily";
import { useLocale } from "@/i18n/useLocale";
import { CHROME_COPY } from "@/i18n/pages/chrome";

const linkCls = "px-2.5 py-2 text-sm font-medium text-foreground/80 hover:text-foreground whitespace-nowrap underline-offset-[6px] decoration-clay decoration-2 hover:underline";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const locale = useLocale();
  const t = CHROME_COPY[locale].nav;
  const ydelser = ydelserFor(locale);

  return (
    <>
    <div className="tone-ivory border-b border-border">
      <div className="container-page min-[1440px]:max-w-[1400px] flex h-9 items-center justify-end">
        <BrandFamily />
      </div>
    </div>
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container-page min-[1440px]:max-w-[1400px] flex h-[72px] items-center justify-between gap-3">
        <LLink to="/" className="flex items-center gap-2.5 shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label={t.home}>
          <BrandMark id="gofreyra" size={44} className="shrink-0" />
          <span className="font-display text-[1.7rem] font-semibold leading-none tracking-[-0.03em] text-forest">Freyra</span>
        </LLink>

        <nav className="hidden xl:flex items-center gap-0.5 min-w-0" aria-label={t.mainNav}>
          <div className="relative group">
            <LLink to="/ydelser" className={`${linkCls} inline-flex items-center gap-1`}>
              {t.services} <ChevronDown className="w-3.5 h-3.5" />
            </LLink>
            <div className="absolute left-0 top-full pt-1 hidden group-hover:block group-focus-within:block">
              <div className="w-80 rounded-sm border border-border bg-card shadow-card p-2">
                {ydelser.map((y) => (
                  <LLink
                    key={y.slug}
                    to="/ydelser/$slug"
                    params={{ slug: y.slug }}
                    className="block rounded-sm px-3 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground"
                  >
                    {y.title}
                  </LLink>
                ))}
              </div>
            </div>
          </div>
          {t.items.map((item) => (
            <LLink key={item.to} to={item.to} className={linkCls}>
              {item.label}
            </LLink>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Shown as soon as the longer EN/DE menus leave room; always in the mobile menu. */}
          <Button asChild className={`hidden ${locale === "da" ? "xl:inline-flex" : "min-[1440px]:inline-flex"} rounded-sm h-10 px-5`}>
            <LLink to="/kontakt">{t.cta}</LLink>
          </Button>
          <LanguageSwitcher />
          <button
            className="xl:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label={t.menu}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <nav className="container-page py-4 space-y-1" aria-label={t.mainNav}>
            <button
              className="flex w-full items-center justify-between py-2 text-sm font-medium"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              {t.services} <ChevronDown className={`w-4 h-4 transition ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-3 space-y-1 border-l border-border">
                <LLink to="/ydelser" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">
                  {t.allServices}
                </LLink>
                {ydelser.map((y) => (
                  <LLink
                    key={y.slug}
                    to="/ydelser/$slug"
                    params={{ slug: y.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-muted-foreground"
                  >
                    {y.title}
                  </LLink>
                ))}
              </div>
            )}
            {t.items.map((item) => (
              <LLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">
                {item.label}
              </LLink>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full rounded-sm h-11">
                <LLink to="/kontakt" onClick={() => setOpen(false)}>{t.cta}</LLink>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
    </>
  );
}
