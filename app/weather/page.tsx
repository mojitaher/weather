import { getApiForcast } from "@/api";
import WeatherCard from "@/component/weatherCard";
import { redirect } from "next/navigation";

export default async function WeatherPage({
  searchParams,
}: {
  searchParams: { city?: string };
}) {
  const { city } = searchParams;

  if (!city) {
    redirect("/not-found");
  }

  try {
    const data = await getApiForcast(city);

    if (!data) {
      redirect("/not-found");
    }

    return <WeatherCard data={data} />;
  } catch (error) {
    console.error("API fetch error:", error);
    redirect("/not-found");
  }
}
