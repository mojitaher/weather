"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { motion } from "framer-motion";

import WeatherAnimation from "./animation";

const getGradient = (condition: string) => {
  switch (condition.toLowerCase()) {
    case "sunny":
      return "from-yellow-400 via-orange-500 to-red-600";
    case "cloudy":
      return "from-gray-500 via-gray-700 to-black";
    case "rain":
    case "rainy":
      return "from-blue-400 via-blue-600 to-indigo-900";
    case "snow":
      return "from-cyan-200 via-blue-400 to-indigo-600";
    case "thunder":
      return "from-purple-700 via-indigo-800 to-black";
    default:
      return "from-slate-600 via-slate-900 to-black";
  }
};

type WeatherData = {
  location: { name: string };
  forecast: {
    forecastday: {
      date: string;
      day: {
        avgtemp_c: number;
        maxtemp_c: number;
        mintemp_c: number;
        condition: { text: string; code: number };
      };
    }[];
  };
};

export default function WeatherCards({ data }: { data: WeatherData }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 20; // زاویه X
    const y = ((clientY - top) / height - 0.5) * -20; // زاویه Y

    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-10 relative overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      {/* هاله‌های پس‌زمینه */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] 
      bg-pink-400/30 rounded-full opacity-70 animate-pulse"
      />
      <div
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] 
      bg-purple-400/30 rounded-full opacity-60 animate-pulse"
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] 
      bg-blue-400/30 rounded-full opacity-50 animate-pulse"
      />

      {/* کارت هدر افقی */}
      <div className="relative w-full max-w-4xl mb-12 z-10 flex justify-center animate-slide-left">
        <div
          className="w-[90%] md:w-[600px] h-24 
        bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center text-xl font-bold text-white
        border border-white/20 shadow-lg"
        >
          Weather Forecast for the Next 3 Days
        </div>
      </div>

      {/* کارت‌های پیش‌بینی */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
        {data.forecast.forecastday.slice(0, 3).map((day, idx) => {
          const weekday = new Date(day.date).toLocaleDateString("en-US", {
            weekday: "long",
          });
          const gradient = getGradient(day.day.condition.text);

          return (
            <motion.div
              key={idx}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: idx * 0.2,
              }}
              className="relative w-[340px] h-[500px] mx-auto"
            >
              {/* این لایه داخلی فقط برای چرخش کارت با موس */}
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(${rotate.y}deg) rotateY(${rotate.x}deg)`,
                }}
                className="relative w-full h-full rounded-3xl
               bg-white/10 backdrop-blur-2xl border border-white/30
               shadow-[0_20px_80px_-10px_rgba(0,0,0,0.8)]
               overflow-hidden flex flex-col"
              >
                {/* گرادینت */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60`}
                />

                {/* Glow Border */}
                <div className="absolute inset-0 border-2 border-cyan-400/40 rounded-3xl animate-pulse" />

                {/* محتوای کارت */}
                <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                  {/* انیمیشن بالا */}
                  <div className="w-full h-[150px] flex justify-center">
                    <WeatherAnimation code={day.day.condition.code} />
                  </div>

                  {/* متن */}
                  <div className="text-center space-y-2">
                    <h2 className="text-3xl font-extrabold tracking-wider">
                      {weekday}
                    </h2>
                    <p className="text-5xl font-bold mt-2">
                      {day.day.avgtemp_c}°C
                    </p>
                    <p className="capitalize text-gray-200/90 text-lg">
                      {day.day.condition.text}
                    </p>

                    {/* دماهای بیشتر */}
                    <div className="flex justify-between text-sm text-gray-300 mt-3 px-6">
                      <span>🌡️ Max: {day.day.maxtemp_c}°C</span>
                      <span>❄️ Min: {day.day.mintemp_c}°C</span>
                    </div>
                  </div>

                  {/* خط جداکننده */}
                  <div className="w-full h-[1px] bg-white/20 my-3" />

                  {/* دکمه پایین */}
                  <Link
                    href={`/weather/${data.location.name}/${idx}`}
                    className="flex items-center justify-center mt-2 text-cyan-300 hover:text-cyan-400 font-semibold transition-colors"
                  >
                    Explore More <ChevronsRight size={18} className="ml-1" />
                  </Link>
                </div>

                {/* نورهای تزئینی */}
                <div className="absolute w-40 h-40 bg-white/30 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
                <div className="absolute w-28 h-28 bg-cyan-400/30 rounded-full blur-2xl bottom-10 right-10 animate-ping"></div>
                <div />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
