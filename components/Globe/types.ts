export interface GlobeLocation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  color?: string;
  description?: string;
  href?: string;
  newTab?: boolean;
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
