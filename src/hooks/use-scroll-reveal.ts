import { useEffect, useMemo, useRef, useState } from "react";

type ScrollRevealOptions = {
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
};

export function useScrollReveal<TElement extends HTMLElement = HTMLElement>(options?: ScrollRevealOptions) {
  const { threshold = 0.2, once = true, rootMargin = "0px" } = options ?? {};
  const elementRef = useRef<TElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const observerOptions = useMemo(
    () => ({
      threshold,
      rootMargin,
    }),
    [threshold, rootMargin],
  );

  useEffect(() => {
    const node = elementRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once) {
          observer.disconnect();
        }
      } else if (!once) {
        setIsVisible(false);
      }
    }, observerOptions);

    observer.observe(node);

    return () => observer.disconnect();
  }, [observerOptions, once]);

  return { ref: elementRef, isVisible };
}
