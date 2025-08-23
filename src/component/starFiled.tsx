"use client";
import { useState, useEffect } from "react";

export default function StarField() {
  const [stars, setStars] = useState<{ top: number; left: number }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 20 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <>
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: "3px",
            height: "3px",
            top: `${s.top}%`,
            left: `${s.left}%`,
          }}
        />
      ))}
    </>
  );
}
