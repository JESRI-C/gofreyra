import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error("Indtast en gyldig e-mailadresse.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase
      .from("newsletter_signups")
      .insert({ email: trimmed });
    setSubmitting(false);
    if (error) {
      if (error.code === "23505") {
        toast.info("Du er allerede tilmeldt.");
        setDone(true);
      } else {
        toast.error("Noget gik galt. Prøv igen.");
      }
      return;
    }
    setDone(true);
    toast.success("Tak — du er nu tilmeldt.");
  }

  if (done) {
    return (
      <p className="text-sm text-primary font-medium">
        ✓ Du er tilmeldt vores nyhedsbrev.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="din@email.dk"
        required
        className="flex-1 min-w-0 rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        disabled={submitting}
        className="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60 transition-colors"
      >
        {submitting ? "…" : "Tilmeld"}
      </button>
    </form>
  );
}
