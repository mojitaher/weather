// CityInput.tsx
import { motion } from "framer-motion";
import { SearchIcon } from "lucide-react";

type InputType = {
  city: string;
  setCity: (city: string) => void;
};

export default function CityInput({ city, setCity }: InputType) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="w-full"
    >
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="
          w-full rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
          backdrop-blur-xl border border-white/30 text-white placeholder-white/60
          shadow-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none
          py-4 px-5 text-lg font-semibold transition-all duration-300
          hover:scale-105 hover:shadow-2xl
        "
      />
    </motion.div>
  );
}
//search button
type Props = {
  onClick: () => void;
};

export function SearchButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full py-2 bg-cyan-400/80 text-white font-bold text-lg
                 rounded-xl shadow-lg hover:shadow-2xl hover:bg-cyan-500
                 transition-all duration-200
                 backdrop-blur-lg border border-white/30 flex items-center justify-center gap-2 cursor-pointer"
    >
      <SearchIcon />
      Find Weather
    </button>
  );
}
