import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/loesninger/$")({
  beforeLoad: () => {
    throw redirect({ to: "/ydelser" });
  },
});
