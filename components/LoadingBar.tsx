"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function LoadingBar() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;

    if (!bar) return;

    bar.classList.add("loading-active");

    const timer = window.setTimeout(() => {
      bar.classList.remove("loading-active");
    }, 500);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[9999] h-[3px] overflow-hidden bg-transparent">
      <div ref={barRef} className="loading-bar" />
    </div>
  );
}
