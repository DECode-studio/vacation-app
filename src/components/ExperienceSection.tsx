import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const [isBeyondScreen, setIsBeyondScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;
      setIsBeyondScreen(scrollY > screenHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experiences"
      ref={ref}
      className={cn("relative overflow-hidden bg-brand-dark py-24 sm:py-28 lg:py-32 reveal-element", isVisible && "is-visible")}
    >
      <div className="absolute inset-0">
        <Image
          fill
          src="https://images.prismic.io/ulaman/ZpZPRh5LeNNTxMAj_ulaman.jpg?auto=format,compress"
          alt="Sunset by the infinity pool at Ulaman"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
      </div>
      <div
        className={cn(
          "app-container relative z-10 flex flex-col items-center gap-10 text-center",
          "reveal-child",
          isVisible && "is-visible",
        )}
        style={{
          transitionDelay: isVisible ? "120ms" : undefined,
          // color: isBeyondScreen ? "hsl(var(--brand-dark))" : "white",
        }}
      >
        <h2 className={cn(
          "max-w-3xl font-heading text-3xl uppercase tracking-[0.32em] leading-tight sm:text-4xl md:text-[2.9rem]",
          isBeyondScreen ? "text-brand-dark" : "text-white",
        )}>
          Experience a blend of nature, comfort and luxury like never before.
        </h2>
        <p className="max-w-2xl text-base text-brand-cream/80 sm:text-lg font-light tracking-[0.015em]">
          Embrace slow living in an eco-paradise where every detail honours the land. Let curated rituals, bespoke
          adventures, and soulful spaces guide you toward deep rejuvenation.
        </p>
        <Button className="rounded-full border border-brand-cream/40 bg-brand px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-cream hover:bg-brand-light hover:text-brand-dark">
          Book Your Stay
        </Button>
      </div>
    </section>
  );
};

export default ExperienceSection;
