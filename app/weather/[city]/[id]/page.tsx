import { getApiForcast } from "@/api";

import WeatherDetails from "@/component/weatherDetail";
import { redirect } from "next/navigation";

type Params = {
  params: {
    city: string;
    id: string;
  };
};
export default async function WeatherCityPage(props: Promise<Params>) {
  const { params } = await props;
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
