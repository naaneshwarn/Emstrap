import { createFileRoute } from "@tanstack/react-router";
import PageTemplate from "@/components/PageTemplate";
import { getPageData } from "@/data/pageData";

export const Route = createFileRoute("/smart-cities")({
  head: () => ({
    meta: [
      { title: "EMSTRAP for Smart Cities" },
      { name: "description", content: "How EMSTRAP supports Smart Cities with connected emergency response, dispatch and coordination." },
      { property: "og:title", content: "EMSTRAP for Smart Cities" },
      { property: "og:description", content: "Connected emergency response solutions for Smart Cities." },
    ],
  }),
  component: () => <PageTemplate data={getPageData("smart-cities")!} />,
});
