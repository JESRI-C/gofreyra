import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/loesninger/kommuner")({
  beforeLoad: () => {
    throw redirect({ href: "/kommuner", statusCode: 301 });
  },
});
