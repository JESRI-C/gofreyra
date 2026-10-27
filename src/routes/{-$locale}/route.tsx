import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/site/NotFoundPage";

export const Route = createFileRoute("/{-$locale}")({
  beforeLoad: ({ params }) => {
    if (params.locale !== undefined && params.locale !== "en" && params.locale !== "de") throw notFound();
  },
  component: Outlet,
  notFoundComponent: NotFoundPage,
});
