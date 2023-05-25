import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Header from "~/components/header";
import Footer from "~/components/footer";

export default component$(() => {
  return (
    <>
      <div class="font-inter">
        <Header />
        <main class="min-h-screen ">
          <Slot />
        </main>
        <Footer />
      </div>
    </>
  );
});
