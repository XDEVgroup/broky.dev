import { component$, Slot } from "@builder.io/qwik";
import { type RequestHandler } from "@builder.io/qwik-city";
import Cookie from "~/components/cookie";
import Footer from "~/components/footer";
import { extractLang, useI18n } from "~/routes/[locale]/i18n-utils";

export const onRequest: RequestHandler = ({ locale, params }) => {
  locale(extractLang(params.locale));
};

export default component$(() => {
  useI18n();
  return ( <>
    <Cookie />
    <main class=" ">
      <Slot />
    </main>
    <Footer />
  </>)
});
