import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const story = [
  ["The Beginning", "And so, a beautiful story quietly began."],

  ["The First Meeting", "Two souls met, and the rest became our story."],

  ["The First Date", "A moment to remember, a feeling to cherish forever."],

  ["The Proposal", "A promise was made, and forever found its beginning."],

  ["The Wedding Day", "Today, two hearts become one beautiful forever."],
];

export default function StoryTimeline() {
  return (
    <section id="story" className="section-shell bg-burgundy text-ivory">
      <div className="section-inner">
        <div className="text-center">
          <p className="eyebrow text-gold/80">A Journey Written in Love</p>
          <h2 className="section-title text-ivory">Our Story</h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gold/25 md:left-1/2 md:-translate-x-1/2" />
          {story.map(([title, text], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`relative mb-14 flex items-start md:mb-20 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            >
              <div className="absolute left-4 top-1 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-gold/50 bg-burgundy md:left-1/2">
                <Heart
                  size={13}
                  className="text-[#e6d18b]"
                  fill="currentColor"
                />
              </div>
              <div className="ml-10 w-[calc(100%-2rem)] md:ml-0 md:w-[43%]">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold/70">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-champagne">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ivory/60">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
