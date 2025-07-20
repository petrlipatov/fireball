"use client";

import { Button } from "@/shared/ui/button/Button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  return (
    <div className="h-full">
      <div className="h-5/6 sm:h-5/6 relative overflow-hidden ">
        <OptimizedGif gifSrc="/hero.gif" staticSrc="/hero.jpg" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;

const OptimizedGif = ({
  gifSrc,
  staticSrc,
  alt,
}: {
  gifSrc: string;
  staticSrc: string;
  alt: string;
}) => {
  const [showGif, setShowGif] = useState(false);
  const gifRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (gifRef.current?.complete) {
      setShowGif(true);
    }
  }, []);

  return (
    <>
      <img
        src={staticSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          showGif ? "opacity-0" : "opacity-100"
        }`}
      />

      <img
        ref={gifRef}
        src={gifSrc}
        alt={alt}
        className={`z-10 absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          showGif ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => {
          setTimeout(() => setShowGif(true), 3000);
        }}
        loading="lazy"
      />

      <Button
        className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 z-30 p-5  
                  text-lg font-bold
                  border-2 border-yellow-600 bg-yellow-800/70 rounded-none
                  hover:bg-yellow-500/70 hover:border-yellow-500/70 hover:shadow-lg hover:scale-105"
      >
        Сесть у огня
      </Button>

      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          backgroundColor: "var(--gradient-color)",
          WebkitMaskImage: `radial-gradient(ellipse 70% 40% at center, transparent 0%, black 100%)`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage: `radial-gradient(ellipse 70% 60% at center, transparent 0%, black 100%)`,
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
          maskMode: "alpha",
        }}
      />
    </>
  );
};
