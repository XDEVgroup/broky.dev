import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header>
      <div class="fixed top-0 h-16 w-screen text-white bg-black">
        <div class="flex justify-between md:p-6 p-4 md:px-20 px-2">
          <div>
            <Link class="font-semibold text-4xl" href="/" title="qwik">
              ...broky.dev
            </Link>
          </div>
          <ul class="flex space-x-6">
            <li>
              <Link
                class="text-xl hover:text-gray-300 transition"
                href="/blogs"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                class="text-xl hover:text-gray-300 transition"
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                class="text-xl hover:text-gray-300 transition"
                href="/guides"
              >
                Guides
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
});
