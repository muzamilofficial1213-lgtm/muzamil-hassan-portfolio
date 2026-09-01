"use client";

import MonitorScreen from "./MonitorScreen";

export default function Workspace() {
  return (
    <group position={[0, -1.5, 0]}>

      {/* =====================================================
          LOCAL DESK LIGHTING
      ===================================================== */}

      <pointLight
        position={[0, 2.8, 1.2]}
        intensity={2.2}
        distance={7}
      />

      {/* =====================================================
          DESK TOP
      ===================================================== */}

      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[5.6, 0.22, 2.7]} />
        <meshStandardMaterial
          color="#252a2e"
          roughness={0.32}
          metalness={0.35}
        />
      </mesh>

      {/* Front edge */}

      <mesh position={[0, 0.67, 1.32]}>
        <boxGeometry args={[5.58, 0.10, 0.08]} />
        <meshStandardMaterial
          color="#111417"
          roughness={0.28}
          metalness={0.7}
        />
      </mesh>

      {/* =====================================================
          DESK LEGS
      ===================================================== */}

      <mesh position={[-2.35, -0.18, 0]}>
        <boxGeometry args={[0.28, 1.75, 2.15]} />
        <meshStandardMaterial
          color="#171a1d"
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      <mesh position={[2.35, -0.18, 0]}>
        <boxGeometry args={[0.28, 1.75, 2.15]} />
        <meshStandardMaterial
          color="#171a1d"
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* =====================================================
          UNDER DESK SUPPORT
      ===================================================== */}

      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[4.7, 0.12, 0.16]} />
        <meshStandardMaterial
          color="#0d1012"
          roughness={0.35}
          metalness={0.75}
        />
      </mesh>

      {/* =====================================================
          DRAWER UNIT
      ===================================================== */}

      <mesh position={[1.55, 0.30, 0.25]}>
        <boxGeometry args={[1.15, 0.72, 1.05]} />
        <meshStandardMaterial
          color="#181b1e"
          roughness={0.38}
          metalness={0.45}
        />
      </mesh>

      {/* Drawer front */}

      <mesh position={[1.55, 0.30, 0.79]}>
        <boxGeometry args={[0.98, 0.52, 0.035]} />
        <meshStandardMaterial
          color="#22272b"
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>

      {/* Drawer handle */}

      <mesh position={[1.55, 0.40, 0.83]}>
        <boxGeometry args={[0.42, 0.055, 0.055]} />
        <meshStandardMaterial
          color="#6c747b"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* =====================================================
          MONITOR BODY
      ===================================================== */}

      <mesh position={[0, 1.88, -0.42]}>
        <boxGeometry args={[3.25, 1.82, 0.16]} />
        <meshStandardMaterial
          color="#101315"
          roughness={0.24}
          metalness={0.72}
        />
      </mesh>

      {/* Monitor bezel */}

      <mesh position={[0, 1.88, -0.325]}>
        <boxGeometry args={[3.02, 1.58, 0.035]} />
        <meshStandardMaterial
          color="#050708"
          roughness={0.2}
          metalness={0.25}
        />
      </mesh>

      {/* Screen */}

      <MonitorScreen />

      {/* =====================================================
          MONITOR STAND
      ===================================================== */}

      <mesh position={[0, 1.03, -0.42]}>
        <boxGeometry args={[0.18, 0.72, 0.18]} />
        <meshStandardMaterial
          color="#1b1f22"
          roughness={0.28}
          metalness={0.75}
        />
      </mesh>

      {/* Stand neck accent */}

      <mesh position={[0, 1.25, -0.30]}>
        <boxGeometry args={[0.32, 0.06, 0.08]} />
        <meshStandardMaterial
          color="#343b40"
          roughness={0.25}
          metalness={0.8}
        />
      </mesh>

      {/* Monitor base */}

      <mesh position={[0, 0.75, -0.42]}>
        <boxGeometry args={[1.05, 0.10, 0.62]} />
        <meshStandardMaterial
          color="#15191c"
          roughness={0.28}
          metalness={0.72}
        />
      </mesh>

      {/* =====================================================
          KEYBOARD BODY
      ===================================================== */}

      <mesh position={[-0.65, 0.96, 0.48]}>
        <boxGeometry args={[2.25, 0.10, 0.72]} />
        <meshStandardMaterial
          color="#15191c"
          roughness={0.32}
          metalness={0.45}
        />
      </mesh>

      {/* Keyboard surface */}

      <mesh position={[-0.65, 1.025, 0.48]}>
        <boxGeometry args={[2.08, 0.025, 0.59]} />
        <meshStandardMaterial
          color="#252a2e"
          roughness={0.45}
          metalness={0.25}
        />
      </mesh>

      {/* =====================================================
          KEYBOARD KEYS
      ===================================================== */}

      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, key) => (
          <mesh
            key={`${row}-${key}`}
            position={[
              -1.55 + key * 0.20,
              1.055,
              0.28 + row * 0.135,
            ]}
          >
            <boxGeometry args={[0.145, 0.035, 0.09]} />
            <meshStandardMaterial
              color="#0c0f11"
              roughness={0.55}
              metalness={0.15}
            />
          </mesh>
        ))
      )}

      {/* =====================================================
          MOUSE
      ===================================================== */}

      <mesh position={[1.10, 1.02, 0.48]} scale={[1, 0.65, 1.25]}>
        <sphereGeometry args={[0.22, 20, 12]} />
        <meshStandardMaterial
          color="#15191c"
          roughness={0.24}
          metalness={0.55}
        />
      </mesh>

      {/* Mouse accent */}

      <mesh position={[1.10, 1.16, 0.35]}>
        <boxGeometry args={[0.025, 0.025, 0.16]} />
        <meshStandardMaterial
          color="#0b7285"
          emissive="#0b7285"
          emissiveIntensity={3}
        />
      </mesh>

      {/* =====================================================
          DESK LAMP
      ===================================================== */}

      <mesh position={[-2.0, 1.15, 0.35]}>
        <cylinderGeometry args={[0.12, 0.16, 0.08, 16]} />
        <meshStandardMaterial
          color="#171b1e"
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Lamp arm */}

      <mesh
        position={[-1.82, 1.52, 0.25]}
        rotation={[0, 0, -0.35]}
      >
        <cylinderGeometry args={[0.035, 0.035, 0.85, 12]} />
        <meshStandardMaterial
          color="#30363b"
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>

      {/* Lamp head */}

      <mesh
        position={[-1.67, 1.88, 0.18]}
        rotation={[0, 0, -0.35]}
      >
        <cylinderGeometry args={[0.16, 0.11, 0.25, 16]} />
        <meshStandardMaterial
          color="#202529"
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Lamp glow */}

      <pointLight
        position={[-1.67, 1.72, 0.05]}
        intensity={1.8}
        distance={3}
      />

      {/* =====================================================
          DESK LIGHT STRIP
      ===================================================== */}

      <mesh position={[0, 0.68, -1.25]}>
        <boxGeometry args={[4.8, 0.025, 0.025]} />
        <meshStandardMaterial
          color="#0b7285"
          emissive="#0b7285"
          emissiveIntensity={3}
        />
      </mesh>

      {/* =====================================================
          SMALL DESK DEVICE
      ===================================================== */}

      <mesh position={[-1.75, 0.97, -0.15]}>
        <boxGeometry args={[0.42, 0.10, 0.48]} />
        <meshStandardMaterial
          color="#161a1d"
          roughness={0.3}
          metalness={0.65}
        />
      </mesh>

      {/* Device screen */}

      <mesh position={[-1.75, 1.025, 0.095]}>
        <boxGeometry args={[0.27, 0.035, 0.015]} />
        <meshStandardMaterial
          color="#06333c"
          emissive="#0b7285"
          emissiveIntensity={2.5}
        />
      </mesh>

    </group>
  );
}