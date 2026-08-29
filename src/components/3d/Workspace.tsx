"use client";

import MonitorScreen from "./MonitorScreen";

export default function Workspace() {
  return (
    <group position={[0, -1.5, 0]}>

      {/* =====================================================
          DESK TOP
      ===================================================== */}

      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[5.4, 0.22, 2.6]} />
        <meshStandardMaterial
          color="#17191c"
          roughness={0.28}
          metalness={0.55}
        />
      </mesh>

      {/* Front desk edge */}

      <mesh position={[0, 0.66, 1.25]}>
        <boxGeometry args={[5.35, 0.08, 0.06]} />
        <meshStandardMaterial
          color="#252a2e"
          roughness={0.25}
          metalness={0.75}
        />
      </mesh>

      {/* =====================================================
          DESK LEGS
      ===================================================== */}

      <mesh position={[-2.25, -0.15, 0]}>
        <boxGeometry args={[0.22, 1.7, 2]} />
        <meshStandardMaterial
          color="#0b0d0f"
          roughness={0.32}
          metalness={0.8}
        />
      </mesh>

      <mesh position={[2.25, -0.15, 0]}>
        <boxGeometry args={[0.22, 1.7, 2]} />
        <meshStandardMaterial
          color="#0b0d0f"
          roughness={0.32}
          metalness={0.8}
        />
      </mesh>

      {/* =====================================================
          DESK DRAWER
      ===================================================== */}

      <mesh position={[1.35, 0.35, 0.35]}>
        <boxGeometry args={[1.15, 0.65, 0.9]} />
        <meshStandardMaterial
          color="#101214"
          roughness={0.4}
          metalness={0.5}
        />
      </mesh>

      {/* Drawer handle */}

      <mesh position={[1.35, 0.42, 0.82]}>
        <boxGeometry args={[0.45, 0.05, 0.04]} />
        <meshStandardMaterial
          color="#343a40"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* =====================================================
          MONITOR BODY
      ===================================================== */}

      <mesh position={[0, 1.8, -0.4]}>
        <boxGeometry args={[3.15, 1.75, 0.14]} />
        <meshStandardMaterial
          color="#090b0d"
          roughness={0.2}
          metalness={0.85}
        />
      </mesh>

      {/* Monitor inner bezel */}

      <mesh position={[0, 1.8, -0.315]}>
        <boxGeometry args={[2.85, 1.48, 0.025]} />
        <meshStandardMaterial
          color="#030506"
          roughness={0.18}
          metalness={0.25}
        />
      </mesh>

      {/* Actual screen UI */}

      <MonitorScreen />

      {/* =====================================================
          MONITOR STAND
      ===================================================== */}

      <mesh position={[0, 0.98, -0.4]}>
        <boxGeometry args={[0.16, 0.65, 0.16]} />
        <meshStandardMaterial
          color="#15181b"
          roughness={0.25}
          metalness={0.8}
        />
      </mesh>

      {/* Monitor base */}

      <mesh position={[0, 0.73, -0.4]}>
        <boxGeometry args={[0.9, 0.08, 0.55]} />
        <meshStandardMaterial
          color="#111417"
          roughness={0.25}
          metalness={0.8}
        />
      </mesh>

      {/* =====================================================
          KEYBOARD
      ===================================================== */}

      <mesh position={[-0.25, 0.96, 0.42]}>
        <boxGeometry args={[1.95, 0.09, 0.72]} />
        <meshStandardMaterial
          color="#111417"
          roughness={0.28}
          metalness={0.6}
        />
      </mesh>

      {/* Keyboard upper surface */}

      <mesh position={[-0.25, 1.015, 0.42]}>
        <boxGeometry args={[1.78, 0.025, 0.58]} />
        <meshStandardMaterial
          color="#202428"
          roughness={0.4}
          metalness={0.35}
        />
      </mesh>

      {/* =====================================================
          MOUSE
      ===================================================== */}

      <mesh position={[1.15, 0.99, 0.45]}>
        <sphereGeometry args={[0.22, 16, 8]} />
        <meshStandardMaterial
          color="#111417"
          roughness={0.24}
          metalness={0.65}
        />
      </mesh>

      {/* =====================================================
          DESK LIGHT STRIP
      ===================================================== */}

      <mesh position={[0, 0.67, -1.22]}>
        <boxGeometry args={[4.5, 0.025, 0.025]} />
        <meshStandardMaterial
          color="#073642"
          emissive="#0b7285"
          emissiveIntensity={2}
        />
      </mesh>

      {/* =====================================================
          SMALL DESK DEVICE
      ===================================================== */}

      <mesh position={[-1.9, 0.98, -0.35]}>
        <boxGeometry args={[0.42, 0.08, 0.42]} />
        <meshStandardMaterial
          color="#101315"
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

    </group>
  );
}