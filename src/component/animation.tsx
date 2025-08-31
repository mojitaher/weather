"use client";
import Lottie from "lottie-react";
import Sunny from "@/animation/sunny.json";
import Cloudy from "@/animation/cloudy.json";
import Snow from "@/animation/Snowing.json";
import Rain from "@/animation/rain.json";
import Thunder from "@/animation/Weerplaza.json";
import Deafult from "@/animation/deafult.json";
type LottieJSON = typeof Sunny;

export default function WeatherAnimation({ code }: { code: number }) {
  const weatherIcons: Record<number, LottieJSON> = {
    1000: Sunny,
    1003: Cloudy,
    1006: Cloudy,
    1009: Cloudy,
    1063: Rain,
    1180: Rain,
    1183: Rain,
    1186: Rain,
    1189: Rain,
    1192: Rain,
    1195: Rain,
    1114: Snow,
    1117: Snow,
    1210: Snow,
    1213: Snow,
    1216: Snow,
    1219: Snow,
    1222: Snow,
    1225: Snow,
    1273: Thunder,
    1276: Thunder,
    1279: Thunder,
    1282: Thunder,
  };

  const animationData = weatherIcons[code] || Deafult;
  return <Lottie animationData={animationData} loop />;
}
