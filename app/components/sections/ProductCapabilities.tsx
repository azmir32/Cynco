import React, { useState, useEffect } from 'react';

interface Image {
  src: string;
  alt: string;
}

interface ProductCapabilityCardProps {
  title: string;
  subtitle: string;
  images: Image[];
  autoRotate?: boolean;
  rotationInterval?: number;
  className?: string;
  size?: 'normal' | 'large';
}

interface ProductCapability {
  title: string;
  subtitle: string;
  images: Image[];
  autoRotate?: boolean;
  rotationInterval?: number;
}

// Updated ProductCapabilityCard Component with better image handling
const ProductCapabilityCard: React.FC<ProductCapabilityCardProps> = ({
  title,
  subtitle,
  images,
  autoRotate = false,
  rotationInterval = 5000,
  className = '',
  size = 'normal'
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (autoRotate && images.length > 1) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, rotationInterval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoRotate, images.length, rotationInterval]);

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="space-y-2">
        <h2 className={`font-bold text-gray-900 ${
          size === 'large' ? 'text-3xl md:text-4xl' : 'text-2xl'
        }`}>
          {title}
        </h2>
        <h4 className={`text-gray-600 ${
          size === 'large' ? 'text-xl' : 'text-lg'
        }`}>
          {subtitle}
        </h4>
      </div>
      
      <div className="relative w-full h-full min-h-[250px]">
        <div className="absolute inset-0 w-full h-full rounded-lg bg-gray-100">
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            className="w-full h-full object-contain rounded-lg transition-all duration-500"
            style={{
              objectPosition: 'center',
              maxHeight: '100%',
              maxWidth: '100%'
            }}
          />
        </div>

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white/60'
                }`}
                aria-label={`Image ${index + 1} of ${images.length}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Updated Product Capabilities Section Component
const ProductCapabilities: React.FC = () => {
  // Add section header content
  const sectionHeader = {
    title: "Handle 10x the transactions without adding headcount.",
    subtitle: "Cynco AI takes care of tracking, categorizing, and recognizing revenue, freeing you for strategic work."
  };

  const capabilities: {
    hero: ProductCapability;
    features: ProductCapability[];
  } = {
    hero: {
      title: "Capture insight instantly.",
      subtitle: "Sync contracts and let AI instantly recognize revenue with precision and compliance.",
      images: [
        {
          src: '/images/Agreement-image.svg',
          alt: 'Platform overview 1'
        },
        {
          src: '/images/2.svg',
          alt: 'Platform overview 2'
        }
      ],
      autoRotate: true,
      rotationInterval: 8000
    },
    features: [
      {
        title: "Keep systems seamlessly connected",
        subtitle: "Integrate Cynco with your CRM, ERP, and more to keep financials updated in real-time.",
        images: [
          {
            src: '/images/2.svg',
            alt: 'Core features illustration 1'
          },
          {
            src: '/images/companies/soft.svg',
            alt: 'Core features illustration 2'
          },
          {
            src: '/images/companies/gtech.svg',
            alt: 'Core features illustration 3'
          }
        ],
        autoRotate: true,
        rotationInterval: 6000
      },
      {
        title: "Eliminate the manual tasts",
        subtitle: "Cynco automates renewals, invoices, and revenue recognition. Need updates? Make changes in bulk with ease.",
        images: [
          {
            src: '/images/3.svg',
            alt: 'Advanced solutions illustration 1'
          },
          {
            src: '/images/companies/ingoude.svg',
            alt: 'Advanced solutions illustration 2'
          }
        ],
        autoRotate: true,
        rotationInterval: 7000
      }
    ]
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Added Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
          {sectionHeader.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          {sectionHeader.subtitle}
        </p>
      </div>

      {/* Hero Section - Side by Side Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {capabilities.hero.title}
          </h2>
          <p className="text-xl text-gray-600">
            {capabilities.hero.subtitle}
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px]">
          <div className="absolute inset-0 w-full h-full">
            <img
              src={capabilities.hero.images[0].src}
              alt={capabilities.hero.images[0].alt}
              className="w-full h-full object-contain rounded-lg"
              style={{
                objectPosition: 'center',
                maxHeight: '100%',
                maxWidth: '100%'
              }}
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-50 rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.features.map((feature, index) => (
            <ProductCapabilityCard
              key={`feature-${index}`}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCapabilities;