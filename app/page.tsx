"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CityInput from "@/component/CityInput";
import { CloudSunIcon } from "lucide-react";
import { SearchButton } from "@/component/CityInput";
import WelcomeModal from "@/component/WelcomeModal";

export default function Home() {
  const [city, setCity] = useState("");
  const [lastCity, setLastCity] = useState<string | null>(null);
  const [showWelcome, setShowWelcome] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const storedCity = localStorage.getItem("lastCity");
    if (storedCity) setLastCity(storedCity);
    setShowWelcome(true);
  }, []);
  const handleSearch = () => {
    if (!city || city.trim().length <= 2) {
      alert("city is not found");
      return;
    }
    localStorage.setItem("lastCity", city);
    setLastCity(city);

    router.push(`/weather?city=${city}`);
  };
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-6">
      <WelcomeModal open={showWelcome} onClose={() => setShowWelcome(false)}>
        <div className="modal-scroll max-h-[70vh] overflow-y-auto overflow-x-hidden pr-2 text-left">
          <h2 className="text-2xl font-extrabold mb-1 text-center drop-shadow-lg">
            Welcome 👋
          </h2>
          <p className="text-sm text-white/70 text-center mb-6">
            Project Setup Guide
          </p>

          <p className="text-white/90 leading-relaxed mb-4">
            After cloning the project, you need to create a{" "}
            <code className="px-1.5 py-0.5 rounded bg-black/30 text-cyan-200 text-sm">
              .env.local
            </code>{" "}
            file in the project&apos;s root directory before running the
            application.
          </p>

          <ol className="space-y-4 mb-6">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/80 text-white text-sm font-bold flex items-center justify-center">
                1
              </span>
              <span className="text-white/90">
                Create a{" "}
                <code className="px-1.5 py-0.5 rounded bg-black/30 text-cyan-200 text-sm">
                  .env.local
                </code>{" "}
                file.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/80 text-white text-sm font-bold flex items-center justify-center">
                2
              </span>
              <div className="text-white/90 w-full">
                <p className="mb-2">Add the following variables to the file:</p>
                <pre className="rounded-xl bg-black/40 border border-white/10 p-3 text-xs text-cyan-100 whitespace-pre-wrap break-words">
                  <code>{`# Base URL for Weather API
NEXT_PUBLIC_API_BASE=http://api.weatherapi.com/v1

# Your Weather API Key
NEXT_PUBLIC_API_KEY=your_api_key_here`}</code>
                </pre>
              </div>
            </li>

            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/80 text-white text-sm font-bold flex items-center justify-center">
                3
              </span>
              <span className="text-white/90">
                Sign up on Weather API and generate your own API key.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/80 text-white text-sm font-bold flex items-center justify-center">
                4
              </span>
              <div className="text-white/90 w-full">
                <p className="mb-2">
                  Replace{" "}
                  <code className="px-1.5 py-0.5 rounded bg-black/30 text-cyan-200 text-sm">
                    your_api_key_here
                  </code>{" "}
                  with your API key. Example:
                </p>
                <pre className="rounded-xl bg-black/40 border border-white/10 p-3 text-xs text-cyan-100 whitespace-pre-wrap break-words">
                  <code>{`NEXT_PUBLIC_API_BASE=http://api.weatherapi.com/v1
NEXT_PUBLIC_API_KEY=xxxxxxxxxxxxxxxx`}</code>
                </pre>
              </div>
            </li>
          </ol>

          <div className="rounded-2xl bg-cyan-400/10 border border-cyan-300/30 p-4 mb-4">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              🔑 Just want to try it?
            </h3>
            <p className="text-sm text-white/90 mb-2">
              You can use this demo API key instead of creating your own:
            </p>
            <pre className="rounded-xl bg-black/40 border border-white/10 p-3 text-xs text-cyan-100 whitespace-pre-wrap break-words">
              <code>{`NEXT_PUBLIC_API_KEY=7761ab46e61e45ceb23164544253108`}</code>
            </pre>
          </div>

          <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              ⚠️ Important Notes
            </h3>
            <ul className="space-y-2 text-sm text-white/90 list-disc list-inside">
              <li>
                Do not upload or push the{" "}
                <code className="px-1 py-0.5 rounded bg-black/30 text-cyan-200">
                  .env.local
                </code>{" "}
                file to GitHub.
              </li>
              <li>This file is not included in the Git repository by default.</li>
              <li>
                Each user must create their own{" "}
                <code className="px-1 py-0.5 rounded bg-black/30 text-cyan-200">
                  .env.local
                </code>{" "}
                file and use their own API key.
              </li>
              <li>
                Make sure your{" "}
                <code className="px-1 py-0.5 rounded bg-black/30 text-cyan-200">
                  .env.local
                </code>{" "}
                file is properly configured before running the project.
              </li>
            </ul>
          </div>
        </div>
      </WelcomeModal>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="text-4xl md:text-6xl font-extrabold text-white text-center mb-10 drop-shadow-lg"
      >
        <CloudSunIcon width={50} height={50} />
        Welcome to Your Weather Universe
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
