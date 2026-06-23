"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { createStarPositions } from "./utils";

type EarthProps = {
  radius?: number;
};

export default function Earth({ radius = 1 }: EarthProps) {
  const particleRef = useRef<THREE.Points>(null);
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

  const particleMaterial = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: "#ffffff",
        size: 0.018,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      }),
    [],
  );

  const particlePositions = useMemo(
    () => createStarPositions(1400, radius * 1.12, radius * 0.35),
    [radius],
  );

  useEffect(() => {
    return () => {
      fillMaterial.dispose();
      wireframeMaterial.dispose();
      particleMaterial.dispose();
    };
  }, [fillMaterial, particleMaterial, wireframeMaterial]);

  useFrame((_, delta) => {
    if (!particleRef.current) {
      return;
    }

    particleRef.current.rotation.y += delta * 0.08;
    particleRef.current.rotation.x += delta * 0.02;
  });

  return (
    <group>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[radius, 72, 72]} />
        <primitive object={fillMaterial} attach="material" />
      </mesh>
      <mesh scale={1.001}>
        <sphereGeometry args={[radius, 36, 36]} />
        <primitive object={wireframeMaterial} attach="material" />
      </mesh>
      <points ref={particleRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
            count={particlePositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <primitive object={particleMaterial} attach="material" />
      </points>
    </group>
  );
}
