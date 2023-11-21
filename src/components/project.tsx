import { Image } from "@unpic/qwik";
import { component$ } from "@builder.io/qwik";
import type { RouteLocation } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

interface Props {
  id: number;
  title: string;
  category: string;
  image: string;
  stack: string[];
  website: string;
  desc: string;
  desc2: string;
}

export default component$(
  ({ project, loc }: { project: Props; loc: RouteLocation }) => {
    return (
      <div class="mx-auto grid min-h-screen w-11/12 grid-cols-1 gap-4 lg:flex ">
        <div class="flex flex-col justify-center p-4 lg:w-3/6">
          <div class="py-6 text-sky-700">
            <Link
              class="underline"
              href={`/${loc.params.locale}/cases`}
            >{$localize`:@@back:`}</Link>
          </div>
          <span class="uppercase">{project?.category}</span>
          <a href={project?.website} class="z-20 text-purple-500">
            {project?.website}
          </a>
          <span class="mb-4 font-sans text-6xl uppercase drop-shadow-lg ">
            {project?.title}
          </span>
          <a href={project?.website} class="group relative">
            <Image
              height={600}
              width={600}
              class="border-groove h-80 w-full cursor-pointer border-8 border-black object-cover transition-all duration-300 hover:scale-95"
              src={project?.image}
              alt={project?.title}
            />
            <div class="duration-400 absolute left-0 top-0 flex h-80 w-full items-center justify-center bg-transparent text-xl font-bold  uppercase text-transparent transition  group-hover:bg-purple-500   group-hover:text-black ">
              {$localize`:@@website:`}
            </div>
          </a>
        </div>
        <div class=" flex flex-col lg:w-3/6 w-full justify-center ">
          <div class=" flex flex-col gap-4 ">
            {" "}
            <span class="text-lg uppercase">Case story</span>
            <p class="text-md font-extralight">{project?.desc}</p>
            <p class="text-md font-extralight">{project?.desc2}</p>
          </div>
          <div class="flex items-center gap-2  py-6 ">
            {project?.stack.map((name: string, i: number) => {
              return (
                <img
                  key={i}
                  class="h-12 w-auto transition duration-700 group-hover:scale-95"
                  src={name}
                  alt="Image Description"
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);
