import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export default component$((props: any) => {
  const animate = useSignal<boolean>(false);

  useVisibleTask$(() => {
    animate.value = true;
  });
  const { projectss } = props;
  return (
    <>
      {projectss.map((project: any) => {
        return (
          <>
            {animate.value && (
              <div>
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
            )}
          </>
        );
      })}
    </>
  );
});
