"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingGeometry() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.12) * 0.08;

    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.16) * 0.025;
  });

  return (
    <group ref={group}>
      <Float
        speed={0.65}
        rotationIntensity={0.15}
        floatIntensity={0.25}
      >
        <mesh position={[2.9, 0.3, -1.8]} rotation={[0.3, 0.4, 0.2]}>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshStandardMaterial
            color="#071115"
            metalness={0.9}
            roughness={0.24}
            wireframe
            transparent
            opacity={0.22}
          />
        </mesh>
      </Float>

      <Float
        speed={0.45}
        rotationIntensity={0.1}
        floatIntensity={0.2}
      >
        <mesh position={[3.7, -1.8, -2.2]}>
          <torusGeometry args={[0.65, 0.018, 8, 48]} />
          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.22}
          />
        </mesh>
      </Float>
    </group>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null);

  const particleCount = 220;

  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;

    positions[i3] = (Math.random() - 0.5) * 14;
    positions[i3 + 1] = (Math.random() - 0.5) * 8;
    positions[i3 + 2] = (Math.random() - 0.5) * 8;
  }

  useFrame((state) => {
    if (!points.current) return;

    points.current.rotation.y =
      state.clock.elapsedTime * 0.008;

    points.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.05) * 0.015;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#22d3ee"
        size={0.018}
        transparent
        opacity={0.42}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function CameraMotion() {
  useFrame((state) => {
    const targetX = state.pointer.x * 0.16;
    const targetY = state.pointer.y * 0.08;

    state.camera.position.x +=
      (targetX - state.camera.position.x) * 0.025;

    state.camera.position.y +=
      (targetY - state.camera.position.y) * 0.025;

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas
        dpr={[1, 1.25]}
        camera={{
          position: [0, 0, 7],
          fov: 42,
          near: 0.1,
          far: 30,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <fog attach="fog" args={["#030506", 7, 18]} />

        <ambientLight intensity={0.25} />

        <pointLight
          position={[4, 2, 4]}
          intensity={3}
          color="#22d3ee"
          distance={10}
        />

        <pointLight
          position={[-4, -2, 2]}
          intensity={1.4}
          color="#147eff"
          distance={9}
        />

        <Particles />
        <FloatingGeometry />
        <CameraMotion />
      </Canvas>

      {/* cinematic overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_46%,rgba(34,211,238,0.07),transparent_30%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,5,6,0.05),rgba(3,5,6,0.5))]" />

      <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-[#030506] via-[#030506]/85 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-t from-[#030506] to-transparent" />
    </div>
  );
}