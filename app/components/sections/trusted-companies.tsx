import { type ReactNode } from 'react';

interface TrustedCompany {
  name: string;
  logo: string;
  alt: string;
}

interface TrustedCompaniesProps {
  title?: string;
  companies: TrustedCompany[];
}

export const TrustedCompanies = ({
  title = 'Trusted by companies scaling their revenue with Cynco.io',
  companies,
}: TrustedCompaniesProps) => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 font-medium tracking-tight">
            {title}
          </h2>
        </div>
        
        {/* Increased spacing and size for logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-16 gap-y-12 items-center justify-items-center max-w-6xl mx-auto">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center w-full h-16 px-4"
            >
              <img
                src={company.logo}
                alt={company.alt}
                className="h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};