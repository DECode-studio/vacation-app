import { useCallback } from "react";
import { ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_VIDEO_URL =
  "https://www.youtube.com/embed/pqkVOxt7Tk4?autoplay=1&mute=1&controls=0&loop=1&playlist=pqkVOxt7Tk4&playsinline=1&modestbranding=1&rel=0&showinfo=0";

const Hero = () => {
  const scrollToContent = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <iframe
          title="Ulaman Resort Story"
          src={HERO_VIDEO_URL}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[220%] -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/50 to-brand-dark/85" />
      </div>

      <div className="relative z-10 flex flex-1 items-center">
        <div className="app-container flex flex-col gap-10 pb-32 pt-32 sm:pt-48 lg:pb-44">
          <div className="max-w-2xl text-brand-cream">
            <span className="inline-flex items-center rounded-full border border-brand-cream/30 bg-brand-dark/40 px-4 py-1 text-xs uppercase tracking-[0.35em] backdrop-blur-sm">
              Award-Winning Eco Luxury Resort
            </span>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="max-w-4xl font-heading text-4xl uppercase tracking-[0.36em] leading-none text-brand-cream sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Experience sustainable luxury amidst Bali&apos;s lush jungle.
            </h1>
            <p className="max-w-2xl text-base text-brand-cream/85 sm:text-lg md:text-xl tracking-[0.01em]">
              Ulaman is a secluded eco sanctuary designed for seekers of balance,
              harmony, and transformative wellness journeys within nature.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-brand-cream">
            <Button className="group inline-flex items-center gap-3 rounded-full border border-brand-cream/40 bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-cream transition hover:bg-brand-dark">
              Book Your Stay
              <ChevronDown className="size-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <a
              href="https://www.youtube.com/watch?v=pqkVOxt7Tk4"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-brand-cream/40 bg-brand-dark/40 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-cream transition hover:bg-brand-dark/70"
            >
              <span className="flex size-8 items-center justify-center rounded-full border border-brand-cream/40 bg-brand-cream/10">
                <Play className="size-3.5" />
              </span>
              Watch Resort Story
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        aria-label="Scroll for more"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-cream/80 transition hover:text-brand-cream"
      >
        <ChevronDown className="size-10 animate-bounce" strokeWidth={1.25} />
      </button>
    </section>
  );
};

export default Hero;
