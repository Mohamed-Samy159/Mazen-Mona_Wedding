import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  ["Home", "home"],
  ["Countdown", "countdown"],
  ["Details", "details"],
  ["Our Story", "story"],
  ["RSVP", "rsvp"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: scrolled ? 0 : -8, opacity: scrolled ? 1 : 0.92 }}
      className={`fixed left-1/2 top-5  z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-full border border-gold/20 px-4 py-3 transition-all ${
        scrolled
          ? "bg-burgundy/85 shadow-2xl backdrop-blur-xl  "
          : "bg-black/10 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between">
        <button
          onClick={() => go("home")}
          className="font-serif text-lg tracking-[0.2em] text-champagne"
        >
          M <span className="text-gold">♥</span> M
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="text-xs uppercase tracking-[0.18em] cursor-pointer text-ivory/75 transition hover:text-gold"
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full p-2 text-champagne md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-3 px-3 pb-2 pt-4">
              {links.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="py-2 text-left text-sm uppercase tracking-[0.15em] text-ivory/80"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
