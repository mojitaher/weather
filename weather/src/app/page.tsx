"use client";
import CityInput from "@/component/CityInput";
import SearchButton from "@/component/searchButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSearch = () => {
    if (!city) {
      setError("city is not found");
      return;
    }
    {
      setError(null);
      localStorage.setItem("lastCity", city);
      router.push(`/weather?city=${city}`);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-indigo-700 text-white">
      <h1 className="text-4xl font-bold mb-6">Weather App 🌦️</h1>
      <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4 w-80">
        <CityInput city={city} setCity={setCity} error={error} />
        <SearchButton onClick={handleSearch} />
      </div>
    </div>
  );
}
