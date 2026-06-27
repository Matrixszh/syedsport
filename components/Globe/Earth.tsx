"use client";

import { useEffect, useMemo } from "react";
import * as THREE from "three";

type EarthProps = {
  radius?: number;
};

export default function Earth({ radius = 1 }: EarthProps) {
  const fillMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#ffffff",
        transparent: true,
        opacity: 0.08,
        depthWrite: false,
      }),
    [],
  );

  const wireframeMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#ffffff",
        wireframe: true,
        transparent: true,
        opacity: 0.95,
      }),
    [],
  );

  useEffect(() => {
    return () => {
      fillMaterial.dispose();
      wireframeMaterial.dispose();
    };
  }, [fillMaterial, wireframeMaterial]);

  return (
    <group>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[radius, 29, 29]} />
        <primitive object={fillMaterial} attach="material" />
      </mesh>
      <mesh scale={1.001}>
        <sphereGeometry args={[radius, 19, 19]} />
        <primitive object={wireframeMaterial} attach="material" />
      </mesh>
    </group>
  );
}
