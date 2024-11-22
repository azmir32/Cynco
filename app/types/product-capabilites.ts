export interface ProductCapability {
    title: string;
    subtitle: string;
    images: Array<{
      src: string;
      alt: string;
    }>;
    autoRotate?: boolean;
    rotationInterval?: number;
  }