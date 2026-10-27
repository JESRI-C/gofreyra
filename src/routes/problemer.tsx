import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/problemer")({
  beforeLoad: () => {
    throw redirect({ href: "/", statusCode: 301 });
  },
});
