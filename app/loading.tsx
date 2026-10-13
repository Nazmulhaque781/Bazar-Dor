"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoadingBar() {
  const pathname = usePathname();

  useEffect(() => {
    const bar = document.querySelector(".loading-bar");

    if (!bar) return;

    bar.classList.add("loading-active");

    const timer = window.setTimeout(() => {
      bar.classList.remove("loading-active");
    }, 300);

    return () => {
      window.clearTimeout(timer);
      bar.classList.remove("loading-active");
    };
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-[9999] h-[3px] overflow-hidden bg-transparent">
      <div className="loading-bar" />
    </div>
  );
}
