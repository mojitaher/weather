import { getApiForcast } from "@/api";
import WeatherCard from "@/component/weatherCard";
import { redirect } from "next/navigation";

export default async function WeatherPage({ searchParams }: unknown) {
  const { city } = searchParams as { city?: string };

  if (!city) {
    redirect("/not-found");
  }

  try {
    const data = await getApiForcast(city);
    return <WeatherCard data={data} />;
  } catch {
    redirect("/not-found");
  }
}
