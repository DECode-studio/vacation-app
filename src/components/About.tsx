import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const About = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section ref={ref} className={cn("bg-brand-light py-20 sm:py-24 lg:py-28 reveal-element", isVisible && "is-visible")}>
      <div className="app-container space-y-20">
        <div className={cn("mx-auto max-w-4xl text-center", "group", "reveal-child", isVisible && "is-visible")}>
          <p className="text-xs uppercase tracking-[0.32em] text-brand-dark/70">
            Our sanctuary
          </p>
          <h2 className="mt-5 font-heading text-3xl uppercase tracking-[0.32em] leading-tight text-brand-dark sm:text-4xl md:text-[2.8rem]">
            Nestled among the rice fields and coconut trees of Tabanan, Ulaman is only 20 minutes away from the vibrant
            town of Canggu.
          </h2>
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div
            className={cn(
              "relative isolate aspect-[10/13] overflow-hidden rounded-[2.5rem] reveal-child",
              isVisible && "is-visible",
            )}
            style={{ transitionDelay: isVisible ? "120ms" : undefined }}
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-brand-dark/50 to-transparent" />
            <Image
              fill
              src="https://images.prismic.io/ulaman/Zpcs2R5LeNNTxOAv_ulaman.jpg?auto=format,compress"
              alt="Aerial photo of Ulaman Eco Luxury Retreat"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 z-20 inline-flex items-center gap-2 rounded-full border border-brand-cream/40 bg-brand-dark/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand-cream">
              <span className="size-2 rounded-full bg-brand-cream" />
              Riverside Jungle Oasis
            </div>
          </div>

          <article
            className={cn(
              "space-y-10 text-brand-dark/90 reveal-child",
              isVisible && "is-visible",
            )}
            style={{ transitionDelay: isVisible ? "240ms" : undefined }}
          >
            <div className="space-y-6">
              <h3 className="font-heading text-3xl uppercase tracking-[0.28em] leading-tight text-brand-dark sm:text-4xl">
                An award-winning eco-luxury retreat designed for renewal.
              </h3>
              <p className="text-base leading-relaxed text-brand-dark/85 sm:text-lg font-light tracking-[0.015em]">
                We believe nature and luxury can coexist. Immerse yourself in immersive bamboo architecture, holistic
                wellness, and Balinese hospitality while treading lightly on the planet. Every stay is tailored to your
                rhythm, balancing restorative stillness with curated adventures.
              </p>
              <p className="text-base leading-relaxed text-brand-dark/75 sm:text-lg font-light tracking-[0.015em]">
                Breathe deeper, slow down, and reconnect. From plant-forward dining to transformational spa rituals, Ulaman
                harmonises ancient wisdom and contemporary comfort so you can leave feeling grounded and inspired.
              </p>
            </div>
            <Button className="inline-flex items-center gap-3 rounded-full border border-brand-dark/20 bg-brand-dark px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-cream hover:bg-brand">
              Discover More
              <ChevronRight className="size-4" />
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
