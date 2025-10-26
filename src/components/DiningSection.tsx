import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const DiningSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.25 });

  const highlights = [
    {
      image: "https://images.prismic.io/ulaman/ZoDNNB5LeNNTwp4J_earth.jpg?auto=format,compress",
      title: "Ulaman Salad",
      description: "Farm-to-table vibrancy harvested from our permaculture gardens.",
      label: "Plant-Based",
    },
    {
      image: "https://images.prismic.io/ulaman/ZpDtFx5LeNNTxF0v_Screenshot-2024-07-12-at-13.03.20.jpg?auto=format,compress",
      title: "Our Chef: Arik",
      description: "Chef Arik crafts nourishing menus inspired by indigenous botanicals.",
      label: "Culinary Artist",
    },
    {
      image: "https://images.prismic.io/ulaman/ZoTULB5LeNNTwvNW_ulaman.jpg?auto=format,compress",
      title: "E.A.R.T.H Restaurant",
      description: "Architectural masterpiece overlooking the canopy and cascading river.",
      label: "Earth Dining",
    },
  ];

  return (
    <section
      id="dine"
      ref={ref}
      className={cn("bg-brand-light py-20 sm:py-24 lg:py-28 reveal-element", isVisible && "is-visible")}
    >
      <div className="app-container">
        <div
          className={cn(
            "mx-auto max-w-3xl space-y-6 text-center text-brand-dark reveal-child",
            isVisible && "is-visible",
          )}
        >
          <p className="text-xs uppercase tracking-[0.32em] text-brand-dark/60">Dining</p>
          <h2 className="font-heading text-3xl uppercase tracking-[0.3em] leading-tight sm:text-4xl md:text-[2.8rem]">
            A world-class gastronomic journey where nature&apos;s finest ingredients meet culinary craftsmanship.
          </h2>
          <p className="text-base text-brand-dark/75 sm:text-lg font-light tracking-[0.015em]">
            Taste vibrant, plant-rich cuisine elevated by ancient fermentation techniques, medicinal herbs, and zero-waste
            philosophy.
          </p>
          <Button className="group inline-flex items-center gap-3 rounded-full border border-brand-dark/20 bg-brand-dark px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-cream hover:bg-brand">
            Visit The Website
            <ExternalLink className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "group relative aspect-[10/16] overflow-hidden rounded-[1.75rem] bg-brand-dark/5",
                "reveal-child",
                isVisible && "is-visible",
              )}
              style={{ transitionDelay: isVisible ? `${index * 140 + 160}ms` : undefined }}
            >
              <Image
                fill
                src={item.image}
                alt={item.title}
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/10 to-transparent opacity-80" />
              <div className="absolute inset-x-5 bottom-5 flex flex-col gap-2 text-left text-brand-cream transition duration-500 group-hover:-translate-y-1">
                <h3 className="font-heading text-2xl uppercase tracking-[0.26em]">{item.title}</h3>
                <p className="text-sm text-brand-cream/85 font-light tracking-[0.01em]">{item.description}</p>
              </div>
              <div className="absolute inset-x-0 top-5 flex justify-center">
                <span className="rounded-full bg-brand-dark/60 px-4 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-brand-cream backdrop-blur">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
