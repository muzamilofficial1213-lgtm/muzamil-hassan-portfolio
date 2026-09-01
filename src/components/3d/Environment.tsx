"use client";

export default function Environment() {
  return (
    <>
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <color attach="background" args={["#07090b"]} />

      <fog attach="fog" args={["#07090b", 9, 24]} />

      {/* =====================================================
          FLOOR
      ===================================================== */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.45, 0]}
        receiveShadow
      >
        <planeGeometry args={[30, 30]} />

        <meshStandardMaterial
          color="#111417"
          roughness={0.72}
          metalness={0.28}
        />
      </mesh>

      {/* =====================================================
          BACK WALL
      ===================================================== */}

      <mesh
        position={[0, 3, -4]}
        receiveShadow
      >
        <boxGeometry args={[18, 11, 0.18]} />

        <meshStandardMaterial
          color="#090c0f"
          roughness={0.65}
          metalness={0.25}
        />
      </mesh>

      {/* =====================================================
          BACK WALL INNER PANEL
      ===================================================== */}

      <mesh position={[0, 1.5, -3.88]}>
        <boxGeometry args={[11, 5.2, 0.08]} />

        <meshStandardMaterial
          color="#0d1215"
          roughness={0.55}
          metalness={0.35}
        />
      </mesh>

      {/* =====================================================
          LEFT WALL PANEL
      ===================================================== */}

      <mesh position={[-5.8, 1.5, -3.75]}>
        <boxGeometry args={[0.08, 5.2, 5.5]} />

        <meshStandardMaterial
          color="#0b1013"
          roughness={0.58}
          metalness={0.3}
        />
      </mesh>

      {/* =====================================================
          RIGHT WALL PANEL
      ===================================================== */}

      <mesh position={[5.8, 1.5, -3.75]}>
        <boxGeometry args={[0.08, 5.2, 5.5]} />

        <meshStandardMaterial
          color="#0b1013"
          roughness={0.58}
          metalness={0.3}
        />
      </mesh>

      {/* =====================================================
          WALL HORIZONTAL LIGHT
      ===================================================== */}

      <mesh position={[0, 3.85, -3.78]}>
        <boxGeometry args={[8.5, 0.025, 0.025]} />

        <meshStandardMaterial
          color="#0a5360"
          emissive="#0c9bb0"
          emissiveIntensity={1.8}
        />
      </mesh>

      {/* =====================================================
          LEFT WALL LIGHT
      ===================================================== */}

      <mesh position={[-4.8, 1.6, -3.78]}>
        <boxGeometry args={[0.025, 3.2, 0.025]} />

        <meshStandardMaterial
          color="#0a5360"
          emissive="#0c9bb0"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* =====================================================
          RIGHT WALL LIGHT
      ===================================================== */}

      <mesh position={[4.8, 1.6, -3.78]}>
        <boxGeometry args={[0.025, 3.2, 0.025]} />

        <meshStandardMaterial
          color="#0a5360"
          emissive="#0c9bb0"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* =====================================================
          FLOOR GRID - HORIZONTAL
      ===================================================== */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.435, -1]}
      >
        <planeGeometry args={[18, 0.018]} />

        <meshStandardMaterial
          color="#12343b"
          emissive="#0b5f6d"
          emissiveIntensity={0.8}
        />
      </mesh>

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.435, 2]}
      >
        <planeGeometry args={[18, 0.012]} />

        <meshStandardMaterial
          color="#102b31"
          emissive="#084d58"
          emissiveIntensity={0.7}
        />
      </mesh>

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.435, 5]}
      >
        <planeGeometry args={[18, 0.01]} />

        <meshStandardMaterial
          color="#0d252b"
          emissive="#073e47"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* =====================================================
          FLOOR GRID - VERTICAL
      ===================================================== */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[-4, -2.434, 1]}
      >
        <planeGeometry args={[0.012, 12]} />

        <meshStandardMaterial
          color="#102b31"
          emissive="#084d58"
          emissiveIntensity={0.7}
        />
      </mesh>

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[4, -2.434, 1]}
      >
        <planeGeometry args={[0.012, 12]} />

        <meshStandardMaterial
          color="#102b31"
          emissive="#084d58"
          emissiveIntensity={0.7}
        />
      </mesh>

      {/* =====================================================
          FLOOR CENTER LIGHT
      ===================================================== */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.43, -0.2]}
      >
        <planeGeometry args={[6.5, 0.025]} />

        <meshStandardMaterial
          color="#0a4a54"
          emissive="#087f91"
          emissiveIntensity={1.2}
        />
      </mesh>

      {/* =====================================================
          SMALL WALL DETAILS
      ===================================================== */}

      <mesh position={[-3.6, 2.65, -3.81]}>
        <boxGeometry args={[1.4, 0.025, 0.025]} />

        <meshStandardMaterial
          color="#17414a"
          emissive="#0b7285"
          emissiveIntensity={1}
        />
      </mesh>

      <mesh position={[3.6, 2.65, -3.81]}>
        <boxGeometry args={[1.4, 0.025, 0.025]} />

        <meshStandardMaterial
          color="#17414a"
          emissive="#0b7285"
          emissiveIntensity={1}
        />
      </mesh>
    </>
  );
}