"use client";

import { CloudOff, Home, CloudAlert } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-sky-800 to-black text-white relative overflow-hidden">
      {/* افکت نور متحرک */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),transparent_70%)] animate-pulse"></div>

      {/* محتوای اصلی */}
      <div className="relative z-10 text-center space-y-6 p-6">
        <div className="flex justify-center animate-bounce">
          <CloudOff size={120} className="text-blue-300 drop-shadow-xl" />
        </div>

        <h1 className="text-8xl font-extrabold drop-shadow-lg">404</h1>
        <p className="text-2xl font-semibold opacity-90">
          Oops! Page not found
        </p>
        <p className="text-base opacity-70 flex gap-2 justify-center items-center">
          {`It seems like you've lost your weather`}
          <CloudAlert size={24} />
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500
             text-white text-lg font-semibold rounded-2xl shadow-2xl
             hover:scale-105 hover:shadow-3xl transition-transform duration-300
             ring-1 ring-white/20 backdrop-blur-md"
        >
          <Home size={24} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
