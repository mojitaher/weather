"use client";

import { Sun, Cloud, CloudRain, Snowflake } from "lucide-react";

export default function WeatherInfinityLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-800">
      <div className="relative w-40 h-40">
        {/* دایره اصلی چرخان */}
        <div className="w-40 h-40 border-8 border-t-transparent border-white rounded-full animate-spin-slow"></div>

        {/* خورشید */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <Sun size={40} className="text-yellow-300 drop-shadow-lg" />
        </div>

        {/* ابر */}
        <div className="absolute top-1/2 -left-6 -translate-y-1/2 animate-bounce-slower">
          <Cloud size={40} className="text-white drop-shadow-lg" />
        </div>

        {/* بارون */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <CloudRain size={36} className="text-blue-300 drop-shadow-lg" />
        </div>

        {/* برف */}
        <div className="absolute top-1/2 -right-6 -translate-y-1/2 animate-bounce-slower">
          <Snowflake size={36} className="text-cyan-200 drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
}
