import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, useLocation } from "@builder.io/qwik-city";
import {
  projects1,
  projects2,
  projects3,
  projects4
} from "../../../../ultils/stories";
import { Image } from "@unpic/qwik";

export const useQuery = routeLoader$(({ params }) => {
  return { id: params.id };
});

export default component$(() => {
  const loc = useLocation();
  const queryData = useQuery();

  const calculateCurrentId = (id: string) => {
    const totalproject: any = [];
    totalproject.push(
      ...projects1,
      ...projects2,
      ...projects3,
      ...projects4,
    );

    const data = totalproject?.filter((item: any) => item.id === Number(id));
    return data;
  };
  const data = calculateCurrentId(queryData.value.id as string);
  const item = data[0];
  return (
    <>
     
      <div class="mx-auto grid min-h-screen w-11/12 grid-cols-1 gap-4 lg:flex ">
         
        <div class="flex flex-col justify-center p-4 lg:w-3/6">
          <div class="py-6 text-sky-700">
            <Link class="underline" href={`/${loc.params.locale}/cases`}>{$localize`:@@back:`}</Link>
          </div>
          <span class="uppercase">{item?.category}</span>
          <a href={item?.website} class="z-20 text-purple-500">
            {item?.website}
          </a>
          <span class="mb-4 font-sans text-6xl uppercase drop-shadow-lg ">
            {item?.title}
          </span>
          <a href={item?.website} class="group relative">
            <Image
              height={600}
              width={600}
              class="border-groove h-80 w-full cursor-pointer border-8 border-black object-cover transition-all duration-300 hover:scale-95"
              src={item?.image}
              alt={item?.title}
            />
            <div class="duration-400 absolute left-0 top-0 flex h-80 w-full items-center justify-center bg-transparent text-xl font-bold  uppercase text-transparent transition  group-hover:bg-purple-500   group-hover:text-black ">
            {$localize`:@@website:`}
            </div>
          </a>
        </div>
        <div class=" flex flex-col lg:w-3/6 w-full justify-center ">
          <div class=" flex flex-col gap-4 ">
            {" "}
            <span class="text-lg uppercase">Case story</span>
            <p class="text-md font-extralight">{item?.desc}</p>
            <p class="text-md font-extralight">{item?.desc2}</p>
          </div>
          <div class="flex items-center gap-2  py-6 ">
            {item?.stack.map((item: string, i: number) => {
              return (
                <img
                  key={i}
                  class="h-12 w-auto transition duration-700 group-hover:scale-95"
                  src={item}
                  alt="Image Description"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
});
