import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ChevronDown, Sparkles, Heart, Image } from "lucide-react";
import { useState } from "react";
import AnimatedHeart from "./AnimatedHeart";
import weddingData from "../data/weddingData";
export default function Hero() {
  const [opened, setOpened] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 150]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);
  const openInvitation = () => {
    setCelebrate(true);
    window.dispatchEvent(new Event("startWeddingMusic"));
    setTimeout(() => {
      setOpened(true);
    }, 900);
  };
  return (
    <section
      id="home"
      className="relative flex h-[140vh] items-center justify-center overflow-hidden bg-[#F7F1E3]"
    >
      {" "}
      {/* Background */}{" "}
      <motion.div style={{ y }} className="absolute inset-[-8%]">
        {" "}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(197,158,91,0.18),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(255,255,255,0.06),transparent_25%),linear-gradient(145deg,#160d10,#3b1d24_48%,#1b0d11)]" />{" "}
        <div className="absolute left-[8%] top-[20%] h-64 w-64 rounded-full bg-[#F7F1E3]/10 blur-3xl" />{" "}
        <div className="absolute bottom-[10%] right-[5%] h-80 w-80 rounded-full bg-rose-900/30 blur-3xl" />{" "}
      </motion.div>{" "}
      <div className="absolute inset-0 bg-black/10" /> {/* Opening Screen */}{" "}
      <AnimatePresence>
        {" "}
        {!opened && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-[#160d10]"
          >
            {" "}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,158,91,0.18),transparent_45%)] " />{" "}
            {/* Celebration */}{" "}
            {celebrate &&
              Array.from({ length: 18 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0.6],
                    x: (Math.random() - 0.5) * 500,
                    y: (Math.random() - 0.5) * 500,
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute text-gold/80 "
                >
                  {" "}
                  {index % 2 === 0 ? (
                    <Heart size={14} fill="currentColor" />
                  ) : (
                    <Sparkles size={16} />
                  )}{" "}
                </motion.div>
              ))}{" "}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, scale: celebrate ? 1.08 : 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 flex flex-col items-center px-6 text-center "
            >
              {" "}
              <motion.div
                animate={
                  celebrate
                    ? { scale: [1, 1.25, 1], rotate: [0, -8, 8, 0] }
                    : { y: [0, -8, 0] }
                }
                transition={{
                  duration: celebrate ? 0.8 : 2.5,
                  repeat: celebrate ? 0 : Infinity,
                }}
                className="mb-8 text-gold"
              >
                {" "}
                <Heart size={55} strokeWidth={1} fill="currentColor" />{" "}
              </motion.div>{" "}
              <p className="mb-3 text-[10px] uppercase  text-gold/80">
                {" "}
                A Celebration of Love{" "}
              </p>{" "}
              <h1 className="mb-5 font-serif text-4xl font-bold tracking-wide text-ivory sm:text-6xl">
                {" "}
                {weddingData.groom}
                {""}
                <span className="mx-3 text-gold">&amp;</span>{" "}
                {weddingData.bride}{" "}
              </h1>
              <p className="mb-10 font-serif text-lg italic text-champagne/70">
                {" "}
                Surrounded by Love, Joined by Forever{" "}
              </p>{" "}
              {!celebrate && (
                <motion.button
                  onClick={openInvitation}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 35px rgba(197,158,91,.25)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-full border border-gold/60 bg-gold/10 px-10 py-4 text-xs uppercase tracking-[0.3em] text-champagne backdrop-blur-md transition hover:bg-gold hover:text-burgundy"
                >
                  {" "}
                  Open{" "}
                </motion.button>
              )}{" "}
              {celebrate && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm uppercase tracking-[0.3em] text-gold"
                >
                  {" "}
                  With Love ❤️{" "}
                </motion.p>
              )}{" "}
            </motion.div>{" "}
          </motion.div>
        )}{" "}
      </AnimatePresence>{" "}
      {/* Hero Content */}{" "}
      {opened && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-30 mx-auto w-full max-w-5xl px-6 text-center"
        >
          {" "}
          <motion.div style={{ opacity }}>
            {" "}
            <div className="mb-6 flex items-center justify-center gap-3 text-gold/80">
              {" "}
              <Sparkles size={15} />{" "}
              <span className=" text-[10px]  uppercase tracking-[0.45em]">
                {" "}
                A Celebration of Love{" "}
              </span>{" "}
              <Sparkles size={15} />{" "}
            </div>{" "}
            <p className="mb-4 font-serif  text-sm italic tracking-[0.3em] text-champagne/80">
              {" "}
              Surrounded by Love, Joined by Forever{" "}
            </p>{" "}
            <div className="mb-4 flex items-center justify-center gap-3">
              <h1 className="font-serif text-5xl font-extrabold  text-ivory sm:text-7xl md:text-9xl">
                {" "}
                {weddingData.groom}
                <span className="mx-3 inline-block text-gold/80 sm:mx-6">
                  &amp;
                </span>{" "}
                {weddingData.bride}{" "}
              </h1>{" "}
            </div>{" "}
            <div className="my-7 flex justify-center">
              {" "}
              <AnimatedHeart size={30} />{" "}
            </div>{" "}
            <p className="mx-auto max-w-xl font-serif font-extrabold text-lg italic text-ivory/75 sm:text-xl">
              {" "}
              “A New Chapter, Written Together”{" "}
            </p>{" "}
            <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-5 text-xs uppercase tracking-[0.25em] text-champagne sm:gap-8">
              {" "}
              <span className="font-extrabold">
                {weddingData.dateShort}
              </span>{" "}
              <span className="h-px w-10 bg-gold/50 " />{" "}
              <span className="font-extrabold">{weddingData.time}</span>{" "}
            </div>{" "}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document
                  .getElementById("countdown")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-10 rounded-full border font-extrabold  border-gold/60 bg-gold/10 px-8 py-4 text-xs uppercase tracking-[0.22em] text-champagne backdrop-blur-md transition hover:bg-gold hover:text-burgundy"
            >
              {" "}
              Celebrate With Us{" "}
            </motion.button>{" "}
          </motion.div>{" "}
        </motion.div>
      )}{" "}
      {/* Scroll */}{" "}
      {opened && (
        <motion.button
          onClick={() =>
            document
              .getElementById("countdown")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="absolute bottom-7  left-1/2 z-30 -translate-x-1/2 text-ivory/50"
        >
          {" "}
          <ChevronDown size={28} strokeWidth={1}  />{" "}
        </motion.button>
      )}{" "}
    </section>
  );
}
