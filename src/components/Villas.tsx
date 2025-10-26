import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const Villas = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  const villas = [
    {
      title: "Cocoon Jungle",
      description: "Indulge in an unparalleled blend of exotic elegance and cocooning comfort.",
      image: "https://images.prismic.io/ulaman/Zjeq0EMTzAJOCirD_hotel.jpg?auto=format,compress",
      href: "/rooms/cocoon-jungle",
    },
    {
      title: "Avatar Tree House",
      description: "Experience a sky villa with 180° panoramic views and handcrafted bamboo artistry.",
      image: "https://images.prismic.io/ulaman/Zpct2h5LeNNTxOAy_skyvilla.jpg?auto=format,compress",
      href: "/rooms/avatar-tree-house",
    },
    {
      title: "Bamboo Sky Pool",
      description: "Suspended luxury with a private plunge pool overlooking emerald jungle landscapes.",
      image: "https://images.prismic.io/ulaman/ZotMNx5LeNNTw4r1_ulaman.jpg?auto=format,compress",
      href: "/rooms/bamboo-sky-pool",
    },
    {
      title: "Ulin Poolside",
      description: "Ground-floor sanctuary with direct access to the infinity pool and lush gardens.",
      image: "https://images.prismic.io/ulaman/Zlfnx6WtHYXtT6xP_ecoresort-bali.jpg?auto=format,compress",
      href: "/rooms/ulin-poolside",
    },
  ];

  return (
    <section
      id="villas"
      ref={ref}
      className={cn("bg-brand-light py-20 sm:py-24 lg:py-28 reveal-element", isVisible && "is-visible")}
    >
      <div className="app-container">
        <div className={cn("flex flex-col gap-8 text-center text-brand-dark reveal-child", isVisible && "is-visible")}>
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.32em] text-brand-dark/70">Stay with us</p>
            <h2 className="font-heading text-3xl uppercase tracking-[0.3em] sm:text-4xl md:text-[2.9rem] leading-tight text-brand-dark">
              Villas handcrafted with nature&apos;s rhythm in mind.
            </h2>
            <p className="text-base text-brand-dark/80 sm:text-lg font-light tracking-[0.015em]">
              From treetop sanctuaries to riverside cocoons, each accommodation embraces bamboo innovation and earth-first
              design for extraordinary comfort.
            </p>
          </div>
        </div>

        <div className="relative mt-14">
          <div className="no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto pb-6">
            {villas.map((villa, index) => (
              <article
                key={villa.title}
                className={cn(
                  "group relative flex w-80 shrink-0 snap-start flex-col gap-5 rounded-[2rem] bg-white/70 p-6 shadow-[0_30px_60px_-40px_rgba(52,62,53,0.35)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_60px_120px_-60px_rgba(52,62,53,0.45)] sm:w-[24rem] lg:w-[26rem]",
                  "reveal-child",
                  isVisible && "is-visible",
                )}
                style={{ transitionDelay: isVisible ? `${index * 120 + 120}ms` : undefined }}
              >
                <div className="relative aspect-[10/14] overflow-hidden rounded-[1.75rem]">
                  <Image
                    fill
                    src={villa.image}
                    alt={villa.title}
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="size-2 rounded-full bg-brand-cream" />
                      <span className="size-2 rounded-full bg-brand-cream/40" />
                      <span className="size-2 rounded-full bg-brand-cream/40" />
                    </div>
                    <span className="rounded-full bg-brand-dark/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-brand-cream backdrop-blur-md">
                      Bamboo Crafted
                    </span>
                  </div>
                </div>

                <header className="space-y-3 text-left">
                  <h3 className="font-heading text-2xl uppercase tracking-[0.24em] text-brand-dark">{villa.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-dark/75 font-light tracking-[0.01em]">{villa.description}</p>
                </header>

                <div className="mt-auto">
                  <Link
                    href={villa.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-dark/80 transition hover:text-brand"
                  >
                    Discover
                    <ChevronRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Button className="inline-flex items-center gap-3 rounded-full border border-brand-dark/20 bg-brand-dark px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-cream hover:bg-brand">
            Explore All Villas
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Villas;
