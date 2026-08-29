"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

export default function Experience() {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 50,
        }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}