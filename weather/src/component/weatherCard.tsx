import React from "react";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";
import WeatherAnimation from "./animation";
import Link from "next/link";
type dataType = {
  location: {
    name: string;
    country: string;
  };
  current: {
    condition: {
      text: string;
      code: number;
    };
  };
};

export default function WeatherCard({ data }: { data: dataType }) {
  return (
    <>
      <div className="w-[400px] relative mt-4 h-[400px] group mx-auto dark:bg-black  bg-white dark:border-0 border overflow-hidden rounded-md dark:text-white text-black ">
        <figure className="w-full h-full rounded-md  overflow-hidden">
          <WeatherAnimation code={data.current.condition.code} />
        </figure>
        <div className="absolute top-0 left-0 w-full h-full  transition-all duration-300 bg-gradient-to-b from-[#7bcc0225] via-[#f2fa1539]  to-[#61e7f6]"></div>
        <article className="p-4 space-y-2 absolute -bottom-10 group-hover:bottom-0 transition-all duration-300 ">
          <h1 className="text-2xl font-semibold capitalize w-[90%]">
            {data.location.country}
            {data.location.name}
          </h1>
          <Link
            href={`/weather/${data.location.name}`}
            className=" text-base dark:text-white text-blue-600 font-normal  group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1  transition-all duration-300  "
          >
            Read More
            <span>
              <ChevronsRight />
            </span>
          </Link>
        </article>
      </div>
    </>
  );
}
