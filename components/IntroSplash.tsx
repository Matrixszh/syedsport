"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const DISPLAY_DURATION_MS = 1000;
const FADE_DURATION_MS = 300;

export default function IntroSplash() {
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setIsFading(true);
    }, DISPLAY_DURATION_MS);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, DISPLAY_DURATION_MS + FADE_DURATION_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-black transition-opacity duration-[900ms] ${
        isFading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-5 px-6 text-center">
        <Image
          src="/tulip.png"
          alt="SKYWORLD logo"
          width={84}
          height={84}
          priority
          className="h-16 w-16 object-contain sm:h-20 sm:w-20"
        />
        <p className="text-[16px] font-semibold uppercase tracking-[0.45em] text-white sm:text-[18px]">
          SKYWORLD
        </p>
      </div>
    </div>
  );
}
