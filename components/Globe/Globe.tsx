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
      <ambientLight intensity={1.75} />
      <directionalLight position={[4.2, 2.4, 5]} intensity={2.45} color="#ffffff" />
      <directionalLight position={[-3, -1.6, 2]} intensity={0.45} color="#ffffff" />

      {showStars ? <Stars /> : null}

      <group ref={worldRef} position={[0, 0.01, 0]} rotation={[0.08, -1.9, 0]}>
        <Earth />
        {showAtmosphere ? <Atmosphere /> : null}
        {locations.length > 0 ? <Markers locations={locations} /> : null}
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
        "relative isolate flex h-full min-h-[300px] w-full items-center justify-center overflow-visible rounded-[32px] sm:min-h-[420px] lg:min-h-[460px]",
        className,
      )}
    >
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        className="h-full w-full"
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 3.9]} fov={30} />
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
    </div>
  );
}

const GlobeNoSSR = dynamic(async () => Promise.resolve(GlobeCanvasInner), {
  ssr: false,
  loading: () => (
    <div className="h-full min-h-[300px] w-full animate-pulse rounded-[32px] bg-transparent sm:min-h-[420px] lg:min-h-[460px]" />
  ),
});

export default function Globe(props: GlobeProps) {
  return <GlobeNoSSR {...props} />;
}

export type { GlobeLocation, GlobeProps } from "./types";
