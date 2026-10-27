import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/priser")({
  beforeLoad: () => {
    throw redirect({ href: "/ydelser", statusCode: 301 });
  },
});
