"use client";

import { useMemo } from "react";

export default function World() {
  const count = 1200;

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      array[i * 3] = (Math.random() - 0.5) * 20;
      array[i * 3 + 1] = (Math.random() - 0.5) * 20;
      array[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    return array;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.02}
        color="#ffffff"
        sizeAttenuation
      />
    </points>
  );
}