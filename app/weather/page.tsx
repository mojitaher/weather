// src/app/weather/page.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getApiForcast } from "@/api";
import WeatherCard from "@/component/weatherCard";

export default function WeatherPage() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city");
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!city) {
      router.push("/not-found");
      return;
    }

    getApiForcast(city)
      .then((res) => setData(res))
      .catch(() => router.push("/not-found"));
  }, [city, router]);

  if (!data) return <div>Loading...</div>;
  return <WeatherCard data={data} />;
}
