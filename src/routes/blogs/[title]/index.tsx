import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link, useLocation } from "@builder.io/qwik-city";
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
  const loc = useLocation();
  const findBlog = blogs.find((item) => loc.params.title === item.title);

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
