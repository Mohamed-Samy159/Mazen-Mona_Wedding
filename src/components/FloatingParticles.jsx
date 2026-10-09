import { motion } from "framer-motion";

const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${(i * 47) % 100}%`,
  top: `${(i * 29) % 100}%`,
  size: i % 3 === 0 ? 3 : 2,
  delay: (i % 8) * 0.6
}));

export default function FloatingParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden opacity-60">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gold/70 blur-[1px]"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [-10, 20, -10], x: [-4, 5, -4], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 5 + (p.id % 4), repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}