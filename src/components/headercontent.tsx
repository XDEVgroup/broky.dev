import { component$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const store = useStore({
    scrolled: false,
  });
  return (
    <header>
      <div class="fixed top-0 z-20 h-20 w-screen text-black bg-transparent backdrop-blur-sm">
        <div  class={
          store.scrolled
            ? "flex justify-between items-center md:p-5 p-4 md:px-20 px-6"
            : "flex justify-center items-center md:p-5 p-4 md:px-40 px-14"
        }
        document:onScroll$={() => {
          if (window.scrollY > 0) {
            store.scrolled = true;
          } else {
            store.scrolled = false;
          }
        }} >
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
              <Link
                class="md:text-xl text-lg hover:text-gray-300 transition"
                href="/cases"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
});
