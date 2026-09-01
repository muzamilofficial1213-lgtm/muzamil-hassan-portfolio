"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraRig() {
  const { camera } = useThree();

  const targetPosition = useRef(
    new THREE.Vector3(0, 2.35, 6.4)
  );

  const lookTarget = useRef(
    new THREE.Vector3(0, 0.75, 0)
  );

  useFrame(({ pointer }) => {
    targetPosition.current.x = pointer.x * 0.3;
    targetPosition.current.y = 2.35 + pointer.y * 0.15;

    camera.position.lerp(targetPosition.current, 0.04);

    camera.lookAt(lookTarget.current);
  });

  return null;
}