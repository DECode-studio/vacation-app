import Navbar from "@/components/Navbar";
import About from "@/components/About";
import DiningSection from "@/components/DiningSection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import Villas from "@/components/Villas";
import WellnessSection from "@/components/WellnessSection";
import Footer from "@/components/Footer";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Villas />
      <ExperienceSection />
      <WellnessSection />
      <DiningSection />
      <LocationSection />
      <Footer />
    </div>
  );
}
