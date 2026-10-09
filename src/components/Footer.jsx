import AnimatedHeart from "./AnimatedHeart";
import weddingData from "../data/weddingData";

export default function Footer() {
  return (
    <footer className="bg-[#160d10] px-6 py-16 text-center text-ivory">
      <p className="font-serif text-2xl tracking-[0.18em] text-champagne">{weddingData.groom} &amp; {weddingData.bride}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.3em] text-ivory/45">{weddingData.dateShort}</p>
      <div className="mt-7 flex items-center justify-center gap-3 font-serif italic text-ivory/60">
        Forever starts here <AnimatedHeart size={15} />
      </div>
    </footer>
  );
}