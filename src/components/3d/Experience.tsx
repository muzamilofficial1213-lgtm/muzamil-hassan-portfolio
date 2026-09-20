"use client";

export default function Experience() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {/* Cinematic right-side atmosphere */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-[62%]">
        {/* Cyan ambient glow behind portrait */}
        <div className="absolute left-1/2 top-[48%] h-[58%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[120px]" />

        {/* Portrait frame */}
        <div className="absolute right-[3%] top-[18%] h-[74%] w-[58%] sm:right-[4%] sm:w-[54%] md:top-[19%] md:h-[73%] md:w-[52%] lg:right-[3%] lg:top-[17%] lg:h-[76%] lg:w-[52%]">
          {/* Soft outer glow */}
          <div className="absolute inset-[8%] rounded-[2rem] bg-cyan-400/[0.06] blur-[55px]" />

          {/* Image */}
          <div className="relative h-full w-full">
            <img
              src="/Muzamil1.jpeg"
              alt="Muzamil Hassan"
              className="h-full w-full object-contain object-center drop-shadow-[0_35px_80px_rgba(0,0,0,0.75)]"
              draggable={false}
            />

            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[#020304] via-[#020304]/60 to-transparent" />

            {/* Left fade — blends portrait into hero copy */}
            <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-[#020304] via-[#020304]/65 to-transparent" />

            {/* Top fade */}
            <div className="absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-[#020304]/65 to-transparent" />
          </div>
        </div>
      </div>

      {/* Overall cinematic overlays */}
      <div className="absolute inset-x-0 top-0 h-[35vh] bg-gradient-to-b from-black/70 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#020304] to-transparent" />

      {/* Keeps the left side darker so typography remains dominant */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#020304_0%,rgba(2,3,4,0.94)_22%,rgba(2,3,4,0.52)_52%,rgba(2,3,4,0.05)_100%)]" />

      {/* Subtle cyan atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_52%,rgba(0,200,230,0.055),transparent_30%)]" />
    </div>
  );
}