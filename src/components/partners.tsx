import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(({subclass}:{subclass?: "invert"}) => {
  return (
  <div class=" flex flex-col py-10 items-center justify-center">

    {subclass === "invert" && <h2 class="text-black text-xl">Partnered with</h2>}
    {subclass !== "invert" && <h2 class="text-white text-xl">Partnered with</h2>}
    <div class="md:flex grid grid-cols-2 md:gap-10 gap-6 py-10 items-center ">
    <Image class={`${subclass}`} height="25" width="150"  src="/partners/markting-white.webp" alt="mark&ting" />
    <Image class={`${subclass}`} height="25" width="150"  src="/partners/xdevelopmentlogo.webp" alt="x-development" />
    <Image class={`${subclass}`} height="25" width="150"  src="/partners/onlinewy.webp" alt="owy" />
  </div>
  </div>
  );
});
