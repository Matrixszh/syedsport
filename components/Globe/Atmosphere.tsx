"use client";

import { useEffect, useMemo } from "react";
import * as THREE from "three";

const vertexShader = `
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * mvPosition;
}
`;

const fragmentShader = `
uniform vec3 uGlowColor;
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  vec3 viewDirection = normalize(vViewPosition);
  float intensity = pow(0.85 - dot(vNormal, viewDirection), 4.0);
  gl_FragColor = vec4(uGlowColor, intensity * 0.9);
}
`;

type AtmosphereProps = {
  radius?: number;
  color?: string;
};

export default function Atmosphere({
  radius = 1.08,
  color = "#5fa8ff",
}: AtmosphereProps) {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uGlowColor: { value: new THREE.Color(color) },
        },
        vertexShader,
        fragmentShader,
        side: THREE.BackSide,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    [color],
  );

  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

  return (
    <mesh scale={1.02}>
      <sphereGeometry args={[radius, 64, 64]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}
