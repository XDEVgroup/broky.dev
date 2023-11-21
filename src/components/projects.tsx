import { Link } from "@builder.io/qwik-city";
import { projects } from "~/utils/projects";
import { Image } from "@unpic/qwik";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      {projects.map((project) => {
        return (
          <Link key={project.id} href={`${project.id}`}>
            <div class="group flex flex-col rounded-xl border border-gray-800 bg-white shadow-sm transition hover:shadow-md ">
              <div class="relative overflow-hidden rounded-t-lg ">
                <Image
                  width={800}
                  height={600}
                  class="h-60 w-full rounded-t-xl object-cover transition-all hover:scale-105"
                  src={project.image}
                  alt="Image Description"
                />
              </div>
              <div class="flex justify-between p-4 md:p-5">
                <div>
                  <p class="mt-2 text-xs uppercase text-black ">
                    {project.category}
                  </p>
                  <h3 class="mt-2 text-lg font-medium text-gray-800   ">
                    {project.title}
                  </h3>
                </div>
                <div class="grid grid-cols-2 gap-1">
                  {project.stack.map((item: string, i: number) => {
                    return (
                      <img
                        key={i}
                        class="h-6 w-auto  transition duration-300 group-hover:scale-95"
                        src={`${item}`}
                        alt="Image Description"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
});
