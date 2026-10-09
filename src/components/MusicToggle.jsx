import { useEffect, useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
export default function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const audio = new Audio("/music/weddingsong.mp3");
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;
    const startMusic = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.error("Music Error:", error);
      }
    };
    window.addEventListener("startWeddingMusic", startMusic);
    return () => {
      window.removeEventListener("startWeddingMusic", startMusic);
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;
    };
  }, []);
  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.error("Audio Error:", error);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };
  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.94 }}
      animate={
        playing
          ? {
              boxShadow: [
                "0 0 0 0 rgba(197,158,91,.15)",
                "0 0 0 10px rgba(197,158,91,0)",
                "0 0 0 0 rgba(197,158,91,0)",
              ],
            }
          : {}
      }
      transition={{ duration: 1.8, repeat: playing ? Infinity : 0 }}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-burgundy/80 text-champagne shadow-xl backdrop-blur-xl"
      aria-label={playing ? "Turn music off" : "Turn music on"}
    >
      {" "}
      {playing ? <Music2 size={18} /> : <VolumeX size={18} />}{" "}
    </motion.button>
  );
}
  