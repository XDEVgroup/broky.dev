import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header>
      <div class="fixed top-0 z-20 h-20 w-screen text-white ">
        <div class="flex justify-between items-center md:p-5 p-4 md:px-20 px-6">
          <div>
            <Link
              class="font-semibold md:text-3xl text-2xl"
              href="/"
              title="qwik"
            >
              broky.dev
            </Link>
          </div>
          <ul class="flex space-x-6">
            <li>
              <a
                class="md:text-xl text-lg hover:text-gray-300 transition"
                href="https://tsxtech.nl/cases"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
});
