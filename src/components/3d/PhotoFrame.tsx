"use client";

import Image from "next/image";
import { useState } from "react";

export default function PhotoFrame() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full w-full">
      {/* Ambient cyan atmosphere */}
      <div className="absolute inset-[4%] rounded-full bg-cyan-400/[0.075] blur-[85px]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[min(470px,74vw)] w-[min(415px,67vw)] max-h-[540px] max-w-[450px]">
          {/* Deep shadow / depth layer */}
          <div
            className="absolute inset-[-18px] bg-black/55 blur-[28px]"
            style={{
              clipPath:
                "polygon(25% 3%,75% 3%,98% 50%,75% 97%,25% 97%,2% 50%)",
            }}
          />

          {/* Outer cyan frame */}
          <div
            className="absolute inset-0 bg-cyan-400/[0.20] shadow-[0_0_55px_rgba(34,211,238,0.10)]"
            style={{
              clipPath:
                "polygon(25% 3%,75% 3%,98% 50%,75% 97%,25% 97%,2% 50%)",
            }}
          />

          {/* Inner frame */}
          <div
            className="absolute inset-[2px] bg-[#061014]"
            style={{
              clipPath:
                "polygon(25% 3%,75% 3%,98% 50%,75% 97%,25% 97%,2% 50%)",
            }}
          />

          {/* Secondary rim */}
          <div
            className="absolute inset-[6px] border border-cyan-300/[0.14]"
            style={{
              clipPath:
                "polygon(25% 3%,75% 3%,98% 50%,75% 97%,25% 97%,2% 50%)",
            }}
          />

          {/* Photo */}
          <div
            className={`absolute inset-[9px] overflow-hidden bg-[#080d0f] transition-all duration-700 ${
              loaded
                ? "opacity-100 scale-100"
                : "opacity-0 scale-[1.025]"
            }`}
            style={{
              clipPath:
                "polygon(25% 3%,75% 3%,98% 50%,75% 97%,25% 97%,2% 50%)",
            }}
          >
            <Image
              src="/Muzamil1.jpeg"
              alt="Muzamil Hassan"
              fill
              priority
              sizes="(max-width: 640px) 67vw, 450px"
              draggable={false}
              onLoad={() => setLoaded(true)}
              className="object-cover object-center"
              style={{
                filter:
                  "contrast(1.08) saturate(0.88) brightness(0.88)",
              }}
            />

            {/* Cinematic dark integration */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_38%,transparent_24%,rgba(2,5,6,0.16)_62%,rgba(2,5,6,0.58)_100%)]" />

            {/* Cyan environmental light */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_45%,rgba(34,211,238,0.13),transparent_42%)]" />

            {/* Top cinematic shadow */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[32%] bg-gradient-to-b from-[#020506]/45 to-transparent" />

            {/* Bottom cinematic shadow */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#020506]/65 to-transparent" />

            {/* Subtle cyan scan line */}
            <div className="pointer-events-none absolute left-[9%] right-[9%] top-[24%] h-px bg-cyan-300/[0.16]" />
          </div>

          {/* Frame corner accents */}
          <div className="absolute left-[17%] top-[7%] h-px w-16 bg-cyan-300/75 shadow-[0_0_12px_rgba(34,211,238,0.45)]" />

          <div className="absolute right-[17%] top-[7%] h-px w-10 bg-cyan-300/30" />

          <div className="absolute bottom-[7%] left-[17%] h-px w-10 bg-cyan-300/30" />

          <div className="absolute bottom-[7%] right-[17%] h-px w-16 bg-cyan-300/75 shadow-[0_0_12px_rgba(34,211,238,0.45)]" />

          {/* Technical corner markers */}
          <span className="absolute left-[10%] top-[18%] h-1 w-1 bg-cyan-300/70 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <span className="absolute right-[10%] top-[18%] h-1 w-1 bg-cyan-300/35" />
          <span className="absolute bottom-[18%] left-[10%] h-1 w-1 bg-cyan-300/35" />
          <span className="absolute bottom-[18%] right-[10%] h-1 w-1 bg-cyan-300/70 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

          {/* Identity tag */}
          <div className="absolute -right-8 top-[26%] hidden border border-cyan-300/[0.12] bg-[#05090b]/85 px-3 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:block">
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />

              <span className="font-mono text-[7px] font-bold tracking-[0.18em] text-cyan-300">
                MUZAMIL / 01
              </span>
            </div>
          </div>

          {/* Creator tag */}
          <div className="absolute -left-9 bottom-[25%] hidden items-center gap-2 border border-white/[0.08] bg-[#05090b]/85 px-3 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

            <span className="font-mono text-[7px] font-bold tracking-[0.15em] text-white/45">
              DIGITAL CREATOR
            </span>
          </div>

          {/* Floating orbital ring */}
          <div className="pointer-events-none absolute -bottom-[10%] -right-[7%] h-[150px] w-[150px] rounded-full border border-cyan-300/[0.12]" />

          <div className="pointer-events-none absolute -bottom-[4%] -right-[1%] h-[105px] w-[105px] rounded-full border border-cyan-300/[0.07]" />

          {/* Small orbital node */}
          <span className="absolute -bottom-[1%] right-[10%] h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.85)]" />
        </div>
      </div>
    </div>
  );
}