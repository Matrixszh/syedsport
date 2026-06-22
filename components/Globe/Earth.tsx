"use client";

import { useTexture } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

type EarthProps = {
  radius?: number;
};

export default function Earth({ radius = 1 }: EarthProps) {
  const specularMap = useTexture("/globe/earth-specular.jpg");

  useEffect(() => {
    specularMap.needsUpdate = true;
  }, [specularMap]);

  const baseMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#FFD700",
        roughness: 0.96,
        metalness: 0,
        emissive: new THREE.Color("#FFD700"),
        emissiveIntensity: 0.12,
      }),
    [],
  );

  const dotTexture = useMemo(() => {
    const source = specularMap.image as
      | HTMLImageElement
      | HTMLCanvasElement
      | undefined;

    if (!source || !source.width || !source.height || typeof document === "undefined") {
      return null;
    }

    const sampleCanvas = document.createElement("canvas");
    sampleCanvas.width = source.width;
    sampleCanvas.height = source.height;

    const sampleContext = sampleCanvas.getContext("2d");
    if (!sampleContext) {
      return null;
    }

    sampleContext.drawImage(source, 0, 0, source.width, source.height);
    const { data } = sampleContext.getImageData(0, 0, source.width, source.height);

    const outputCanvas = document.createElement("canvas");
    outputCanvas.width = source.width;
    outputCanvas.height = source.height;

    const outputContext = outputCanvas.getContext("2d");
    if (!outputContext) {
      return null;
    }

    outputContext.clearRect(0, 0, outputCanvas.width, outputCanvas.height);
    outputContext.fillStyle = "#111111";

    const step = 7;

    for (let y = 0; y < source.height; y += step) {
      for (let x = 0; x < source.width; x += step) {
        const index = (y * source.width + x) * 4;
        const brightness = (data[index] + data[index + 1] + data[index + 2]) / 3;

        // In the specular map, darker regions correspond mostly to land masses.
        if (brightness < 120) {
          const radiusPx = brightness < 70 ? 2.25 : 1.6;
          outputContext.beginPath();
          outputContext.arc(x, y, radiusPx, 0, Math.PI * 2);
          outputContext.fill();
        }
      }
    }

    const texture = new THREE.CanvasTexture(outputCanvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;

    return texture;
  }, [specularMap]);

  useEffect(() => {
    return () => {
      baseMaterial.dispose();
      dotTexture?.dispose();
    };
  }, [baseMaterial, dotTexture]);

  return (
    <group>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[radius, 96, 96]} />
        <primitive object={baseMaterial} attach="material" />
      </mesh>

      {dotTexture ? (
        <mesh scale={1.002}>
          <sphereGeometry args={[radius, 96, 96]} />
          <meshBasicMaterial
            map={dotTexture}
            transparent
            alphaTest={0.08}
            color="#FFD700"
            depthWrite={false}
          />
        </mesh>
      ) : null}
    </group>
  );
}
