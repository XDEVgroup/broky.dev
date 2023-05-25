import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import { blogs } from "~/ultils/blogs";

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
      <header>
        <div class="fixed top-0 z-20 h-20 w-screen text-black bg-transparent backdrop-blur-sm">
          <div class="flex justify-between items-center md:p-5 p-4 md:px-20 px-6">
            <div>
              <Link
                class="font-semibold md:text-4xl text-3xl"
                href="/"
                title="qwik"
              >
                broky
              </Link>
            </div>
            <ul class="flex space-x-6">
              <li>
                <Link
                  class="md:text-xl text-lg hover:text-gray-300 transition"
                  href="/blogs"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  class="md:text-xl text-lg hover:text-gray-300 transition"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  class="md:text-xl text-lg hover:text-gray-300 transition"
                  href="/guides"
                >
                  Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div>
        <div class="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('../svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 ">
          <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <div class="mt-5 max-w-xl text-center mx-auto">
              <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
                Blogs
              </h1>
            </div>

            <div class="mt-5 max-w-3xl text-center mx-auto">
              <p class="text-lg text-gray-600 ">
                Here are my blogs that I update often, I like writing about
                tech.
              </p>
            </div>
          </div>
        </div>

        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
            {blogs.map((blog) => {
              return (
                <Link
                  class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
                  href={`/blogs/${blog.title}`}
                >
                  <div class="aspect-w-16 aspect-h-9">
                    <img
                      class="w-full object-cover rounded-t-xl h-60"
                      src={blog.image}
                      alt="Image Description"
                    />
                  </div>
                  <div class="p-4 md:p-5">
                    <p class="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
                      {blog.category}
                    </p>
                    <h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                      {blog.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
});
