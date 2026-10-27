import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/indsigter")({
  beforeLoad: () => {
    throw redirect({ href: "/", statusCode: 301 });
  },
});
