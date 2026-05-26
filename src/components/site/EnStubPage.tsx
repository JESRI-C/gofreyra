import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";

type StubProps = {
  eyebrow: string;
  title: string;
  description: string;
  daHref: string;
  daLabel: string;
};

export function EnStubPage({ eyebrow, title, description, daHref, daLabel }: StubProps) {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-20 md:py-28 max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{description}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            The full English version of this page is being prepared. In the meantime, the Danish version contains the complete content.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-full h-12 px-6">
              <Link to="/en/book-demo">Book a demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full h-12 px-6">
              <Link to={daHref}>{daLabel} <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      <CTASection />
    </PageLayout>
  );
}

export const stubHead = (args: { title: string; description: string; path: string }) =>
  buildHead({ ...args, locale: "en" });

// Re-export createFileRoute for convenience in stub files
export { createFileRoute };
