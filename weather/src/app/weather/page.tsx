import { getApiForcast } from "@/api";
import WeatherCard from "@/component/weatherCard";
import { redirect } from "next/navigation";

export default async function WeatherPage({
  searchParams,
}: {
  searchParams: { city?: string };
}) {
  const city = searchParams.city;

  if (!city) {
    redirect("/");
  }

  try {
    const data = await getApiForcast(city);
    return <WeatherCard data={data} />;
  } catch {
    alert("not found");
    redirect("/");
  }
}
