# Roadmap: Omlægning til Freyra Evidence Workspace

- [x] Nye delte komponenter: SEO (uden i18n/alternates), Header (ny nav, uden sprogskifter/login), Footer (Gofreyra ApS, CVR, adresse, Freyra Group, privatlivspolitik), sections.tsx (fjern i18n), CTASection, __root (ny titel/OG, fjern LocaleProvider og og-default)
- [x] Nye sider: / (forside), /ydelser, /kommuner, /platformen, /om, /kontakt (behold formular, TODO email/telefon), /privatlivspolitik
- [x] Redirects fra gamle ruter til nærmeste nye side
- [x] Slet gamle ruter, data-filer, i18n, ubrugte komponenter
- [x] Sitemap, robots, llms.txt opdateret til 7 sider
- [x] Skjul Lovable-badge
- [x] Verificér build + browser-test (forside, nav, redirects, 404)

Åbent (afventer kunden):
- Direkte email og telefon til /kontakt og privatlivspolitik (TODO i koden)
- Publicering: sker først når kunden siger til
