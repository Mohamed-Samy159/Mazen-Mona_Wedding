import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function AnimatedHeart({ size = 24 }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.12, 1], opacity: [0.85, 1, 0.85] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      className="inline-flex text-gold"
    >
      <Heart size={size} fill="currentColor" strokeWidth={1.2} />
    </motion.div>
  );
}