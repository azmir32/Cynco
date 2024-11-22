import { Link } from '@remix-run/react';

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const CallToAction = ({
  title = 'Connect, sync, and start seeing revenue insights right away.',
  subtitle = 'Connect, sync, and start seeing revenue insights right away.',
  buttonText = 'See It in Action',
  buttonHref = '/demo'
}: CallToActionProps) => {
  return (
    <div className="w-full bg-black text-white rounded-3xl overflow-hidden py-16 px-8 relative">
      {/* Background Grid Pattern */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/2 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Content Container */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          {subtitle}
        </p>
        
        {/* CTA Button */}
        <Link
          to={buttonHref}
          className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 
                     text-white font-medium rounded-full transition-colors duration-200"
        >
          <span>{buttonText}</span>
          <svg 
            className="ml-2 w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};