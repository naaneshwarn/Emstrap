import { createFileRoute } from "@tanstack/react-router";
import PageTemplate from "@/components/PageTemplate";
import { getPageData } from "@/data/pageData";

export const Route = createFileRoute("/ambulance-providers")({
  head: () => ({
    meta: [
      { title: "EMSTRAP for Ambulance Providers" },
      { name: "description", content: "How EMSTRAP supports Ambulance Providers with connected emergency response, dispatch and coordination." },
      { property: "og:title", content: "EMSTRAP for Ambulance Providers" },
      { property: "og:description", content: "Connected emergency response solutions for Ambulance Providers." },
    ],
  }),
  component: () => <PageTemplate data={getPageData("ambulance-providers")!} />,
});
