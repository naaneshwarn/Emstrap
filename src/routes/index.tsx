import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EMSTRAP — Connected Emergency Response Platform" },
      { name: "description", content: "EMSTRAP connects organisations, cities and emergency services on one integrated emergency response platform." },
      { property: "og:title", content: "EMSTRAP — Connected Emergency Response Platform" },
      { property: "og:description", content: "Integrated emergency response for corporates, smart cities, government, ambulance, traffic and police." },
    ],
  }),
  component: HomePage,
});
