import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection({
  eyebrow = "Demo",
  title = "Klar til at gøre bæredygtighedsdata brugbare?",
  subtitle = "Book en demo og se, hvordan GoFreyra kan forbinde data, dokumentation og beslutninger.",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container-page my-20">
      <div className="relative overflow-hidden rounded-3xl bg-brand-deep text-white p-10 md:p-16">
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(600px 240px at 80% 20%, rgba(43,196,138,0.55), transparent 60%)" }} />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/70">{eyebrow}</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white max-w-2xl">{title}</h2>
            <p className="mt-3 text-white/80 max-w-xl">{subtitle}</p>
          </div>
          <div className="flex gap-3">
            <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6">
              <Link to="/book-demo">Book demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full h-12 px-6 bg-transparent border-white/30 text-white hover:bg-white/10">
              <Link to="/platform">Se platformen</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
