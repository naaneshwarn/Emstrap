import { createFileRoute } from "@tanstack/react-router";
import PageTemplate from "@/components/PageTemplate";
import { getPageData } from "@/data/pageData";

export const Route = createFileRoute("/traffic-management")({
  head: () => ({
    meta: [
      { title: "EMSTRAP for Traffic Management" },
      { name: "description", content: "How EMSTRAP supports Traffic Management with connected emergency response, dispatch and coordination." },
      { property: "og:title", content: "EMSTRAP for Traffic Management" },
      { property: "og:description", content: "Connected emergency response solutions for Traffic Management." },
    ],
  }),
  component: () => <PageTemplate data={getPageData("traffic-management")!} />,
});
