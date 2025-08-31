import { getApiForcast } from "@/api";

import WeatherDetails from "@/component/weatherDetail";
import { redirect } from "next/navigation";

export default async function WeatherCityPage(props: any) {
  const { city, id } = (props as { params: { city: string; id: string } })
    .params;

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
