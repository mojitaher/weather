"use client";
import {
  Cloud,
  CloudRain,
  Snowflake,
  Sun,
  Wind,
  Zap,
  Droplets,
  Thermometer,
} from "lucide-react";

type dataType = {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    feelslike_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
  };
};

export default function WeatherDetails({ data }: { data: dataType }) {
  const condition = data.current.condition.text.toLowerCase();

  // آیکون بر اساس وضعیت
  const getIcon = () => {
    if (condition.includes("cloud")) return <Cloud size={80} />;
    if (condition.includes("rain")) return <CloudRain size={80} />;
    if (condition.includes("snow")) return <Snowflake size={80} />;
    if (condition.includes("storm")) return <Zap size={80} />;
    return <Sun size={80} />;
  };

  // بکگراند بر اساس وضعیت
  const getBackground = () => {
    if (condition.includes("cloud"))
      return "from-gray-400 via-gray-600 to-gray-800"; // ابری
    if (condition.includes("rain"))
      return "from-blue-900 via-gray-800 to-black"; // بارونی
    if (condition.includes("snow"))
      return "from-blue-100 via-white to-cyan-200"; // برفی
    if (condition.includes("storm"))
      return "from-purple-900 via-indigo-950 to-black"; // طوفانی
    return "from-yellow-400 via-orange-500 to-pink-500"; // آفتابی
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${getBackground()} p-8 transition-all duration-700`}
    >
      <div className="w-full max-w-3xl text-white space-y-8">
        {/* هدر */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold drop-shadow-lg">
            {data.location.name}, {data.location.country}
          </h1>
          <p className="text-lg opacity-80 mt-2">
            {data.current.condition.text}
          </p>
        </div>

        {/* کارت اصلی */}
        <div className="bg-white/20 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl flex flex-col items-center">
          <div className="mb-6">{getIcon()}</div>
          <p className="text-6xl font-extrabold drop-shadow-sm">
            {data.current.temp_c}°C
          </p>
          <p className="text-lg opacity-80 mt-2">
            Feels like {data.current.feelslike_c}°C
          </p>
        </div>

        {/* کارت‌های جزئیات */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/15 rounded-2xl p-4 backdrop-blur-md flex flex-col items-center shadow-lg">
            <Droplets size={28} />
            <p className="mt-2 font-semibold">Humidity</p>
            <p>{data.current.humidity}%</p>
          </div>
          <div className="bg-white/15 rounded-2xl p-4 backdrop-blur-md flex flex-col items-center shadow-lg">
            <Wind size={28} />
            <p className="mt-2 font-semibold">Wind</p>
            <p>{data.current.wind_kph} km/h</p>
          </div>
          <div className="bg-white/15 rounded-2xl p-4 backdrop-blur-md flex flex-col items-center shadow-lg">
            <Thermometer size={28} />
            <p className="mt-2 font-semibold">Temp</p>
            <p>{data.current.temp_c}°C</p>
          </div>
          <div className="bg-white/15 rounded-2xl p-4 backdrop-blur-md flex flex-col items-center shadow-lg">
            <Sun size={28} />
            <p className="mt-2 font-semibold">Condition</p>
            <p>{data.current.condition.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
