import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/projekter")({
  beforeLoad: () => {
    throw redirect({ href: "/", statusCode: 301 });
  },
});
