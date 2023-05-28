import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Headercontent from "~/components/headercontent";
import { projects1, projects2, projects3, projects4 } from "~/ultils/stories";

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
  const animate1 = useSignal(false);
  const animate2 = useSignal(false);
  const animate3 = useSignal(false);
  const animate4 = useSignal(false);

  useVisibleTask$(() => {
    animate1.value = true;
  });
  useVisibleTask$(() => {
    animate2.value = true;
  });
  useVisibleTask$(() => {
    animate3.value = true;
  });
  useVisibleTask$(() => {
    animate4.value = true;
  });
  return (
    <>
      <Headercontent />
      <div>
        <div class="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('../svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 ">
          <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <div class="mt-5 max-w-xl text-center mx-auto">
              <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
                Projects
              </h1>
            </div>

            <div class="mt-5 max-w-3xl text-center mx-auto">
              <p class="text-lg text-gray-600 ">
                Here's a grid of all my projects I created recently.
              </p>
            </div>
          </div>
        </div>

        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
            {projects1.map((project) => {
              return (
                <div class={{ value: animate1.value }}>
                  <div class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800">
                    <div class="aspect-w-16 aspect-h-9">
                      <img
                        class="w-full group-hover:scale-95 transition duration-700 object-cover rounded-t-xl h-60"
                        src={project.image}
                        alt="Image Description"
                      />
                    </div>
                    <div class="p-4 md:p-5">
                      <p class="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
                        {project.category}
                      </p>
                      <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
            {projects2.map((project) => {
              return (
                <div class={{ value: animate2.value }}>
                  <div class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800">
                    <div class="aspect-w-16 aspect-h-9">
                      <img
                        class="w-full group-hover:scale-95 transition duration-700 object-cover rounded-t-xl h-60"
                        src={project.image}
                        alt="Image Description"
                      />
                    </div>
                    <div class="p-4 md:p-5">
                      <p class="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
                        {project.category}
                      </p>
                      <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
            {projects3.map((project) => {
              return (
                <div class={{ value: animate3.value }}>
                  <div class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800">
                    <div class="aspect-w-16 aspect-h-9">
                      <img
                        class="w-full group-hover:scale-95 transition duration-700 object-cover rounded-t-xl h-60"
                        src={project.image}
                        alt="Image Description"
                      />
                    </div>
                    <div class="p-4 md:p-5">
                      <p class="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
                        {project.category}
                      </p>
                      <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
            {projects4.map((project) => {
              return (
                <div class={{ value: animate4.value }}>
                  <div class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800">
                    <div class="aspect-w-16 aspect-h-9">
                      <img
                        class="w-full group-hover:scale-95 transition duration-700 object-cover rounded-t-xl h-60"
                        src={project.image}
                        alt="Image Description"
                      />
                    </div>
                    <div class="p-4 md:p-5">
                      <p class="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
                        {project.category}
                      </p>
                      <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
});
