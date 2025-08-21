import { getWeatherByCity } from "@/api";
import WeatherCard from "@/component/weatherCard";
import { redirect } from "next/navigation";

export default async function WeatherCityPage({
  params,
}: {
  params: { city: string };
}) {
  const { city } = params;

  if (!city) redirect("/");

  try {
    const data = await getWeatherByCity(city);
    if (!data) redirect("/");
    return <WeatherCard data={data} />;
  } catch {
    redirect("/");
  }
}
