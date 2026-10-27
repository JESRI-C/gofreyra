import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/brancher/$")({
  beforeLoad: () => {
    throw redirect({ href: "/kommuner", statusCode: 301 });
  },
});
