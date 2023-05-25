import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

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
  return (
    <>
      <div class="flex h-screen  items-center  bg-slate-900">
        <div class="px-8">
          <h1 class="text-7xl font-inter font-semibold text-gray-200">
            Hi, my name is Mark a.k.a. Broky
          </h1>
          <p class="text-5xl font-playfair font-black text-blue-700 mt-4  p-2 ">
            Front-end developer
          </p>
          <div class="flex space-x-6 mt-4">
            <button class="uppercase py-2 px-6 bg-black rounded-sm text-white hover:text-black transition duration-500 hover:bg-blue-400 font-bold text-lg">
              My projects
            </button>
            <button class="py-2 px-6 uppercase bg-blue-400 rounded-sm text-black duration-500 hover:bg-black hover:text-white transition font-bold text-lg">
              My blogs
            </button>
          </div>
        </div>
      </div>
    </>
  );
});
