import { motion } from "framer-motion";

const petals = Array.from({ length: 14 }, (_, i) => i);

export default function FlowerPetals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {petals.map((i) => (
        <motion.span
          key={i}
          className="absolute -top-7.5 h-3 w-2 rounded-[80%_20%_80%_20%] border border-gold/25 bg-champagne/30"
          style={{ left: `${(i * 71) % 100}%` }}
          animate={{ y: ["0vh", "115vh"], x: [0, i % 2 ? 55 : -45, i % 2 ? -20 : 30], rotate: [0, 180, 360] }}
          transition={{ duration: 12 + (i % 5), repeat: Infinity, delay: i * 1.2, ease: "linear" }}
        />
      ))}
    </div>
  );
}