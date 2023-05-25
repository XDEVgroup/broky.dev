import { component$, Slot } from "@builder.io/qwik";
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
