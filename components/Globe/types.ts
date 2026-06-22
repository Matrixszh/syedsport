export interface GlobeLocation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  color?: string;
  description?: string;
}

export interface GlobeProps {
  locations?: GlobeLocation[];
  autoRotate?: boolean;
  rotationSpeed?: number;
  showAtmosphere?: boolean;
  showStars?: boolean;
  enableZoom?: boolean;
  className?: string;
}
