import { createFileRoute } from "@tanstack/react-router";
import { EnStubPage, stubHead } from "@/components/site/EnStubPage";

export const Route = createFileRoute("/en/platform/smartconnect")({
  head: () => stubHead({
    title: "SmartConnect+ — Collect environmental data from sensor, drone, satellite and field",
    description: "SmartConnect+ unifies IoT sensors, field observations, drone and satellite imagery, weather and operational data into one model — ready for analysis and reporting.",
    path: "/en/platform/smartconnect",
  }),
  component: () => <EnStubPage
    eyebrow="SmartConnect+"
    title="Collect data from the real world — in one model."
    description="Connect sensors, field observations, drone and satellite imagery, weather and operational data. SmartConnect+ is the data backbone behind every other module."
    daHref="/platform/smartconnect"
    daLabel="See full module page (Danish)"
  />,
});
