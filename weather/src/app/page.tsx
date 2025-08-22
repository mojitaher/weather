"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CityInput from "@/component/CityInput";
import { SearchButton } from "@/component/CityInput";
export default function Home() {
  const [city, setCity] = useState("");
  const [lastCity, setLastCity] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const storedCity = localStorage.getItem("lastCity");
    if (storedCity) setLastCity(storedCity);
  }, []);
  const handleSearch = () => {
    if (!city) {
      return;
    }
    localStorage.setItem("lastCity", city);
    setLastCity(city);

    router.push(`/weather?city=${city}`);
  };
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-6">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="text-4xl md:text-6xl font-extrabold text-white text-center mb-10 drop-shadow-lg"
      >
        🌦️ Welcome to Your Weather Universe
      </motion.h1>
      {lastCity && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="w-full max-w-md mb-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-lg px-6 py-4 flex items-center justify-between text-white font-bold"
        >
          <span>🌇 Last searched city: {lastCity}</span>
          <button
            className="text-sm bg-cyan-400/80 hover:bg-cyan-500 px-3 py-1 rounded-lg"
            onClick={() => router.push(`/weather?city=${lastCity}`)}
          >
            View Weather
          </button>
        </motion.div>
      )}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="w-full max-w-md flex flex-col gap-4 z-10"
      >
        <CityInput city={city} setCity={setCity} />
        <SearchButton onClick={handleSearch} />
      </motion.div>
    </div>
  );
}
