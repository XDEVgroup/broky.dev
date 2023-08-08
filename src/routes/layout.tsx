import { component$, Slot } from "@builder.io/qwik";
import Cookie from "~/components/cookie";
import Footer from "~/components/footer";
export default component$(() => {
  return (
    <>
      <Cookie />

      <main class=" ">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
