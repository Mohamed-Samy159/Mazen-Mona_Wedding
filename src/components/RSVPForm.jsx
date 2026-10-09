import { useState } from "react";
import { Check, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", guests: 1, attendance: "accept", message: "" });

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="section-shell bg-[#f4eee5]">
      <div className="section-inner max-w-3xl text-center">
        <p className="eyebrow">We Would Love To Have You</p>
        <h2 className="section-title">Will You Join Us?</h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink/60">
          Your presence would make our special day even more beautiful.
        </p>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={submit}
              className="mt-12 rounded-4xl border border-gold/20 bg-ivory/80 p-6 text-left shadow-[0_20px_70px_rgba(53,25,31,0.08)] sm:p-10"
            >
              <label className="field-label">Guest Name</label>
              <input required value={form.name} onChange={(e) => update("name", e.target.value)} className="field" placeholder="Your name" />

              <label className="field-label mt-6">Number of Guests</label>
              <input required min="1" max="10" type="number" value={form.guests} onChange={(e) => update("guests", e.target.value)} className="field" />

              <label className="field-label mt-6">Attendance</label>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["accept", "Joyfully Accept"],
                  ["decline", "Regretfully Decline"]
                ].map(([value, label]) => (
                  <button
                    type="button"
                    key={value}
                    onClick={() => update("attendance", value)}
                    className={`rounded-2xl border p-4 text-sm transition ${
                      form.attendance === value ? "border-gold bg-gold/10 text-burgundy" : "border-gold/15 text-ink/55 hover:border-gold/40"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <label className="field-label mt-6">Optional Message</label>
              <textarea value={form.message} onChange={(e) => update("message", e.target.value)} rows="4" className="field resize-none" placeholder="Leave a little note for the couple..." />

              <button type="submit" className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-burgundy px-6 py-4 text-xs uppercase tracking-[0.2em] text-champagne transition hover:bg-[#4a252e]">
                Confirm Attendance <Heart size={15} fill="currentColor" />
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 rounded-4xl border border-gold/25 bg-burgundy p-10 text-center shadow-2xl sm:p-16"
            >
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-gold">
                {form.attendance === "accept" ? <Heart fill="currentColor" /> : <Check />}
              </motion.div>
              <h3 className="mt-7 font-serif text-3xl text-champagne">Thank You, {form.name}!</h3>
              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-ivory/65">
                We can't wait to celebrate this special day with you!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}