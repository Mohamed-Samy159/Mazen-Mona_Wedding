import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import weddingData from "../data/weddingData";

function getRemaining() {
  const target = new Date(weddingData.countdownTarget).getTime();
  const diff = Math.max(0, target - Date.now());
  return {
    total: diff,
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getRemaining());

  useEffect(() => {
    const timer = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds]
  ];

  return (
    <section id="countdown" className="section-shell bg-ivory">
      <div className="section-inner text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow">
          Counting Every Beautiful Moment
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title">
          Until Forever Begins
        </motion.h2>

        {time.total === 0 ? (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mt-12 font-serif text-3xl text-burgundy">
            The Celebration Has Begun ❤️
          </motion.div>
        ) : (
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {units.map(([label, value]) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card"
              >
                <motion.div key={value} initial={{ y: -8, opacity: 0.5 }} animate={{ y: 0, opacity: 1 }} className="font-serif text-4xl text-burgundy sm:text-5xl">
                  {String(value).padStart(2, "0")}
                </motion.div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-ink/50">{label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}