import { component$ } from "@builder.io/qwik";
import Header from "~/components/header";
import Partners from "~/components/partners";
import Projects from "~/components/projects";

export default component$(() => {
  return (
    <>
      <Header />
      <div class="bg-black">
        <div class="m-auto flex min-h-screen  flex-col bg-gradient-to-b from-sky-800/[.60] via-sky-800/[.10] w-screen">
          <div class="">
            <div class="relative overflow-hidden before:absolute before:left-1/2 before:top-0 before:-z-[1] before:h-full before:w-full before:-translate-x-1/2 ">
              <div class="mx-auto max-w-[85rem] px-4 pb-10 pt-20 sm:px-6 lg:px-8">
                <div class="mx-auto mt-5 max-w-xl text-center">
                  <h1 class="block text-2xl font-bold text-white md:text-3xl lg:text-4xl ">
                    {$localize`:@@myprojects:`}
                  </h1>
                </div>
              </div>
            </div>

            <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
              <div class="mb-10 grid gap-6 sm:grid-cols-2 lg:mb-14 lg:grid-cols-4">
                <Projects />
              </div>
              <Partners />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
