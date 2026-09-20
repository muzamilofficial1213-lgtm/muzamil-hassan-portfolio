"use client";

import { Html } from "@react-three/drei";

export default function MonitorScreen() {
  return (
    <Html
      transform
      position={[0, 1.8, -0.43]}
      distanceFactor={3.4}
      style={{
        width: "650px",
        height: "360px",
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          padding: "24px",
          background:
            "linear-gradient(145deg, #05090b, #071115)",
          border:
            "1px solid rgba(80, 220, 245, 0.32)",
          borderRadius: "8px",
          color: "#d8faff",
          fontFamily: "monospace",
          boxShadow:
            "0 0 40px rgba(0, 180, 220, 0.12), inset 0 0 35px rgba(0, 180, 220, 0.05)",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "13px",
            marginBottom: "28px",
            color: "rgba(216,250,255,0.72)",
          }}
        >
          <span>MUZAMIL.HASSAN</span>

          <span
            style={{
              color: "#6fffd0",
              fontSize: "12px",
            }}
          >
            ● ONLINE
          </span>
        </div>

        {/* Main identity */}
        <div
          style={{
            fontSize: "29px",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          SOFTWARE
        </div>

        <div
          style={{
            fontSize: "29px",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "25px",
            letterSpacing: "-0.03em",
          }}
        >
          ENGINEERING STUDENT
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "rgba(120, 230, 255, 0.22)",
            marginBottom: "20px",
          }}
        />

        {/* Stack */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          {[
            "NEXT.JS",
            "REACT",
            "TYPESCRIPT",
            "THREE.JS",
          ].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "12px",
                background:
                  "rgba(255,255,255,0.035)",
                border:
                  "1px solid rgba(255,255,255,0.075)",
                borderRadius: "5px",
                fontSize: "11px",
                color: "rgba(216,250,255,0.72)",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "10px",
            color: "rgba(216,250,255,0.38)",
          }}
        >
          <span>// DIGITAL EXPERIENCES</span>
          <span>v.2026</span>
        </div>
      </div>
    </Html>
  );
}