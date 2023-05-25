import { component$, Slot } from "@builder.io/qwik";

import Header from "~/components/header";
import Footer from "~/components/footer";

export default component$(() => {
  return (
    <>
      <main class="min-h-screen ">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
