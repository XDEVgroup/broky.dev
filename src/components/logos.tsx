import { Image } from "@unpic/qwik";
import { component$ } from "@builder.io/qwik";

export default component$((props: any) => {
  const { logo } = props;
  return (
    <>
      <Image
        width={800}
        height={800}
        layout="constrained"
        src={logo}
        alt="qwik"
        class="h-10 w-auto"
      />
    </>
  );
});
