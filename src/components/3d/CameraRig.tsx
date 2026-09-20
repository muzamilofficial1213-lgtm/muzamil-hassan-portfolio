"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraRig() {
  const { camera } = useThree();

  const targetPosition = useRef(
    new THREE.Vector3(0, 1.55, 6.5)
  );

  const lookTarget = useRef(
    new THREE.Vector3(0.75, 0.25, 0)
  );

  useFrame(({ pointer }) => {
    targetPosition.current.x = pointer.x * 0.18;
    targetPosition.current.y = 1.55 + pointer.y * 0.12;

    camera.position.lerp(targetPosition.current, 0.035);
    camera.lookAt(lookTarget.current);
  });

  return null;
}