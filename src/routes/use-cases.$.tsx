import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/use-cases/$")({
  beforeLoad: () => {
    throw redirect({ href: "/ydelser", statusCode: 301 });
  },
});
