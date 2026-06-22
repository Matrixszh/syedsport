"use client";

import { useTexture } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

type EarthProps = {
  radius?: number;
};

export default function Earth({ radius = 1 }: EarthProps) {
  const [colorMap, normalMap, specularMap] = useTexture([
    "/globe/earth-color.jpg",
    "/globe/earth-normal.jpg",
    "/globe/earth-specular.jpg",
  ]);

  useEffect(() => {
    colorMap.colorSpace = THREE.SRGBColorSpace;
    colorMap.needsUpdate = true;
    normalMap.needsUpdate = true;
    specularMap.needsUpdate = true;
  }, [colorMap, normalMap, specularMap]);

  const material = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        map: colorMap,
        normalMap,
        normalScale: new THREE.Vector2(0.85, 0.85),
        specularMap,
        specular: new THREE.Color("#335b8f"),
        shininess: 12,
      }),
    [colorMap, normalMap, specularMap],
  );

  return (
    <mesh castShadow receiveShadow>
      <sphereGeometry args={[radius, 96, 96]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}
