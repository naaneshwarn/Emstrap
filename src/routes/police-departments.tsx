import { createFileRoute } from "@tanstack/react-router";
import PageTemplate from "@/components/PageTemplate";
import { getPageData } from "@/data/pageData";

export const Route = createFileRoute("/police-departments")({
  head: () => ({
    meta: [
      { title: "EMSTRAP for Police Departments" },
      { name: "description", content: "How EMSTRAP supports Police Departments with connected emergency response, dispatch and coordination." },
      { property: "og:title", content: "EMSTRAP for Police Departments" },
      { property: "og:description", content: "Connected emergency response solutions for Police Departments." },
    ],
  }),
  component: () => <PageTemplate data={getPageData("police-departments")!} />,
});
