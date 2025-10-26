import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "To Canggu",
    value: "20 min",
    detail: "Vibrant coastline cafes & surf",
  },
  {
    label: "To Ubud",
    value: "35 min",
    detail: "Cultural heart of Bali",
  },
  {
    label: "To DPS Airport",
    value: "60 min",
    detail: "Private transfers available",
  },
];

const LocationSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section
      id="location"
      ref={ref}
      className={cn("bg-brand-light py-20 sm:py-24 lg:py-28 reveal-element", isVisible && "is-visible")}
    >
      <div className="app-container space-y-16">
        <div
          className={cn(
            "text-center text-brand-dark",
            "reveal-child",
            isVisible && "is-visible",
          )}
        >
          <p className="text-xs uppercase tracking-[0.32em] text-brand-dark/65">Location</p>
          <h2 className="mt-5 font-heading text-3xl uppercase tracking-[0.32em] leading-tight text-brand-dark sm:text-4xl md:text-[2.8rem]">
            Discover Ulaman from Above
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-brand-dark/75 sm:text-lg font-light tracking-[0.015em]">
            Our eco-sanctuary is wrapped by rice terraces, jungle canopies, and a flowing river. Tap into quiet seclusion
            while remaining connected to Bali&apos;s beloved neighbourhoods.
          </p>
        </div>

        <div
          className={cn(
            "relative isolate overflow-hidden rounded-[3rem] border border-brand-dark/10 bg-white shadow-[0_80px_140px_-120px_rgba(52,62,53,0.7)]",
            "reveal-child",
            isVisible && "is-visible",
          )}
          style={{ transitionDelay: isVisible ? "160ms" : undefined }}
        >
          <div className="absolute inset-0">
            <Image
              fill
              src="https://ulamanbali.com/_nuxt/ulaman.B-iYsIcw.jpg"
              alt="Map overview of Ulaman Eco Luxury Resort"
              className="object-cover"
            />
          </div>
          <div className="relative flex flex-col items-start gap-4 bg-gradient-to-tr from-brand-dark/80 via-brand-dark/10 to-transparent p-8 sm:p-10 lg:p-14">
            <span className="inline-flex items-center gap-3 rounded-full border border-brand-cream/40 bg-brand-dark/70 px-5 py-2 text-xs uppercase tracking-[0.3em] text-brand-cream">
              Tap on an icon
            </span>
            <p className="max-w-md text-sm leading-relaxed text-brand-cream/85 sm:text-base">
              Navigate our interactive estate map highlighting suites, spa sanctuaries, permaculture gardens, and mindful
              spaces hidden across the landscape.
            </p>
          </div>
        </div>

        <div className="grid gap-8 text-brand-dark sm:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={cn(
                "rounded-[2rem] border border-brand-dark/10 bg-white/80 p-8 text-center",
                "reveal-child",
                isVisible && "is-visible",
              )}
              style={{ transitionDelay: isVisible ? `${index * 140 + 220}ms` : undefined }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-brand-dark/60 font-heading">{item.label}</span>
              <p className="mt-4 font-heading text-3xl uppercase tracking-[0.32em] text-brand-dark">{item.value}</p>
              <p className="mt-3 text-sm text-brand-dark/70 font-light tracking-[0.01em]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
