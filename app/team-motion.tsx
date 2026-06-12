"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function MotionLayer() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.to("[data-hero-image]", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: "#top",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-marquee]", {
        xPercent: -18,
        duration: 24,
        repeat: -1,
        ease: "none",
      });
    });

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    const handleMove = (event: MouseEvent) => {
      if (!cursor || !cursorDot) return;

      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(cursorDot, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.08,
        ease: "power3.out",
      });
    };

    const interactive = document.querySelectorAll("a, button, [data-hover]");
    const grow = () => cursor && gsap.to(cursor, { scale: 1.8, duration: 0.25 });
    const shrink = () => cursor && gsap.to(cursor, { scale: 1, duration: 0.25 });

    window.addEventListener("mousemove", handleMove);
    interactive.forEach((element) => {
      element.addEventListener("mouseenter", grow);
      element.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      interactive.forEach((element) => {
        element.removeEventListener("mouseenter", grow);
        element.removeEventListener("mouseleave", shrink);
      });
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorDotRef} className="custom-cursor-dot" />
    </>
  );
}
