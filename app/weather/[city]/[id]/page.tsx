
import { getApiForcast } from "@/api";
import WeatherDetails from "@/component/weatherDetail";
import { redirect } from "next/navigation";

interface WeatherCityPageProps {
  params: Promise<{
    city: string;
    id: string;
  }>;
}

export default async function WeatherCityPage({
  params,
}: WeatherCityPageProps) {
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
