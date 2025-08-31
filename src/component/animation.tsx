"use client";
import Lottie from "lottie-react";
import type { AnimationData } from "lottie-react";

import Sunny from "@/animation/sunny.json";
import Cloudy from "@/animation/cloudy.json";
import Snow from "@/animation/Snowing.json";
import Rain from "@/animation/rain.json";
import Thunder from "@/animation/Weerplaza.json";
import Deafult from "@/animation/deafult.json";

interface WeatherAnimationProps {
  code: number;
}

export default function WeatherAnimation({ code }: WeatherAnimationProps) {
  const weatherIcons: Record<number, AnimationData> = {
    // آفتابی
    1000: Sunny,
    // ابری
    1003: Cloudy,
    1006: Cloudy,
    1009: Cloudy,
    // باران
    1063: Rain,
    1180: Rain,
    1183: Rain,
    1186: Rain,
    1189: Rain,
    1192: Rain,
    1195: Rain,
    // برف
    1114: Snow,
    1117: Snow,
    1210: Snow,
    1213: Snow,
    1216: Snow,
    1219: Snow,
    1222: Snow,
    1225: Snow,
    // رعد و برق
    1273: Thunder,
    1276: Thunder,
    1279: Thunder,
    1282: Thunder,
  };

  const animationData = weatherIcons[code] || Deafult;

  return <Lottie animationData={animationData} loop />;
}
