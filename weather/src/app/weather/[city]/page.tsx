import getAPI from "@/api";
import WeatherDetails from "@/component/weatherDetail";
import { redirect } from "next/navigation";

export default async function WeatherCityPage({
  params,
}: {
  params: { city: string };
}) {
  const { city } = params;

  if (!city) redirect("/");

  try {
    const data = await getAPI(city);
    if (!data) redirect("/");
    return (
      <>
        <WeatherDetails data={data} />;
      </>
    );
  } catch {
    redirect("/");
  }
}
