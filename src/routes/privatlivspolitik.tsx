import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";

export const Route = createFileRoute("/privatlivspolitik")({
  head: () => buildHead({
    title: "Privatlivspolitik | Gofreyra ApS",
    description: "Sådan behandler Gofreyra ApS personoplysninger på gofreyra.com og i Freyra Evidence Workspace.",
    path: "/privatlivspolitik",
    jsonLd: breadcrumbJsonLd([{ name: "Forside", path: "/" }, { name: "Privatlivspolitik", path: "/privatlivspolitik" }]),
  }),
  component: PrivacyPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl ">{title}</h2>
      <div className="mt-3 space-y-3 text-sm text-foreground/85 leading-relaxed">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-20 max-w-3xl">
          <span className="eyebrow">Privatlivspolitik</span>
          <h1 className="mt-4 text-4xl md:text-5xl ">Sådan behandler vi jeres oplysninger.</h1>
          <p className="mt-4 text-lg text-muted-foreground">Senest opdateret: oktober 2026</p>
        </div>
      </section>

      <div className="container-page py-14 max-w-3xl">
        <Section title="1. Dataansvarlig">
          <p>
            Gofreyra ApS, CVR 45384489, Bøgevej 4, 7160 Tørring, er dataansvarlig for behandlingen af personoplysninger på gofreyra.com og i Freyra Evidence Workspace. Gofreyra ApS er ejet af Freyra Group ApS.
          </p>
          {/* TODO: Tilføj kontakt-email til persondatahenvendelser, når den er klar fra kunden. */}
        </Section>

        <Section title="2. Hvilke oplysninger indsamler vi?">
          <p>
            Når I bruger kontaktformularen, indsamler vi navn, email, virksomhed eller kommune, emne og selve beskeden. Vi indsamler kun de oplysninger, I selv indtaster.
          </p>
          <p>
            For kunder med login til Freyra Evidence Workspace behandler vi navn, email og arbejdsrelaterede oplysninger, der er nødvendige for at give adgang til jeres projekter.
          </p>
        </Section>

        <Section title="3. Formål og hjemmel">
          <p>
            Vi bruger oplysningerne til at svare på henvendelser, opfølge på aftaler og levere de ydelser, I har bedt om. Behandlingen sker på baggrund af vores legitime interesse i at besvare henvendelser og, for kunder, for at opfylde vores aftale med jer.
          </p>
        </Section>

        <Section title="4. Opbevaring">
          <p>
            Henvendelser via kontaktformularen opbevares, så længe det er nødvendigt for at behandle henvendelsen og eventuel opfølgning. Kundedata opbevares, så længe samarbejdet står på, og derefter i den periode, lovgivningen kræver.
          </p>
        </Section>

        <Section title="5. Videregivelse">
          <p>
            Vi videregiver ikke jeres personoplysninger til tredjepart medmindre det er nødvendigt for at levere den aftalte ydelse, eller vi er forpligtet til det ved lov. Vi bruger databehandlere inden for EU.
          </p>
        </Section>

        <Section title="6. Cookies">
          <p>
            Siden bruger kun teknisk nødvendige cookies. Vi bruger ikke cookies til markedsføring eller sporing på tværs af sider.
          </p>
        </Section>

        <Section title="7. Jeres rettigheder">
          <p>
            I har ret til at få indsigt i de oplysninger, vi behandler om jer, og til at få dem rettet eller slettet. I kan også gøre indsigelse mod behandlingen og anmode om begrænsning eller dataportabilitet.
          </p>
          <p>
            I kan klage over vores behandling af personoplysninger til Datatilsynet, Borgergade 28, 5., 1300 København K.
          </p>
        </Section>

        <Section title="8. Ændringer">
          <p>
            Vi opdaterer denne privatlivspolitik, når vores behandling ændrer sig. Den gældende version findes altid på denne side.
          </p>
        </Section>
      </div>
    </PageLayout>
  );
}
