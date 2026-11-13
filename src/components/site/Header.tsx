import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ydelserFor } from "@/data/ydelser";
import { LLink } from "@/components/site/LLink";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { BrandFamily } from "@/components/site/BrandFamily";
import { GoFreyraLogo } from "@/components/site/brand";
import { useLocale } from "@/i18n/useLocale";
import { CHROME_COPY } from "@/i18n/pages/chrome";

const linkCls = "px-2 py-2 text-[15px] text-brand-ink hover:underline whitespace-nowrap rounded-sm";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const locale = useLocale();
  const t = CHROME_COPY[locale].nav;
  const ydelser = ydelserFor(locale);

  return (
    <>
    <div className="border-b border-border bg-background">
      <div className="container-page flex h-9 items-center">
        <BrandFamily variant="bar" />
      </div>
    </div>
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container-page flex h-[76px] xl:h-[92px] items-center justify-between gap-3">
        <LLink to="/" className="flex items-center shrink-0 rounded-sm" aria-label={t.home}>
          <GoFreyraLogo alt="" className="h-11 sm:h-12 xl:h-[58px]" />
        </LLink>

        <nav className="hidden xl:flex items-center gap-0.5 min-w-0" aria-label={t.mainNav}>
          <div className="relative group">
            <LLink to="/ydelser" className={`${linkCls} inline-flex items-center gap-1`}>
              {t.services} <ChevronDown className="w-3.5 h-3.5" aria-hidden />
            </LLink>
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block group-focus-within:block">
              <div className="w-80 rounded-md border border-border bg-card shadow-[var(--shadow-card)] p-2">
                {ydelser.map((y) => (
                  <LLink
                    key={y.slug}
                    to="/ydelser/$slug"
                    params={{ slug: y.slug }}
                    className="block rounded-sm px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-brand-deep"
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

        <div className="flex items-center gap-2 shrink-0">
          {/* Shown as soon as the longer EN/DE menus leave room; always in the mobile menu. */}
          <Button asChild className={`hidden ${locale === "da" ? "xl:inline-flex" : "min-[1440px]:inline-flex"} h-12 px-5 text-[15px]`}>
            <LLink to="/kontakt">{t.cta} <ArrowRight className="w-4 h-4" aria-hidden /></LLink>
          </Button>
          <LanguageSwitcher />
          <button
            className="xl:hidden inline-flex h-10 items-center rounded-sm border border-input px-4 text-sm font-medium text-brand-ink hover:bg-secondary"
            onClick={() => setOpen(!open)}
            aria-label={t.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {t.menu}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="xl:hidden border-t border-border bg-background max-h-[calc(100dvh-76px)] overflow-y-auto">
          <nav className="container-page py-4" aria-label={t.mainNav}>
            <button
              className="flex w-full items-center justify-between py-3 text-base font-medium text-brand-ink border-b border-border"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              {t.services} <ChevronDown className={`w-4 h-4 transition ${servicesOpen ? "rotate-180" : ""}`} aria-hidden />
            </button>
            {servicesOpen && (
              <div className="pl-3 py-1 border-l-2 border-primary my-2">
                <LLink to="/ydelser" onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                  {t.allServices}
                </LLink>
                {ydelser.map((y) => (
                  <LLink
                    key={y.slug}
                    to="/ydelser/$slug"
                    params={{ slug: y.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {y.title}
                  </LLink>
                ))}
              </div>
            )}
            {t.items.map((item) => (
              <LLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-brand-ink border-b border-border">
                {item.label}
              </LLink>
            ))}
            <div className="pt-5 pb-2">
              <Button asChild className="w-full h-12">
                <LLink to="/kontakt" onClick={() => setOpen(false)}>{t.cta} <ArrowRight className="w-4 h-4" aria-hidden /></LLink>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
    </>
  );
}
