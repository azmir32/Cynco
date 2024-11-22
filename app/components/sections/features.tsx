import { type ReactNode } from 'react';
import { ChartLine, Coins, DollarSign } from 'lucide-react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
      <div className="text-teal-600 mb-4">
        {icon}
      </div>
      <h3 className="text-gray-800 font-medium mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export const FeaturesSection = () => {
  const features = [
    {
      icon: <ChartLine size={65} className="stroke-2" />,
      title: 'Automated revenue tracking.',
      description: 'Our AI tracks revenue so you can focus on growth, not data entry.',
    },
    {
      icon: <Coins size={65} className="stroke-2" />,
      title: 'Tailored insights for your goals.',
      description: 'Get metrics that matter ARR, churn, and customer insights all customized.',
    },
    {
      icon: <DollarSign size={65} className="stroke-2" />,
      title: 'Revenue clarity, all in on30place.',
      description: 'Centralize your revenue streams for full visibility and control.',
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};