import { createFileRoute } from "@tanstack/react-router";
import PageTemplate from "@/components/PageTemplate";
import { getPageData } from "@/data/pageData";

export const Route = createFileRoute("/corporate-companies")({
  head: () => ({
    meta: [
      { title: "EMSTRAP for Corporate Companies" },
      { name: "description", content: "How EMSTRAP supports Corporate Companies with connected emergency response, dispatch and coordination." },
      { property: "og:title", content: "EMSTRAP for Corporate Companies" },
      { property: "og:description", content: "Connected emergency response solutions for Corporate Companies." },
    ],
  }),
  component: () => <PageTemplate data={getPageData("corporate-companies")!} />,
});
