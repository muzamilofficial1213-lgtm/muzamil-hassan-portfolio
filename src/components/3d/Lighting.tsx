"use client";

export default function Lighting() {
  return (
    <>
      {/* Base visibility */}
      <ambientLight intensity={0.8} />

      {/* Main soft light */}
      <directionalLight
        position={[4, 7, 6]}
        intensity={3.2}
      />

      {/* Front fill — desk details visible */}
      <pointLight
        position={[0, 3, 5]}
        intensity={10}
        distance={14}
      />

      {/* Left side fill */}
      <pointLight
        position={[-5, 2.5, 1]}
        intensity={5}
        distance={12}
      />

      {/* Right side fill */}
      <pointLight
        position={[5, 2.5, 1]}
        intensity={4}
        distance={12}
      />

      {/* Back/rim light */}
      <pointLight
        position={[0, 3, -4]}
        intensity={4}
        distance={10}
      />
    </>
  );
}