import { getApiForcast } from "@/api";
import WeatherDetails from "@/component/weatherDetail";
import { redirect } from "next/navigation";

export default async function WeatherCityPage({
  params,
}: {
  params: { city: string; id: string };
}) {
  const { city, id } = await params;

  if (!city || !id) redirect("/");

  try {
    const data = await getApiForcast(city);

    if (!data) redirect("/not-found");

    return <WeatherDetails data={data} />;
  } catch (error) {
    console.error("Weather API error:", error);
    redirect("/not-found");
  }
}
