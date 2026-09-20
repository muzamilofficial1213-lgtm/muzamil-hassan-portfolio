"use client";

export default function Environment() {
  return (
    <>
      {/* Background */}
      <color attach="background" args={["#030506"]} />

      <fog
        attach="fog"
        args={["#030506", 9, 24]}
      />

      {/* =================================================
          FLOOR
      ================================================= */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.45, 0]}
        receiveShadow
      >
        <planeGeometry args={[30, 30]} />

        <meshStandardMaterial
          color="#0a0d0f"
          roughness={0.76}
          metalness={0.28}
        />
      </mesh>

      {/* =================================================
          BACK WALL
      ================================================= */}

      <mesh
        position={[0, 3.2, -5]}
        receiveShadow
      >
        <boxGeometry args={[18, 11, 0.25]} />

        <meshStandardMaterial
          color="#080a0c"
          roughness={0.92}
          metalness={0.08}
        />
      </mesh>

      {/* =================================================
          LEFT WALL
      ================================================= */}

      <mesh
        position={[-7, 2.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry args={[12, 9, 0.2]} />

        <meshStandardMaterial
          color="#07090b"
          roughness={0.95}
          metalness={0.05}
        />
      </mesh>

      {/* =================================================
          RIGHT WALL
      ================================================= */}

      <mesh
        position={[7, 2.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry args={[12, 9, 0.2]} />

        <meshStandardMaterial
          color="#07090b"
          roughness={0.95}
          metalness={0.05}
        />
      </mesh>

      {/* =================================================
          BACK CYAN LIGHT
      ================================================= */}

      <pointLight
        position={[2.5, 2.5, -3.5]}
        intensity={2.2}
        distance={9}
      />

      {/* =================================================
          FLOOR LIGHT
      ================================================= */}

      <pointLight
        position={[-3, -1.5, 1]}
        intensity={0.7}
        distance={7}
      />
    </>
  );
}