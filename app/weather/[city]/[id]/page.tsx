import { getApiForcast } from "@/api";

import WeatherDetails from "@/component/weatherDetail";
import { redirect } from "next/navigation";

export default async function WeatherCityPage({ params }: any) {
  const { city, id } = params;

  if (!city || !id) redirect("/");

  try {
    const data = await getApiForcast(city);
    if (!data) redirect("/not-found");
    return (
      <>
        <WeatherDetails data={data} />
      </>
    );
  } catch {
    redirect("/not-found");
  }
}
