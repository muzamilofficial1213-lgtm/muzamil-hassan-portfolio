"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

export default function Experience() {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas
        camera={{
          position: [0, 1.6, 6],
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}