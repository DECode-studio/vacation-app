import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const WellnessSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.25 });

  const highlights = [
    {
      title: "Riverside Spa Rituals",
      description: "Immersive hydrotherapy, contrast baths, and intuitive treatments facing the waterfall.",
      image: "https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress",
    },
    {
      title: "Sound Healing Sanctuary",
      description: "Daily vibrational journeys inside the bamboo dome to harmonise body and mind.",
      image: "https://images.prismic.io/ulaman/ZiR1p_Pdc1huKqBs_sound-healing-bali.jpg?auto=format,compress",
    },
    {
      title: "Yoga In The Canopy",
      description: "Private Hatha, Yin, or Fly High sessions within a floating shala overlooking the jungle.",
      image: "https://images.prismic.io/ulaman/Zlas5KWtHYXtT4Cm_yoga-in-bali.jpg?auto=format,compress",
    },
  ];

  return (
    <section
      id="spa"
      ref={ref}
      className={cn("relative bg-brand-cream py-20 sm:py-24 lg:py-28 reveal-element", isVisible && "is-visible")}
    >
      <span id="retreats" className="pointer-events-none absolute -top-24 block h-0" aria-hidden="true" />
      <div className="app-container grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-start">
        <article
          className={cn(
            "space-y-8 text-brand-dark reveal-child",
            isVisible && "is-visible",
          )}
          style={{ transitionDelay: isVisible ? "120ms" : undefined }}
        >
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.32em] text-brand-dark/65">Wellness &amp; Retreats</p>
            <h2 className="font-heading text-3xl uppercase tracking-[0.3em] leading-tight text-brand-dark sm:text-4xl md:text-[2.7rem]">
              Discover your path to restoration and inner growth.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-brand-dark/80 sm:text-lg font-light tracking-[0.015em]">
            Our holistic approach honours body and mind equally. Guided practitioners curate rituals tailored to your
            intention—whether you seek release, renewal, or a profound energetic reset.
          </p>
          <p className="text-base leading-relaxed text-brand-dark/75 sm:text-lg font-light tracking-[0.015em]">
            Retreat programs blend yoga, meditation, plant-based nourishment, and immersive cultural experiences. From
            intimate ceremonies to multi-day journeys, each moment is crafted to reconnect you with the elements.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-brand-dark/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-brand-dark/70">
              Balance
            </span>
            <span className="rounded-full border border-brand-dark/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-brand-dark/70">
              Renewal
            </span>
            <span className="rounded-full border border-brand-dark/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-brand-dark/70">
              Healing
            </span>
          </div>
          <Button className="inline-flex items-center gap-3 rounded-full border border-brand-dark/20 bg-brand-dark px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-cream hover:bg-brand">
            Explore Retreats
            <ChevronRight className="size-4" />
          </Button>
        </article>

        <div className="grid gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "group relative grid gap-6 overflow-hidden rounded-[2rem] border border-brand-dark/10 bg-white/80 p-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_40px_90px_-60px_rgba(52,62,53,0.5)] sm:grid-cols-[0.75fr_1fr]",
                "reveal-child",
                isVisible && "is-visible",
              )}
              style={{ transitionDelay: isVisible ? `${index * 120 + 200}ms` : undefined }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image
                  fill
                  src={item.image}
                  alt={item.title}
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <div className="flex flex-col justify-center gap-4 text-brand-dark">
                <h3 className="font-heading text-2xl uppercase tracking-[0.26em] text-brand-dark">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-dark/75 font-light tracking-[0.01em]">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-dark/65">
                  Learn More
                  <ChevronRight className="size-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;
