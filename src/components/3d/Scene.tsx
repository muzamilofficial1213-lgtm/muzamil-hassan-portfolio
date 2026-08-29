"use client";

import CameraRig from "./CameraRig";
import World from "./World";
import Workspace from "./Workspace";

export default function Scene() {
  return (
    <>
      {/* Soft global illumination */}
      <ambientLight intensity={0.35} />

      {/* Main key light */}
      <directionalLight
        position={[4, 6, 5]}
        intensity={2}
      />

      {/* Front fill light */}
      <pointLight
        position={[0, 2.5, 3]}
        intensity={12}
        distance={10}
      />

      {/* Subtle rim light */}
      <pointLight
        position={[-4, 3, -3]}
        intensity={8}
        distance={12}
      />

      <CameraRig />
      <World />
      <Workspace />
    </>
  );
}