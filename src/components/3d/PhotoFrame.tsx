"use client";

import { useEffect, useState } from "react";

export default function PhotoFrame() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();

    image.src = "/Muzamil1.jpeg";

    image.onload = () => {
      setLoaded(true);
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* outer glow */}
      <div className="absolute inset-[5%] rounded-full bg-cyan-400/[0.08] blur-[70px]" />

      {/* floating frame */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[min(440px,72vw)] w-[min(390px,64vw)] max-h-[520px] max-w-[430px]">

          {/* outer hex border */}
          <div
            className="absolute inset-0 bg-cyan-400/[0.18]"
            style={{
              clipPath:
                "polygon(25% 3%,75% 3%,98% 50%,75% 97%,25% 97%,2% 50%)",
            }}
          />

          {/* dark inner frame */}
          <div
            className="absolute inset-[2px] bg-[#071014]"
            style={{
              clipPath:
                "polygon(25% 3%,75% 3%,98% 50%,75% 97%,25% 97%,2% 50%)",
            }}
          />

          {/* photo */}
          <div
            className={`absolute inset-[9px] overflow-hidden bg-[#050708] transition-opacity duration-700 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
              clipPath:
                "polygon(25% 3%,75% 3%,98% 50%,75% 97%,25% 97%,2% 50%)",
            }}
          >
            <img
              src="/Muzamil1.jpeg"
              alt="Muzamil Hassan"
              draggable={false}
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/[0.10] via-transparent to-white/[0.04]" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25" />
          </div>

          {/* technical corner details */}
          <div className="absolute left-[18%] top-[7%] h-px w-12 bg-cyan-300/70" />
          <div className="absolute right-[18%] top-[7%] h-px w-12 bg-cyan-300/30" />

          <div className="absolute bottom-[7%] left-[18%] h-px w-12 bg-cyan-300/30" />
          <div className="absolute bottom-[7%] right-[18%] h-px w-12 bg-cyan-300/70" />

          {/* floating label */}
          <div className="absolute -right-7 top-[27%] hidden border border-white/10 bg-[#050708]/80 px-3 py-2 backdrop-blur-md sm:block">
            <span className="font-mono text-[7px] font-bold tracking-[0.18em] text-cyan-300">
              MUZAMIL / 01
            </span>
          </div>

          {/* floating status */}
          <div className="absolute -left-8 bottom-[27%] hidden items-center gap-2 border border-white/10 bg-[#050708]/80 px-3 py-2 backdrop-blur-md sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

            <span className="font-mono text-[7px] font-bold tracking-[0.15em] text-white/45">
              DIGITAL CREATOR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}