# Roadmap: Omlægning til Freyra Evidence Workspace

- [ ] Nye delte komponenter: SEO (uden i18n/alternates), Header (ny nav, uden sprogskifter/login), Footer (Gofreyra ApS, CVR, adresse, Freyra Group, privatlivspolitik), sections.tsx (fjern i18n), CTASection, __root (ny titel/OG, fjern LocaleProvider og og-default)
- [ ] Nye sider: / (forside), /ydelser, /kommuner, /platformen, /om, /kontakt (behold formular, TODO email/telefon), /privatlivspolitik
- [ ] Redirects fra gamle ruter (platform*, priser, book-demo, dashboard, brancher*, use-cases*, indsigter*, problemer*, data*, datakilder, projekter, ordbog*, loesninger*, en*) til nærmeste nye side
- [ ] Slet gamle ruter, data-filer, i18n, ubrugte komponenter (DashboardMockup, AIDemoPanel, InsightAccessGate, NewsletterSignup, ProductPage, SolutionPage, EnStubPage, LanguageSwitcher)
- [ ] Sitemap, robots, llms.txt opdateret til 7 sider
- [ ] Skjul Lovable-badge
- [ ] Verificér build + tjek for døde imports
