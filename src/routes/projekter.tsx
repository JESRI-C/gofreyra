import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/projekter")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
