"use client";

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { GlobeLocation } from "./types";
import { latLngToVector3 } from "./utils";

type MarkersProps = {
  locations: GlobeLocation[];
  radius?: number;
};

type MarkerItemProps = {
  location: GlobeLocation;
  position: THREE.Vector3;
  isActive: boolean;
  onActivate: (id: string | null) => void;
};

function MarkerItem({
  location,
  position,
  isActive,
  onActivate,
}: MarkerItemProps) {
  const coreRef = useRef<THREE.Mesh>(null);
  const auraRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);
  const color = location.color ?? "#7dd3fc";
  const tooltipPosition = useMemo(
    () => position.clone().normalize().multiplyScalar(0.12),
    [position],
  );

  useFrame(({ clock }) => {
    const pulse = 1 + Math.sin(clock.elapsedTime * 2.4) * 0.18;
    const auraScale = isHovered || isActive ? pulse * 1.6 : pulse * 1.2;
    const coreScale = isHovered || isActive ? 1.35 : 1;

    auraRef.current?.scale.setScalar(auraScale);
    coreRef.current?.scale.setScalar(coreScale);
  });

  return (
    <group position={position}>
      <mesh ref={auraRef}>
        <sphereGeometry args={[0.04, 20, 20]} />
        <meshBasicMaterial color={color} transparent opacity={0.18} depthWrite={false} />
      </mesh>
      <mesh
        ref={coreRef}
        onPointerOver={(event) => {
          event.stopPropagation();
          setIsHovered(true);
          onActivate(location.id);
        }}
        onPointerOut={(event) => {
          event.stopPropagation();
          setIsHovered(false);
          onActivate(null);
        }}
        onClick={(event) => {
          event.stopPropagation();
          onActivate(isActive ? null : location.id);
        }}
      >
        <sphereGeometry args={[0.018, 16, 16]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>

      {(isHovered || isActive) && (
        <Html
          position={tooltipPosition}
          center
          distanceFactor={9}
          className="pointer-events-none"
        >
          <div className="min-w-[180px] rounded-2xl border border-white/15 bg-slate-950/90 px-4 py-3 text-left text-white shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-200">
              {location.name}
            </p>
            {location.description ? (
              <p className="mt-2 text-[12px] leading-5 text-white/70">
                {location.description}
              </p>
            ) : null}
          </div>
        </Html>
      )}
    </group>
  );
}

export default function Markers({
  locations,
  radius = 1.02,
}: MarkersProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const markerPositions = useMemo(
    () =>
      locations.map((location) => ({
        location,
        position: latLngToVector3(location.latitude, location.longitude, radius),
      })),
    [locations, radius],
  );

  useEffect(() => {
    if (!groupRef.current) {
      return;
    }

    gsap.fromTo(
      groupRef.current.scale,
      { x: 0.2, y: 0.2, z: 0.2 },
      { x: 1, y: 1, z: 1, duration: 1.2, ease: "power3.out" },
    );
  }, []);

  return (
    <group ref={groupRef}>
      {markerPositions.map(({ location, position }) => (
        <MarkerItem
          key={location.id}
          location={location}
          position={position}
          isActive={activeId === location.id}
          onActivate={setActiveId}
        />
      ))}
    </group>
  );
}
