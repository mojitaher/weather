"use client";
import { useParams } from "next/navigation";
import {
  Cloud,
  CloudRain,
  Snowflake,
  Sun,
  Zap,
  Droplets,
  Wind,
  Thermometer,
} from "lucide-react";

// ---------- تایپ‌ها ----------
type Condition = {
  text: string;
  icon: string;
  code: number;
};

type Day = {
  maxtemp_c: number;
  mintemp_c: number;
  avgtemp_c: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  avgvis_km: number;
  avghumidity: number;
  condition: Condition;
};

type ForecastDay = {
  date: string;
  day: Day;
};

type Forecast = {
  forecastday: ForecastDay[];
};

type Location = {
  name: string;
  country: string;
};

type Current = {
  temp_c: number;
  feelslike_c: number;
  humidity: number;
  wind_kph: number;
  condition: Condition;
};

type DataType = {
  location: Location;
  current: Current;
  forecast: Forecast;
};

// ---------- کامپوننت ----------
export default function WeatherDetails({ data }: { data: DataType }) {
  const { id } = useParams();
  const index = Number(id);
  const dayDate = data.forecast.forecastday[index].date;
  const condition =
    data.forecast.forecastday[index].day.condition.text.toLowerCase();

  const getIcon = () => {
    if (condition.includes("cloud"))
      return <Cloud size={90} className="drop-shadow-xl text-blue-200" />;
    if (condition.includes("rain"))
      return <CloudRain size={90} className="drop-shadow-xl text-blue-400" />;
    if (condition.includes("snow"))
      return <Snowflake size={90} className="drop-shadow-xl text-cyan-300" />;
    if (condition.includes("storm"))
      return <Zap size={90} className="drop-shadow-xl text-yellow-400" />;
    return <Sun size={90} className="drop-shadow-xl text-orange-300" />;
  };

  const getBackground = () => {
    if (condition.includes("cloud"))
      return "from-sky-400 via-sky-700 to-gray-900";
    if (condition.includes("rain"))
      return "from-blue-900 via-gray-900 to-black";
    if (condition.includes("snow"))
      return "from-cyan-100 via-sky-200 to-blue-300";
    if (condition.includes("storm"))
      return "from-purple-900 via-indigo-900 to-black";
    return "from-yellow-300 via-orange-500 to-red-600";
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${getBackground()} p-4 md:p-8 transition-all duration-700 relative overflow-hidden`}
    >
      {/* افکت نور */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),transparent_70%)] animate-pulse"></div>

      <div className="w-full max-w-5xl text-white space-y-8 md:space-y-10 relative z-10">
        {/* هدر */}
        <div className="text-center px-2">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent drop-shadow-2xl break-words">
            {data.location.name}, {data.location.country}
          </h1>
          <p className="text-base md:text-lg opacity-90 mt-3 tracking-wide font-medium">
            {data.forecast.forecastday[index].day.condition.text}
          </p>
          <p className="text-sm md:text-lg opacity-90 mt-2 font-medium">
            {new Date(dayDate).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* کارت اصلی */}
        <div className="bg-white/20 backdrop-blur-3xl rounded-3xl p-6 md:p-10 shadow-2xl flex flex-col items-center transform hover:scale-[1.02] transition duration-500 border border-white/30">
          <div className="mb-4 md:mb-6 animate-bounce">{getIcon()}</div>
          <p className="text-5xl md:text-7xl font-extrabold drop-shadow-sm">
            {data.forecast.forecastday[index].day.maxtemp_c}°C
          </p>
          <p className="text-sm md:text-lg opacity-80 mt-3 font-light">
            Feels like{" "}
            <span className="font-semibold">{data.current.feelslike_c}°C</span>
          </p>
        </div>

        {/* کارت‌های جزئیات */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-2">
          {[
            {
              icon: <Droplets size={24} className="md:size-28" />,
              title: "Humidity",
              value: `${data.current.humidity}%`,
            },
            {
              icon: <Wind size={24} className="md:size-28" />,
              title: "Wind",
              value: `${data.forecast.forecastday[index].day.maxwind_kph} km/h`,
            },
            {
              icon: <Thermometer size={24} className="md:size-28" />,
              title: "Temp",
              value: `${data.forecast.forecastday[index].day.maxtemp_c}°C`,
            },
            {
              icon: <Sun size={24} className="md:size-28" />,
              title: "Condition",
              value: data.forecast.forecastday[index].day.condition.text,
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/15 rounded-2xl p-4 md:p-5 backdrop-blur-lg flex flex-col items-center shadow-lg hover:scale-105 hover:bg-white/25 transition duration-300 border border-white/20 text-center"
            >
              <div className="p-2 md:p-3 rounded-full bg-white/20 mb-2 md:mb-3 shadow-inner">
                {card.icon}
              </div>
              <p className="text-sm md:text-base font-semibold">{card.title}</p>
              <p className="text-xs md:text-sm opacity-90">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
