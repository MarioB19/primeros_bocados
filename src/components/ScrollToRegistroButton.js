"use client";

import { Button } from "@/components/ui/button";

export default function ScrollToRegistroButton({
  children,
  className,
  size = "lg",
}) {
  function handleClick() {
    const section = document.getElementById("registro");
    if (!section) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    section.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <Button type="button" size={size} className={className} onClick={handleClick}>
      {children}
    </Button>
  );
}
