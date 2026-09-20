"use client";

import CameraRig from "./CameraRig";
import Environment from "./Environment";
import Lighting from "./Lighting";
import Workspace from "./Workspace";

export default function Scene() {
  return (
    <>
      <color attach="background" args={["#020304"]} />
      <fog attach="fog" args={["#020304", 9, 20]} />

      <ambientLight intensity={0.35} />

      <Lighting />
      <Environment />

      {/* Floor */}
      <mesh
        position={[0, -1.08, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[22, 22]} />
        <meshStandardMaterial
          color="#0b0f11"
          roughness={0.78}
          metalness={0.12}
        />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 3, -2.4]}>
        <boxGeometry args={[22, 8, 0.15]} />
        <meshStandardMaterial
          color="#050708"
          roughness={0.92}
          metalness={0.04}
        />
      </mesh>

      {/* Cyan wall light */}
      <mesh position={[0, 1.55, -2.3]}>
        <boxGeometry args={[9, 0.025, 0.025]} />
        <meshStandardMaterial
          color="#08758a"
          emissive="#08758a"
          emissiveIntensity={1.8}
        />
      </mesh>

      {/* Cyan floor light */}
      <mesh position={[1.5, -1.045, -2.15]}>
        <boxGeometry args={[8, 0.025, 0.025]} />
        <meshStandardMaterial
          color="#08758a"
          emissive="#08758a"
          emissiveIntensity={1.8}
        />
      </mesh>

      {/* Scene lighting */}
      <pointLight
        position={[-4.5, 2.2, 1]}
        intensity={1.1}
        distance={7}
      />

      <pointLight
        position={[5, 2.8, 1.5]}
        intensity={1.8}
        distance={8}
      />

      <pointLight
        position={[2.8, 2.4, 2]}
        intensity={2.4}
        distance={7}
      />

      <CameraRig />

      {/* Main workstation */}
      <group position={[1.15, 0, 0]}>
        <Workspace />
      </group>
    </>
  );
}