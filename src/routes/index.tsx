import { component$ } from "@builder.io/qwik";
import type { RequestEvent} from "@builder.io/qwik-city";

export const onGet = async ({ redirect }: RequestEvent) => {
    throw redirect(302, '/en');
};

export default component$(() => {
  return (
    <>
     
    </>
  );
});
