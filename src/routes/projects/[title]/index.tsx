import { component$ } from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";

import { projects1 } from "../../../ultils/stories";
import Headercontent from "~/components/headercontent";

export const head: DocumentHead = {
  title: "Broky.dev | Software developer",
  meta: [
    {
      name: "description",
      content:
        "My name is Mark aka Broky or Zacky and I'm a front end developer specialized in react, vue and qwik",
    },
  ],
};
export default component$(() => {
  const loc = useLocation();
  const findBlog = projects1.find(
    (project) => loc.params.title === project.title
  );

  return (
    <>
      <Headercontent />

      <div>
        <div class="mt-20">
          {" "}
          {findBlog?.title}
          {findBlog?.id}
          {findBlog?.category}
        </div>
        {loc.params.title}
      </div>
    </>
  );
});
