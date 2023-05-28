import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Headercontent from "~/components/headercontent";

export const head: DocumentHead = {
  title: "Broky.dev | Software developer",
  meta: [
    {
      name: "description",
      content:
        "My name is Mark aka Broky or Zacky and I'm a front end developer specialized in react, vue and qwik",
    },
  ],
};
export default component$(() => {
  return (
    <>
      <Headercontent />
      <div class="md:w-6/12 mx-auto w-11/12 mt-20 h-full min-h-screen">
        <div class="space-y-3">
          <h3 class="text-4xl font-semibold mb-10 ">Work experience</h3>
          <h2 class="font-bold hover:text-blue-600 transition duration-400 ">
            Introduction
          </h2>
          <p class="text-lg text-gray-800 ">
            Hi, my name is Mark, Front-End developer. I follow the latest trends
            and developments in the field of front end /full stack development,
            blockchain and artificial intelligence. I have years of experience
            with: Typescript, ReactJS, VueJS, NuxtJS, NextJS UnoCSS,
            TailwindCSS, tRPC, NodeJS, Prisma, PostgreSQL, Vercel, Storyblok,
            Strapi, Vitest, Jest, and Playwright. I have recent experience with
            the following technologies: SolidJS, Qwik, E-commerce, landing
            pages, decentralized applications, financial applications.
            Experience with web-design inspired by Apple's Steve Jobs.
            Experience with Blockchain development including Solidity with smart
            contracts, NFTs, DeFi, and Layer2s on the Ethereum network.
            Experience with OpenAI's APIs, prompt engineering and open source
            large language models.
          </p>
        </div>
        <h2 class="font-bold hover:text-blue-600 transition duration-400 mt-4">
          Experience
        </h2>
        <ul class="text-lg mt-4">
          <li class="pl-2">
            <div class="flex space-x-2">
              <h2>Kippie </h2>
              <p>|</p>
              <p>Front end developer</p>
              <p>|</p>
              <p>Zuid-Holland</p>
            </div>
            <p>Feb 2023 - Present</p>
          </li>
          <li class="pl-2">
            <div class="flex space-x-2">
              <h2>AND Digital </h2>
              <p>|</p>
              <p>Front end developer</p>
              <p>|</p>
              <p>Amsterdam</p>
            </div>
            <p>Aug 2022 - Jan 2023</p>
          </li>
          <li class="pl-2">
            <div class="flex space-x-2">
              <h2>Tsx Technology </h2>
              <p>|</p>
              <p>Junior Front end developer</p>
              <p>|</p>
              <p>Gouda</p>
            </div>
            <p>Feb 2020 - Aug 2022</p>
          </li>
        </ul>
        <h2 class="font-bold hover:text-blue-600 transition duration-400 mt-4">
          Education
        </h2>
        <ul class="text-lg mt-4 mb-10">
          <li class="pl-2 mb-4">
            <div class="flex flex-col">
              <h2>freeCodeCamp </h2>

              <p>Front end-development</p>

              <p>Nov 2020 - Jun 2022</p>
            </div>
          </li>
          <li class="pl-2  mb-4">
            <div class="flex flex-col">
              {" "}
              <h2>Amsterdam University of Applied Sciences </h2>
              <p>Informatica (Software engineering)</p>
              <p>Sep 2019 - Feb 2020</p>
            </div>
          </li>
          <li class="pl-2  mb-4">
            <div class="flex flex-col">
              {" "}
              <h2>NHA Distance Learning</h2>
              <p>Elementaire Belastingrecht</p>
              <p>Jan 2018 - May 2018 </p>
            </div>
          </li>
          <li class="pl-2  mb-4">
            <div class="flex flex-col">
              {" "}
              <h2>ID College</h2>
              <p>ICT and TelecommunicatieICT and Telecommunicatie</p>
              <p>Sep 2012 - Apr 2016</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
});
