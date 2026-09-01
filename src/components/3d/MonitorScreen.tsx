"use client";

import { Html } from "@react-three/drei";

export default function MonitorScreen() {
  return (
    <Html
      transform
      position={[0, 1.88, -0.555]}
      distanceFactor={3.65}
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
            "linear-gradient(135deg, #071014 0%, #05090b 55%, #081216 100%)",
          border: "1px solid rgba(120, 230, 255, 0.3)",
          borderRadius: "6px",
          color: "#d8faff",
          fontFamily: "monospace",
          boxShadow:
            "0 0 24px rgba(0, 180, 220, 0.12), inset 0 0 24px rgba(0, 180, 220, 0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "13px",
            marginBottom: "24px",
            letterSpacing: "0.04em",
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
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          SOFTWARE
        </div>

        <div
          style={{
            fontSize: "30px",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "22px",
            letterSpacing: "-0.03em",
          }}
        >
          ENGINEERING STUDENT
        </div>

        <div
          style={{
            height: "1px",
            background: "rgba(120, 230, 255, 0.22)",
            marginBottom: "18px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
          }}
        >
          {["NEXT.JS", "REACT", "TYPESCRIPT", "THREE.JS"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "10px 12px",
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "4px",
                  fontSize: "11px",
                  letterSpacing: "0.05em",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        <div
          style={{
            marginTop: "22px",
            fontSize: "10px",
            color: "rgba(216,250,255,0.48)",
            letterSpacing: "0.04em",
          }}
        >
          // BUILDING DIGITAL EXPERIENCES
        </div>
      </div>
    </Html>
  );
}