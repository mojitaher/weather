
import { getApiForcast } from "@/api";
import WeatherCard from "@/component/weatherCard";
import { redirect } from "next/navigation";

interface WeatherPageProps {
  searchParams: Promise<{
    city?: string;
  }>;
}

export default async function WeatherPage({
  searchParams,
}: WeatherPageProps) {
  const { city } = await searchParams;

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
