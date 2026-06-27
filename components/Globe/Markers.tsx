"use client";

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import Link from "next/link";
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
  const tagPosition = useMemo(
    () => position.clone().normalize().multiplyScalar(0.36),
    [position],
  );
  const isExternalHref = Boolean(location.href?.startsWith("http"));
  const tagClassName =
    "group inline-flex min-w-[20px] items-center justify-center px-0.5 py-1 text-center text-[3px] font-semibold uppercase tracking-[0.18em] text-[#ffffff] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]/70";

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

      <Html position={tagPosition} center distanceFactor={8.2} className="pointer-events-auto">
        <div
          className="flex flex-col items-center gap-2"
          onMouseEnter={() => onActivate(location.id)}
          onMouseLeave={() => onActivate(null)}
        >
          <span className="h-5 w-px bg-gradient-to-b from-[#FFD700]/0 via-[#FFD700]/55 to-[#FFD700]/10" />

          {location.href ? (
            isExternalHref ? (
              <a
                href={location.href}
                target={location.newTab ? "_blank" : undefined}
                rel={location.newTab ? "noreferrer" : undefined}
                className={tagClassName}
              >
                {location.name}
              </a>
            ) : (
              <Link href={location.href} className={tagClassName}>
                {location.name}
              </Link>
            )
          ) : (
            <div className={tagClassName}>{location.name}</div>
          )}
        </div>
      </Html>
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
