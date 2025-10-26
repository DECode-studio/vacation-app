import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navGroups = [
    {
      heading: "Stay",
      links: [
        { label: "Villas", href: "#villas" },
        { label: "Retreats", href: "#retreats" },
        { label: "Spa", href: "#spa" },
        { label: "Dining", href: "#dine" },
      ],
    },
    {
      heading: "Discover",
      links: [
        { label: "Experiences", href: "#experiences" },
        { label: "Location", href: "#location" },
        { label: "Events", href: "#retreats" },
        { label: "Gallery", href: "#villas" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "Press", href: "#" },
        { label: "Gift Cards", href: "#" },
        { label: "Careers", href: "#" },
        { label: "FAQs", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-brand-dark text-brand-cream">
      <div className="app-container space-y-16 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-heading text-3xl sm:text-4xl">Ulaman Eco Luxury Resort</h3>
              <p className="text-sm leading-relaxed text-brand-cream/80 sm:text-base">
                A regenerative sanctuary in Tabanan, Bali where bamboo architecture, mindful rituals, and living landscapes
                come together for transformative stays.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Button className="rounded-full border border-brand-cream/30 bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-cream hover:bg-brand-light hover:text-brand-dark">
                Book Your Stay
              </Button>
              <div className="flex items-center gap-4 text-brand-cream/70">
                <a
                  href="https://instagram.com/ulamanbali"
                  aria-label="Instagram"
                  className="flex size-10 items-center justify-center rounded-full border border-brand-cream/30 transition hover:bg-brand-cream/15"
                >
                  <Instagram className="size-5" />
                </a>
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="flex size-10 items-center justify-center rounded-full border border-brand-cream/30 transition hover:bg-brand-cream/15"
                >
                  <Facebook className="size-5" />
                </a>
                <a
                  href="https://youtube.com"
                  aria-label="YouTube"
                  className="flex size-10 items-center justify-center rounded-full border border-brand-cream/30 transition hover:bg-brand-cream/15"
                >
                  <Youtube className="size-5" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.24em] text-brand-cream/70">
              <span className="inline-flex items-center gap-3">
                <MapPin className="size-4" />
                Jalan Raya Babakan Canggu No. 31, Tabanan, Bali
              </span>
              <a className="inline-flex items-center gap-3 hover:text-brand-cream" href="tel:+623619067108">
                <Phone className="size-4" />
                +62 361 906 7108
              </a>
              <a className="inline-flex items-center gap-3 hover:text-brand-cream" href="mailto:hello@ulamanbali.com">
                <Mail className="size-4" />
                hello@ulamanbali.com
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {navGroups.map((group) => (
              <div key={group.heading} className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-cream/60">
                  {group.heading}
                </h4>
                <ul className="space-y-3 text-sm text-brand-cream/75">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link className="hover:text-brand-cream" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-brand-cream/10 pt-10">
          <div className="flex flex-col gap-6 text-sm text-brand-cream/60 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Ulaman Eco Luxury Resort. All rights reserved.</p>
            <div className="flex flex-wrap gap-6 uppercase tracking-[0.26em]">
              <Link href="#" className="hover:text-brand-cream">
                Terms
              </Link>
              <Link href="#" className="hover:text-brand-cream">
                Privacy
              </Link>
              <Link
                href="https://porto-ku.excitech.id/user?id=nur.wahid.azhar"
                className="hover:text-brand-cream"
              >
                Made with ❤︎ by Nur Wahid Azhar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
