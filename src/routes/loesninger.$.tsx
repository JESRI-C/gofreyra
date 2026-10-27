import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/loesninger/$")({
  beforeLoad: () => {
    throw redirect({ href: "/ydelser", statusCode: 301 });
  },
});
