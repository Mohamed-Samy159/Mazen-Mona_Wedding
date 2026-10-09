import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin, Navigation } from "lucide-react";
import weddingData from "../data/weddingData";

const details = [
  [CalendarDays, "Date", weddingData.date],
  [Clock3, "Time", weddingData.time],
  [MapPin, "Venue", weddingData.venue],
  [Navigation, "Location", weddingData.location]
];

export default function WeddingDetails() {
  return (
    <section id="details" className="section-shell bg-[#f4eee5]">
      <div className="section-inner">
        <div className="text-center">
          <p className="eyebrow">Mark Your Calendar</p>
          <h2 className="section-title">The Wedding Details</h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {details.map(([Icon, label, value], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-gold/20 bg-ivory/70 p-7 text-center shadow-[0_15px_45px_rgba(53,25,31,0.06)]"
            >
              <Icon className="mx-auto mb-5 text-gold" size={25} strokeWidth={1.2} />
              <p className="text-[10px] uppercase tracking-[0.3em] text-ink/45">{label}</p>
              <p className="mt-3 font-serif text-lg leading-relaxed text-burgundy" dir={label === "Venue" || label === "Location" ? "rtl" : "ltr"}>{value}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <motion.a
            whileHover={{ y: -2 }}
            href={weddingData.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-burgundy px-7 py-4 text-xs uppercase tracking-[0.2em] text-champagne shadow-xl transition hover:bg-[#4a252e]"
          >
            <MapPin size={16} />
            Open Location
          </motion.a>
        </div>
      </div>
    </section>
  );
}