"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function createParticlePositions(count: number) {
  const positions = new Float32Array(count * 3);

  let seed = 48271;

  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    positions[i3] = (random() - 0.5) * 16;
    positions[i3 + 1] = (random() - 0.5) * 9;
    positions[i3 + 2] = (random() - 0.5) * 10;
  }

  return positions;
}

function Particles() {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(
    () => createParticlePositions(240),
    [],
  );

  useFrame((state) => {
    if (!points.current) return;

    const elapsed = state.clock.elapsedTime;

    points.current.rotation.y = elapsed * 0.006;
    points.current.rotation.x =
      Math.sin(elapsed * 0.04) * 0.012;
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
        opacity={0.34}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function FloatingGeometry() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    const elapsed = state.clock.elapsedTime;

    group.current.rotation.y =
      Math.sin(elapsed * 0.12) * 0.08;

    group.current.rotation.x =
      Math.sin(elapsed * 0.16) * 0.025;
  });

  return (
    <group ref={group}>
      <Float
        speed={0.55}
        rotationIntensity={0.12}
        floatIntensity={0.22}
      >
        <mesh
          position={[3.05, 0.35, -2.4]}
          rotation={[0.3, 0.4, 0.2]}
        >
          <icosahedronGeometry args={[1.2, 1]} />

          <meshStandardMaterial
            color="#071316"
            metalness={0.92}
            roughness={0.22}
            wireframe
            transparent
            opacity={0.18}
          />
        </mesh>
      </Float>

      <Float
        speed={0.4}
        rotationIntensity={0.08}
        floatIntensity={0.18}
      >
        <mesh position={[3.9, -1.55, -2.8]}>
          <torusGeometry args={[0.72, 0.014, 8, 64]} />

          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.2}
          />
        </mesh>
      </Float>

      <Float
        speed={0.3}
        rotationIntensity={0.08}
        floatIntensity={0.12}
      >
        <mesh
          position={[-3.7, 1.8, -3.5]}
          rotation={[0.4, 0.2, 0.1]}
        >
          <octahedronGeometry args={[0.32, 0]} />

          <meshBasicMaterial
            color="#147eff"
            wireframe
            transparent
            opacity={0.16}
          />
        </mesh>
      </Float>
    </group>
  );
}

function OrbitalRing() {
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ring.current) return;

    const elapsed = state.clock.elapsedTime;

    ring.current.rotation.x =
      Math.PI * 0.5 + Math.sin(elapsed * 0.08) * 0.08;

    ring.current.rotation.z = elapsed * 0.025;
  });

  return (
    <mesh
      ref={ring}
      position={[2.9, -1.45, -3.2]}
    >
      <torusGeometry args={[1.25, 0.012, 8, 96]} />

      <meshBasicMaterial
        color="#22d3ee"
        transparent
        opacity={0.11}
      />
    </mesh>
  );
}

function HorizonGrid() {
  return (
    <group position={[0, -2.55, -4]}>
      {Array.from({ length: 9 }).map((_, index) => (
        <mesh
          key={`horizontal-${index}`}
          position={[0, index * 0.08, 0]}
        >
          <planeGeometry args={[15, 0.006]} />

          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.025}
          />
        </mesh>
      ))}

      {Array.from({ length: 13 }).map((_, index) => (
        <mesh
          key={`vertical-${index}`}
          position={[(index - 6) * 1.15, 0.25, 0]}
          rotation={[0, 0, 0]}
        >
          <planeGeometry args={[0.004, 1.5]} />

          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.018}
          />
        </mesh>
      ))}
    </group>
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
        <fog
          attach="fog"
          args={["#030506", 6, 18]}
        />

        <ambientLight intensity={0.22} />

        <pointLight
          position={[4, 2, 4]}
          intensity={2.8}
          color="#22d3ee"
          distance={10}
        />

        <pointLight
          position={[-4, -2, 2]}
          intensity={1.2}
          color="#147eff"
          distance={9}
        />

        <Particles />
        <FloatingGeometry />
        <OrbitalRing />
        <HorizonGrid />
        <CameraMotion />
      </Canvas>

      {/* Central atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(34,211,238,0.075),transparent_28%)]" />

      {/* Secondary blue depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_70%,rgba(20,126,255,0.045),transparent_28%)]" />

      {/* Top cinematic vignette */}
      <div className="absolute inset-x-0 top-0 h-[32%] bg-gradient-to-b from-[#030506]/65 to-transparent" />

      {/* Left readability layer */}
      <div className="absolute inset-y-0 left-0 w-[46%] bg-gradient-to-r from-[#030506] via-[#030506]/90 to-transparent" />

      {/* Bottom cinematic fade */}
      <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[#030506] to-transparent" />

      {/* Very subtle screen-like atmospheric texture */}
      <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:80px_80px]" />
    </div>
  );
}