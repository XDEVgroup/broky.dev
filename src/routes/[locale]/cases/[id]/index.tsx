import { component$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";

import Partners from "~/components/partners";
import Project from "~/components/project";
import { UseProductByID } from "~/utils/composables/UseProductByID";

export const useQuery = routeLoader$(({ params }) => {
  return { id: params.id };
});

export default component$(() => {
  const loc = useLocation();
  const queryData = useQuery();
  const project = UseProductByID(queryData.value.id as string);

  return (
    <>
      <Project project={project} loc={loc} />
      <Partners subclass="invert" />
    </>
  );
});
