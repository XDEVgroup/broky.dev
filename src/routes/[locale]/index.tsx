import { component$ } from "@builder.io/qwik";
import type { DocumentHead} from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Header from "~/components/header";
import Logos from "~/components/logos";
import { logos } from "../../utils/projects";
import Partners from "~/components/partners";

export const head: DocumentHead = {
  title: "Broky.dev | Software developer",
  meta: [
    {
      name: "description",
      content:
        "My name is Mark and I'm a Software developer specialized in typescript and javascript.",
    },
  ],
};
export default component$(() => {
  return (
    <>
      <Header />
      <div class="flex min-h-screen w-screen   bg-black">
        <div class="bg-gradient-to-b from-sky-800/[.60] via-sky-800/[.10] w-screen">
          <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-8">
            <div class="flex justify-center md:mt-0 mt-20">
              <Link
                class="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md"
                href="cases"
              >
                <p class="mr-2 inline-block text-white text-sm">
                  {$localize`:@@projects:`}
                </p>
                <span class="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                  <svg
                    class="w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            <div class="max-w-3xl text-center mx-auto">
              <div class="flex items-center justify-center">
              <img src="/markt.png" alt="" class="h-14 w-14 rounded-full"/>
              </div>
              <h1 class="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {$localize`:@@hey:`}
              </h1>
            </div>

            <div class="max-w-3xl text-center mx-auto">
              <p class="text-lg text-gray-400">
              {$localize`:@@experience:`}
               
              </p>
            </div>
            <div class="text-white max-w-3xl text-center mx-auto">
              <div class="flex items-center p-4 bg-gray-100 rounded gap-4 justify-between">
                {logos.map((logo, i) => {
                  return <Logos key={i} logo={logo} />;
                })}
              </div>
            </div>
            <div class="text-white max-w-3xl flex gap-2 justify-center mx-auto">
              <div class="text-center">
                <Link
                  class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                  href="cases"
                >
                   {$localize`:@@myprojects:`}
                 
                  <svg
                    class="w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </Link>
              </div>
              <a
                target="_blank"
                class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                href="https://www.linkedin.com/in/markteekens/"
              >
                 {$localize`:@@hireme:`}
              
              </a>
            </div>
           <Partners />

          </div>
        </div>
      </div>
    </>
  );
});
