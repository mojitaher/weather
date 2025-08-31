// src/app/weather/[city]/[id]/page.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getApiForcast } from "@/api";
import WeatherDetails from "@/component/weatherDetail";
import { redirect } from "next/navigation";

// Props صفحه را به صورت any می‌گیریم و داخل تابع cast می‌کنیم
export default async function WeatherCityPage(props: any) {
  // Cast type-safe برای params
  const { city, id } = (props as { params: { city: string; id: string } })
    .params;

  // fallback اگر city یا id خالی بود
  if (!city || !id) redirect("/");

  try {
    // fetch دیتا
    const data = await getApiForcast(city);

    // fallback اگر دیتا موجود نبود
    if (!data) redirect("/not-found");

    // نمایش جزئیات آب و هوا
    return <WeatherDetails data={data} />;
  } catch (error) {
    console.error("Weather API error:", error);
    redirect("/not-found");
  }
}
