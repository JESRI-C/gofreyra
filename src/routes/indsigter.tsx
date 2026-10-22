import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/indsigter")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
