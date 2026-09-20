"use client";

export default function Lighting() {
  return (
    <>
      {/* Base illumination */}
      <ambientLight intensity={0.32} />

      {/* Main soft light */}
      <directionalLight
        position={[4, 7, 6]}
        intensity={1.8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Monitor / workspace light */}
      <pointLight
        position={[0, 3.5, 2.5]}
        intensity={5.5}
        distance={11}
      />

      {/* Cyan rim light */}
      <pointLight
        position={[-4, 2.5, -3]}
        intensity={2.8}
        distance={9}
      />

      {/* Subtle right-side fill */}
      <pointLight
        position={[4, 1.5, 1]}
        intensity={1.2}
        distance={8}
      />
    </>
  );
}