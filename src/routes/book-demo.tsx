import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/book-demo")({
  beforeLoad: () => {
    throw redirect({ href: "/kontakt", statusCode: 301 });
  },
});
