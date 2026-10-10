import { createFileRoute } from "@tanstack/react-router";
import PageTemplate from "@/components/PageTemplate";
import { getPageData } from "@/data/pageData";

export const Route = createFileRoute("/government-agencies")({
  head: () => ({
    meta: [
      { title: "EMSTRAP for Government Agencies" },
      { name: "description", content: "How EMSTRAP supports Government Agencies with connected emergency response, dispatch and coordination." },
      { property: "og:title", content: "EMSTRAP for Government Agencies" },
      { property: "og:description", content: "Connected emergency response solutions for Government Agencies." },
    ],
  }),
  component: () => <PageTemplate data={getPageData("government-agencies")!} />,
});
