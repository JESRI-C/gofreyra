import { createFileRoute } from "@tanstack/react-router";
import { EnStubPage, stubHead } from "@/components/site/EnStubPage";

export const Route = createFileRoute("/en/book-demo")({
  head: () => stubHead({
    title: "Book a demo — GoFreyra",
    description: "30 minutes with a specialist. We walk through your data sources, documentation needs and how GoFreyra fits in.",
    path: "/en/book-demo",
  }),
  component: () => <EnStubPage
    eyebrow="Book a demo"
    title="See GoFreyra with your own data."
    description="A 30-minute session with a specialist. We walk through your data sources, documentation needs and how the platform can be shaped around your reality."
    daHref="/book-demo"
    daLabel="Book demo (Danish form)"
  />,
});
