"use client";

import CameraRig from "./CameraRig";
import Environment from "./Environment";
import Lighting from "./Lighting";
import Workspace from "./Workspace";

export default function Scene() {
  return (
    <>
      {/* =====================================================
          GLOBAL SCENE
      ===================================================== */}

      <color attach="background" args={["#020304"]} />

      <fog attach="fog" args={["#020304", 9, 18]} />

      {/* =====================================================
          LIGHTING
      ===================================================== */}

      <ambientLight intensity={0.45} />

      <Lighting />

      {/* =====================================================
          ENVIRONMENT / STAR FIELD
      ===================================================== */}

      <Environment />

      {/* =====================================================
          FLOOR
      ===================================================== */}

      <mesh
        position={[0, -1.08, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[18, 18]} />

        <meshStandardMaterial
          color="#111518"
          roughness={0.78}
          metalness={0.12}
        />
      </mesh>

      {/* =====================================================
          BACK WALL
      ===================================================== */}

      <mesh position={[0, 3, -2.4]}>
        <boxGeometry args={[18, 8, 0.15]} />

        <meshStandardMaterial
          color="#070a0c"
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>

      {/* =====================================================
          WALL HORIZONTAL ACCENT
      ===================================================== */}

      <mesh position={[0, 1.55, -2.30]}>
        <boxGeometry args={[8, 0.025, 0.025]} />

        <meshStandardMaterial
          color="#0b7285"
          emissive="#0b7285"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* =====================================================
          FLOOR BACK ACCENT
      ===================================================== */}

      <mesh position={[0, -1.045, -2.15]}>
        <boxGeometry args={[7, 0.025, 0.025]} />

        <meshStandardMaterial
          color="#0b7285"
          emissive="#0b7285"
          emissiveIntensity={1.8}
        />
      </mesh>

      {/* =====================================================
          SIDE LIGHTS
      ===================================================== */}

      <pointLight
        position={[-4, 2.5, 2]}
        intensity={1.5}
        distance={8}
      />

      <pointLight
        position={[4, 2.5, 2]}
        intensity={1.2}
        distance={8}
      />

      {/* =====================================================
          CAMERA
      ===================================================== */}

      <CameraRig />

      {/* =====================================================
          MAIN WORKSPACE
      ===================================================== */}

      <Workspace />
    </>
  );
}