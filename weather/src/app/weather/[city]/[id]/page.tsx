import { getApiForcast } from "@/api";

import WeatherDetails from "@/component/weatherDetail";
import { redirect } from "next/navigation";

export default async function WeatherCityPage({
  params,
}: {
  params: { city: string };
}) {
  const { city } = await params;

  if (!city) redirect("/");

  try {
    const data = await getApiForcast(city);
    if (!data) redirect("/");
    return (
      <>
        <WeatherDetails data={data} />
      </>
    );
  } catch {
    redirect("/");
  }
}
