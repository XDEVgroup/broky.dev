import { Link } from "@builder.io/qwik-city";
import {
  projects1,
  projects2,
  projects3,
  projects4
} from "../../../ultils/stories";
import { Image } from "@unpic/qwik";
import { component$ } from "@builder.io/qwik";
import Header from "~/components/header";
import Partners from "~/components/partners";

export default component$(() => {
  return (
    <>
      <Header />
      <div class="bg-black">
        <div class="m-auto flex min-h-screen  flex-col bg-gradient-to-b from-sky-800/[.60] via-sky-800/[.10] w-screen">
          <div class="">
            <div class="relative overflow-hidden before:absolute before:left-1/2 before:top-0 before:-z-[1] before:h-full before:w-full before:-translate-x-1/2 ">
              <div class="mx-auto max-w-[85rem] px-4 pb-10 pt-20 sm:px-6 lg:px-8">
                <div class="mx-auto mt-5 max-w-xl text-center">
                  <h1 class="block text-2xl font-bold text-white md:text-3xl lg:text-4xl ">
                  {$localize`:@@myprojects:`}
                  </h1>
                </div>
              </div>
            </div>

            <div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
              <div class="mb-10 grid gap-6 sm:grid-cols-2 lg:mb-14 lg:grid-cols-4">
                {projects1.map((project) => {
                  return (
                    <>
                      <Link href={`${project.id}`}>
                        <div class="group flex flex-col rounded-xl border border-gray-800 bg-white shadow-sm transition hover:shadow-md ">
                          <div class="relative overflow-hidden rounded-t-lg ">
                            <Image
                              width={800}
                              height={600}
                              class="h-60 w-full rounded-t-xl object-cover transition-all hover:scale-105"
                              src={project.image}
                              alt="Image Description"
                            />
                          </div>
                          <div class="flex justify-between p-4 md:p-5">
                            <div>
                              <p class="mt-2 text-xs uppercase text-black ">
                                {project.category}
                              </p>
                              <h3 class="mt-2 text-lg font-medium text-gray-800   ">
                                {project.title}
                              </h3>
                            </div>
                            <div class="grid grid-cols-2 gap-1">
                              {project.stack.map((item: string, i: number) => {
                                return (
                                  <img
                                   
                                    key={i}
                                    class="h-6 w-auto  transition duration-300 group-hover:scale-95"
                                    src={`${item}`}
                                    alt="Image Description"
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>

              <div class="mb-10 grid gap-6 sm:grid-cols-2 lg:mb-14 lg:grid-cols-4">
              {projects2.map((project) => {
                  return (
                    <>
                      <Link href={`${project.id}`}>
                        <div class="group flex flex-col rounded-xl border border-gray-800 bg-white shadow-sm transition hover:shadow-md ">
                          <div class="relative overflow-hidden rounded-t-lg ">
                            <Image
                              width={800}
                              height={600}
                              class="h-60 w-80 rounded-t-xl object-cover transition-all hover:scale-105"
                              src={project.image}
                              alt="Image Description"
                            />
                          </div>
                          <div class="flex justify-between p-4 md:p-5">
                            <div>
                              <p class="mt-2 text-xs uppercase text-black ">
                                {project.category}
                              </p>
                              <h3 class="mt-2 text-lg font-medium text-gray-800   ">
                                {project.title}
                              </h3>
                            </div>
                            <div class="grid grid-cols-2 gap-1">
                              {project.stack.map((item: string, i: number) => {
                                return (
                                  <img
                                    
                                    key={i}
                                    class="h-6 w-auto  transition duration-300 group-hover:scale-95"
                                    src={`${item}`}
                                    alt="Image Description"
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>

              <div class="mb-10 grid gap-6 sm:grid-cols-2 lg:mb-14 lg:grid-cols-4">
              {projects3.map((project) => {
                  return (
                    <>
                      <Link href={`${project.id}`}>
                        <div class="group flex flex-col rounded-xl border border-gray-800 bg-white shadow-sm transition hover:shadow-md ">
                          <div class="relative overflow-hidden rounded-t-lg ">
                            <Image
                              width={800}
                              height={600}
                              class="h-60 w-80 rounded-t-xl object-cover transition-all hover:scale-105"
                              src={project.image}
                              alt="Image Description"
                            />
                          </div>
                          <div class="flex justify-between p-4 md:p-5">
                            <div>
                              <p class="mt-2 text-xs uppercase text-black ">
                                {project.category}
                              </p>
                              <h3 class="mt-2 text-lg font-medium text-gray-800   ">
                                {project.title}
                              </h3>
                            </div>
                            <div class="grid grid-cols-2 gap-1">
                              {project.stack.map((item: string, i: number) => {
                                return (
                                  <img
                                   
                                    key={i}
                                    class="h-6 w-auto  transition duration-300 group-hover:scale-95"
                                    src={`${item}`}
                                    alt="Image Description"
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>

              <div class="mb-10 grid gap-6 sm:grid-cols-2 lg:mb-14 lg:grid-cols-4">
              {projects4.map((project) => {
                  return (
                    <>
                      <Link href={`${project.id}`}>
                        <div class="group flex flex-col rounded-xl border border-gray-800 bg-white shadow-sm transition hover:shadow-md ">
                          <div class="relative overflow-hidden rounded-t-lg ">
                            <Image
                              width={800}
                              height={600}
                              class="h-60 w-80 rounded-t-xl object-cover transition-all hover:scale-105"
                              src={project.image}
                              alt="Image Description"
                            />
                          </div>
                          <div class="flex justify-between p-4 md:p-5">
                            <div>
                              <p class="mt-2 text-xs uppercase text-black ">
                                {project.category}
                              </p>
                              <h3 class="mt-2 text-lg font-medium text-gray-800   ">
                                {project.title}
                              </h3>
                            </div>
                            <div class="grid grid-cols-2 gap-1">
                              {project.stack.map((item: string, i: number) => {
                                return (
                                  <img
                                   
                                    key={i}
                                    class="h-6 w-auto  transition duration-300 group-hover:scale-95"
                                    src={`${item}`}
                                    alt="Image Description"
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
<Partners />
              

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
