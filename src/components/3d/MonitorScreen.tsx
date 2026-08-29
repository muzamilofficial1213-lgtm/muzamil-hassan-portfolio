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
          background: "#05090b",
          border: "1px solid rgba(120, 230, 255, 0.35)",
          borderRadius: "8px",
          color: "#d8faff",
          fontFamily: "monospace",
          boxShadow:
            "0 0 30px rgba(0, 180, 220, 0.15), inset 0 0 30px rgba(0, 180, 220, 0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            marginBottom: "28px",
          }}
        >
          <span>MUZAMIL.HASSAN</span>

          <span style={{ color: "#7dffcf" }}>
            ● SYSTEM ONLINE
          </span>
        </div>

        <div
          style={{
            fontSize: "30px",
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          FULL-STACK
        </div>

        <div
          style={{
            fontSize: "30px",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "25px",
          }}
        >
          DEVELOPER
        </div>

        <div
          style={{
            height: "1px",
            background: "rgba(120, 230, 255, 0.25)",
            marginBottom: "20px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          {["NEXT.JS", "REACT", "TYPESCRIPT", "THREE.JS"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "12px",
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "5px",
                  fontSize: "12px",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        <div
          style={{
            marginTop: "25px",
            fontSize: "11px",
            color: "rgba(216,250,255,0.5)",
          }}
        >
          // BUILDING DIGITAL EXPERIENCES
        </div>
      </div>
    </Html>
  );
}