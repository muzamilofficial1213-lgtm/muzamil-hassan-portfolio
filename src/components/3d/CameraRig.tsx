"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraRig() {
  const { camera } = useThree();

  const target = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(({ pointer }) => {
    target.current.x = pointer.x * 0.35;
    target.current.y = pointer.y * 0.2;

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      target.current.x,
      0.03
    );

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      target.current.y,
      0.03
    );

    camera.lookAt(0, 0, 0);
  });

  return null;
}