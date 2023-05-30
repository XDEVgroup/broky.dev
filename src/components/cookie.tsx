import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
  const ref = useSignal<any>();
  const dataVal = useSignal<any>();

  useVisibleTask$(() => {
    dataVal.value = localStorage.getItem("cookiebar");
  });
  return (
    <>
      {!dataVal.value ? (
        <div class="fixed bottom-4 left-0 z-[60] sm:max-w-sm w-full mx-auto p-6">
          <div class="p-4 bg-gradient-to-br from-violet-700 to-sky-500 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <p class="mt-2 text-sm text-white">
              This website uses cookies to enhance your browsing experience.
            </p>
            <a
              class="mt-3 inline-flex justify-center items-center gap-2 font-semibold text-white/[.8] hover:text-white text-sm"
              href="#"
            >
              Learn more
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
            </a>
            <div class="mt-5 flex justify-between gap-x-2">
              <button
                ref={ref}
                onClick$={() => {
                  // All event handlers are only executed in the browser, so it's safe to access the DOM
                  ref.value?.focus();
                  localStorage.setItem("cookiebar", "true");
                  dataVal.value = "true";
                }}
                type="button"
                class="py-[.4125rem] px-3 inline-flex justify-center items-center gap-2 rounded-full border-2 border-white font-semibold text-white hover:text-gray-800 hover:bg-white hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all text-sm"
              >
                Accept all
              </button>
              <button
                ref={ref}
                onClick$={() => {
                  // All event handlers are only executed in the browser, so it's safe to access the DOM
                  ref.value?.focus();
                  localStorage.setItem("cookiebar", "false");
                  dataVal.value = "false";
                }}
                type="button"
                class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-white/[.8] hover:text-white focus:outline-none focus:ring-2 ring-offset-white focus:ring-white focus:ring-offset-2 transition-all text-sm"
              >
                Reject all
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
});
