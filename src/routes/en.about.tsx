import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { GreenCTA, MicroStrip, CardGrid, FaqSection } from "@/components/site/sections";

const FAQ = [
  { q: "Who is behind GoFreyra?", a: "A Danish team with backgrounds in environmental data, ESG reporting, software and nature projects. We build the platform together with pilot customers and domain advisors." },
  { q: "Where is data hosted?", a: "Inside the EU. GDPR and role-based access control are built in from the start." },
  { q: "Do you sell sustainability?", a: "No. We sell documentable action. Sustainability without data quickly becomes a story — we provide the data foundation." },
  { q: "Is the platform open to partners?", a: "Yes. We work with advisors, sensor partners and reporting tools. The modules are built to play together, not to lock you in." },
];

export const Route = createFileRoute("/en/about")({
  head: () => buildHead({
    title: "About GoFreyra — Danish SaaS platform for environmental data and ESG",
    description: "Freyra is the brand. GoFreyra is the platform. ISEN is the nature and impact layer. Read about our principles and our focus on traceable sustainability.",
    path: "/om",
    locale: "en",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">About GoFreyra</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">We don't sell sustainability as a story. We sell documentable action.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            GoFreyra is the Danish SaaS platform that brings environmental data, AI analysis and ESG documentation into a single system, so organisations can measure, manage and prove their impact — from sensor to report.
          </p>
        </div>
      </section>

      <MicroStrip items={["Danish vendor", "EU hosting", "Modular SaaS", "Built for practice"]} />

      <section className="container-page py-16 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5 text-foreground/85">
          <h2 className="text-2xl md:text-3xl font-bold">Why the platform was built</h2>
          <p>
            We met too many organisations with ambitions — but where the ESG and nature work lived in spreadsheets, PDFs and scattered systems. When CSRD, nature requirements and buyer pressure all hit at once, that no longer holds up.
          </p>
          <p>
            GoFreyra covers the whole value chain: SmartConnect+ gathers data from the field, DecisionsIQ analyses it, ESG Ledger documents it, and Impact Exchange activates the effect. It all comes together in GoFreyra Dashboard.
          </p>
          <p>
            We believe sustainability only becomes credible when every data point can be traced back to its source. That's what we build — and the platform we ourselves would have wanted as an ESG team, operations lead or project owner.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Brand, platform and nature layer</h2>
          <div className="mt-5 space-y-4">
            {[
              { t: "Freyra", d: "The brand. What we stand for: documented, honest sustainability." },
              { t: "GoFreyra", d: "The platform. Where data becomes insight, documentation and action." },
              { t: "ISEN", d: "The nature and impact layer. What makes nature and climate work measurable and verifiable." },
            ].map((c) => (
              <div key={c.t} className="card-soft p-5 bg-card">
                <div className="font-semibold">{c.t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CardGrid
        beige
        eyebrow="Our principles"
        title="How we work."
        cols={4}
        cards={[
          { t: "Traceability before storytelling", d: "Every data point with source, timestamp and method." },
          { t: "Less claim, more evidence", d: "We don't say more than the data supports." },
          { t: "From data to action", d: "The value lies in operational work — not just beautiful reports." },
          { t: "Modular and practical", d: "Start small, scale when data and organisation are ready." },
        ]}
      />

      <section className="container-page py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">How we work with customers</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Pilot first. Scale after.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We always start with one area, one dataset or one reporting category. That delivers fast learning, lower risk and a concrete reference the organisation can build on.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { t: "Close collaboration", d: "We work side by side with ESG teams, operations and advisors — not as a black box." },
            { t: "Practice-driven setup", d: "We tailor dashboards, indicators and flows to your actual workflow." },
            { t: "Learning back into the platform", d: "Every pilot makes the platform smarter — and the next rollout faster." },
          ].map((c) => (
            <div key={c.t} className="card-soft p-6 bg-card">
              <div className="font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <FaqSection items={FAQ} />

      <GreenCTA title="Want to hear more about our approach?" subtitle="Book a short conversation and we'll happily share more." secondary={{ to: "/en/contact", label: "Contact us" }} />

      <CTASection />
    </PageLayout>
  );
}
