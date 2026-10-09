import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import WeddingDetails from "./components/WeddingDetails";
import StoryTimeline from "./components/StoryTimeline";
import RSVPForm from "./components/RSVPForm";
import MusicToggle from "./components/MusicToggle";
import FloatingParticles from "./components/FloatingParticles";
import FlowerPetals from "./components/FlowerPetals";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen  overflow-hidden bg-ivory text-ink">
      <Navbar />
      <FloatingParticles />
      <FlowerPetals />
      <main>
        <Hero />
        <Countdown />
        <WeddingDetails />
        <StoryTimeline />
        <RSVPForm />
      </main>
      <Footer />
      <MusicToggle />
    </div>
  );
}
