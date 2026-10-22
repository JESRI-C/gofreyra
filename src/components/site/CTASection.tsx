import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  const ey = eyebrow ?? "Book en snak";
  const ti = title ?? "Skal vi se på jeres projektområde?";
  const su = subtitle ?? "En uforpligtende samtale om jeres område, jeres data og hvad en førregistrering kan give jer.";

  return (
    <section className="container-page my-20">
      <div className="rounded-lg bg-brand-deep text-white p-10 md:p-16">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-white/70">{ey}</div>
            <h2 className="mt-3 text-3xl md:text-4xl text-white max-w-2xl">{ti}</h2>
            <p className="mt-3 text-white/80 max-w-xl">{su}</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Button asChild className="rounded-md bg-white text-brand-deep hover:bg-white/90 h-12 px-6">
              <Link to="/kontakt">Book en snak <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-md h-12 px-6 bg-transparent border-white/40 text-white hover:bg-white/10">
              <Link to="/platformen">Se platformen</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
