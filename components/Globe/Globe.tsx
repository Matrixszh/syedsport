"use client";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";
import Atmosphere from "./Atmosphere";
import Earth from "./Earth";
import Markers from "./Markers";
import Stars from "./Stars";
import type { GlobeLocation, GlobeProps } from "./types";

const fallbackLocations: GlobeLocation[] = [
  {
    id: "new-york",
    name: "New York",
    latitude: 40.7128,
    longitude: -74.006,
    color: "#60a5fa",
    description: "Strategy and launch campaigns across North America.",
  },
  {
    id: "london",
    name: "London",
    latitude: 51.5072,
    longitude: -0.1276,
    color: "#a78bfa",
    description: "Editorial systems and digital experiences for Europe.",
  },
  {
    id: "dubai",
    name: "Dubai",
    latitude: 25.2048,
    longitude: 55.2708,
    color: "#f59e0b",
    description: "Luxury campaigns and premium brand positioning.",
  },
];

type GlobeSceneProps = Required<
  Pick<
    GlobeProps,
    "autoRotate" | "rotationSpeed" | "showAtmosphere" | "showStars" | "enableZoom"
  >
> & {
  locations: GlobeLocation[];
};

function GlobeScene({
  locations,
  autoRotate,
  rotationSpeed,
  showAtmosphere,
  showStars,
  enableZoom,
}: GlobeSceneProps) {
  const worldRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!autoRotate || !worldRef.current) {
      return;
    }

    worldRef.current.rotation.y += delta * rotationSpeed * 0.16;
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3.5, 1.8, 4.5]} intensity={2.2} color="#ffffff" />
      <pointLight position={[-3, -1, -4]} intensity={1.2} color="#60a5fa" />

      {showStars ? <Stars /> : null}

      <group ref={worldRef}>
        <Earth />
        {showAtmosphere ? <Atmosphere /> : null}
        <Markers locations={locations} />
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom={enableZoom}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.55}
        minDistance={2.2}
        maxDistance={6.4}
        autoRotate={autoRotate}
        autoRotateSpeed={rotationSpeed * 0.45}
      />
    </>
  );
}

function GlobeCanvasInner({
  locations,
  autoRotate = true,
  rotationSpeed = 0.5,
  showAtmosphere = true,
  showStars = true,
  enableZoom = true,
  className,
}: GlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const resolvedLocations = useMemo(
    () => (locations && locations.length > 0 ? locations : fallbackLocations),
    [locations],
  );

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 28, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 1.15, ease: "power3.out" },
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative isolate h-full min-h-[460px] w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#020817]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.16),transparent_28%)]" />

      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        className="h-full w-full"
      >
        <color attach="background" args={["#020817"]} />
        <fog attach="fog" args={["#020817", 4.8, 12]} />
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 4.15]} fov={34} />
          <GlobeScene
            locations={resolvedLocations}
            autoRotate={autoRotate}
            rotationSpeed={rotationSpeed}
            showAtmosphere={showAtmosphere}
            showStars={showStars}
            enableZoom={enableZoom}
          />
        </Suspense>
      </Canvas>

      <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_center,transparent_46%,rgba(2,8,23,0.34)_100%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-white/10" />
    </div>
  );
}

const GlobeNoSSR = dynamic(async () => Promise.resolve(GlobeCanvasInner), {
  ssr: false,
  loading: () => (
    <div className="h-full min-h-[460px] w-full animate-pulse rounded-[32px] border border-white/10 bg-[#020817]" />
  ),
});

export default function Globe(props: GlobeProps) {
  return <GlobeNoSSR {...props} />;
}

export type { GlobeLocation, GlobeProps } from "./types";
