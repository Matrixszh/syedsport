"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { createStarPositions } from "./utils";

type StarsProps = {
  count?: number;
  radius?: number;
  depth?: number;
};

export default function Stars({
  count = 6000,
  radius = 8,
  depth = 10,
}: StarsProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(
    () => createStarPositions(count, radius, depth),
    [count, radius, depth],
  );

  useFrame((_, delta) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y += delta * 0.01;
    pointsRef.current.rotation.x += delta * 0.002;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#f8f6e9"
        size={0.014}
        sizeAttenuation
        depthWrite={false}
        opacity={0.72}
      />
    </Points>
  );
}
