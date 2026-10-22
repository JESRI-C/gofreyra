import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/datakilder")({
  beforeLoad: () => {
    throw redirect({ to: "/platformen", statusCode: 301 });
  },
});
