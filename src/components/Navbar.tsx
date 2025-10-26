'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient] = useState(() => typeof window !== "undefined");
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMenuOpen]);

  const navLinks = [
    {
      name: "Villas",
      href: "#villas",
      description: "Sky villas, riverside cocoons, and bamboo sanctuaries",
    },
    {
      name: "Spa",
      href: "#spa",
      description: "Riverside rituals, contrast hydrotherapy, sound healing",
    },
    {
      name: "Dine",
      href: "#dine",
      description: "Plant-led cuisine, regenerative mixology, E.A.R.T.H restaurant",
    },
    {
      name: "Retreats",
      href: "#retreats",
      description: "Transformative programs curated for balance and renewal",
    },
  ];

  const contactLinks = [
    {
      name: "+62 361 906 7108",
      href: "tel:+623619067108",
      icon: Phone,
    },
    {
      name: "hello@ulamanbali.com",
      href: "mailto:hello@ulamanbali.com",
      icon: Mail,
    },
  ];

  const menuTextClass = isBeyondScreen
    ? "text-brand-dark"
    : "text-brand-cream [text-shadow:0_4px_12px_rgba(0,0,0,0.55)]";
  const contactTone = isBeyondScreen ? "text-brand-dark/80" : "text-brand-cream/85";

  const menuOverlay =
    isClient && isMenuOpen
      ? createPortal(
        <div
          className="fixed inset-0 z-80 overflow-hidden text-brand-cream bg-white"
        >
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.04), rgba(18,25,20,0.92))" }}
          />
          <div className="relative h-full overflow-y-auto">
            <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col gap-12 px-5 py-20 lg:flex-row lg:px-8 xl:px-10">
              <div className="flex-1 space-y-12">
                <div className="flex items-center justify-between font-heading uppercase tracking-[0.26em]">
                  <p className="text-xs uppercase tracking-[0.32em] text-brand-cream/70">Menu</p>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 rounded-full border border-brand-cream/30 px-4 py-2 text-xs uppercase tracking-[0.28em] text-brand-cream transition hover:bg-brand-cream/10"
                  >
                    Close
                    <X className="size-4" />
                  </button>
                </div>
                <ul className="space-y-8 font-heading uppercase tracking-[0.3em]">
                  {navLinks.map((link) => (
                    <li key={link.name} className="border-b border-brand-cream/15 pb-6">
                      <Link
                        href={link.href}
                        className="group flex flex-col gap-3 text-left"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="inline-flex items-center gap-3 text-sm text-brand-cream/60">
                          <span className="size-2 rounded-full bg-brand-cream/60 transition group-hover:bg-brand" />
                          {link.name}
                        </span>
                        <span className="font-heading text-3xl font-normal uppercase tracking-[0.32em] text-brand-cream/90 leading-tight">
                          {link.description}
                        </span>
                        <span className="inline-flex items-center gap-2 text-xs tracking-[0.24em] text-brand-cream/60 transition group-hover:text-brand">
                          Discover
                          <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-6 text-xs uppercase tracking-[0.28em] text-brand-cream/70">
                  <span className="text-sm text-brand-cream">Stay Connected</span>
                  {contactLinks.map(({ name, href }) => (
                    <a key={name} href={href} className="hover:text-brand">
                      {name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <div className="rounded-[2.5rem] border border-brand-cream/20 bg-brand-dark/90 p-8 shadow-[0_50px_140px_-80px_rgba(0,0,0,0.75)]">
                  <h3 className="font-heading text-2xl uppercase tracking-[0.38em] text-brand-cream">A regenerative sanctuary in Tabanan</h3>
                  <p className="mt-4 text-sm leading-relaxed text-brand-cream/80 font-light tracking-[0.02em] normal-case">
                    Explore villas crafted from bamboo, riverside wellness rituals, and plant-forward dining guided by the
                    rhythms of nature. Our reservation team curates stays tailored to your intention.
                  </p>
                  <Button className="mt-6 inline-flex items-center gap-3 rounded-full border border-brand-cream/30 bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-cream hover:bg-brand-light hover:text-brand-dark">
                    Book Your Stay
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
                <div className="grid gap-4 text-sm uppercase tracking-[0.26em] text-brand-cream/65 sm:grid-cols-2">
                  <div>
                    <p className="text-brand-cream/50">Location</p>
                    <p className="mt-2 leading-relaxed text-brand-cream">
                      Jalan Raya Babakan Canggu No. 31 <br /> Tabanan, Bali
                    </p>
                  </div>
                  <div>
                    <p className="text-brand-cream/50">Concierge</p>
                    <p className="mt-2 leading-relaxed text-brand-cream">
                      Daily 08:00 – 22:00 WITA <br /> WhatsApp &amp; Email Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )
      : null;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled && "bg-brand-light/85 backdrop-blur-xl shadow-[0_25px_60px_-25px_rgba(40,50,38,0.35)]",
        !isScrolled && "bg-linear-to-b from-brand-dark/65 via-brand-dark/45 to-transparent text-white",
      )}
    >
      <nav className="app-container flex items-center justify-between py-4 lg:py-6">
        <div className={cn("flex flex-1 items-center gap-6", menuTextClass)}>
          <button
            aria-label="Toggle menu"
            className="rounded-full border border-current/40 p-3 transition-colors hover:bg-current/10 lg:p-3.5"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <ul
            className="hidden items-center gap-6 font-heading text-sm tracking-[0.32em] uppercase lg:flex"
            style={{
              color: isBeyondScreen
                ? "black"
                : "white",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="ui-underline-anim hover:text-brand"
                  style={{
                    color: isBeyondScreen
                      ? "black"
                      : "white",
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Link href="#top" className="flex flex-1 justify-center">
          <span className="sr-only">Back to top</span>
          <Image
            src="https://ulaman.cdn.prismic.io/ulaman/aAMlsuvxEdbNPPas_logo-new.svg"
            width={140}
            height={52}
            alt="Ulaman Eco Luxury Resort"
            priority
            className={cn(
              "h-12 w-auto lg:h-16 transition-opacity duration-500",
              isScrolled ? "opacity-90" : "opacity-95",
            )}
          />
        </Link>

        <div
          className={cn(
            "hidden flex-1 flex-col items-end gap-2 text-right text-xs uppercase tracking-[0.18em] lg:flex",
            menuTextClass,
          )}
        >
          <div className={cn("flex items-center gap-4", contactTone)}>
            {contactLinks.map(({ name, href, icon: Icon }) => (
              <a key={name} href={href} className="flex items-center gap-2 hover:text-brand">
                <Icon className="size-3.5" />
                <span>{name}</span>
              </a>
            ))}
          </div>
          <Button
            className="group inline-flex items-center gap-3 rounded-full border border-current/30 bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-cream transition hover:bg-brand-dark hover:text-brand-cream"
          >
            Book Your Stay
            <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="flex flex-1 items-center justify-end lg:hidden">
          <Button className="rounded-full border border-brand-cream/30 bg-brand px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-brand-cream shadow-none hover:bg-brand-dark">
            Book
          </Button>
        </div>
      </nav>

      {menuOverlay}
    </header>
  );
};

export default Navbar;
