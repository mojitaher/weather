
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CityInput, { SearchButton } from "@/component/CityInput";
import { CloudSunIcon, Languages } from "lucide-react";

export default function Home() {
  const [city, setCity] = useState("");
  const [lastCity, setLastCity] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedCity = localStorage.getItem("lastCity");

    if (storedCity) {
      setLastCity(storedCity);
    }
  }, []);

  const handleSearch = (cityName: string = city) => {
    const trimmedCity = cityName.trim();

    if (trimmedCity.length <= 2) {
      alert("Please enter a valid city name in English.");
      return;
    }

    localStorage.setItem("lastCity", trimmedCity);
    setLastCity(trimmedCity);

    router.push(`/weather?city=${encodeURIComponent(trimmedCity)}`);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="mb-10 flex flex-col items-center gap-3 text-center text-4xl font-extrabold text-white drop-shadow-lg md:text-6xl"
      >
        <CloudSunIcon width={50} height={50} />
        Welcome to Your Weather Universe
      </motion.h1>

      {lastCity && (
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="mb-6 flex w-full max-w-md items-center justify-between gap-3 rounded-3xl border border-white/20 bg-white/10 px-6 py-4 font-bold text-white shadow-lg backdrop-blur-xl"
        >
          <span>🌇 Last searched city: {lastCity}</span>

          <button
            className="shrink-0 rounded-lg bg-cyan-400/80 px-3 py-2 text-sm hover:bg-cyan-500"
            onClick={() => handleSearch(lastCity)}
          >
            View Weather
          </button>
        </motion.div>
      )}

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="z-10 flex w-full max-w-md flex-col gap-4"
      >
        <CityInput city={city} setCity={setCity} />

        <p className="flex items-center justify-center gap-2 text-sm text-white/90">
          <Languages size={17} />
          Please enter the city name in English.
        </p>

        <SearchButton onClick={() => handleSearch()} />
      </motion.div>
    </div>
  );
}
