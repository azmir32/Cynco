import { type FC } from 'react';

const ProductBenefits: FC = () => {
  // Section header content
  const sectionHeader = {
    title: 'Make Revenue Work for YOU',
    subtitle: 'Cynco delivers clarity and control, tailored to your growth.'
  };

  const mainBenefit = {
    title: 'Identify issues before they impact growth.',
    description: 'Cynco AI catches discrepancies and keeps your revenue data compliant.',
    imagePath: '/images/product-benefits.svg',
    imageAlt: 'Dashboard showing customer balance and analytics',
  };

  const sideBenefits = [
    {
      title: 'Centralize contracts and revenue tracking.',
      description: 'Sync every transaction and contract in one place for seamless organization.',
      imagePath: '/images/product-benefits.svg',
      imageAlt: 'Customer waterfall chart showing monthly data',
    },
    {
      title: 'Be investor-ready, always.',
      description: 'Get real-time insights and reliable monthly reports that show your growth at every stage.',
      imagePath: '/images/second.svg',
      imageAlt: 'Person working on laptop with analytics dashboard',
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 space-y-24">
      {/* Added Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
          {sectionHeader.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          {sectionHeader.subtitle}
        </p>
      </div>

      {/* Main Benefit */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-semibold text-gray-900">
            {mainBenefit.title}
          </h2>
          <p className="text-lg text-gray-600">
            {mainBenefit.description}
          </p>
        </div>
        <div className="flex-1 w-full">
          <div className="relative rounded-lg overflow-hidden bg-gray-100 p-4">
            <img
              src={mainBenefit.imagePath}
              alt={mainBenefit.imageAlt}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Side by Side Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
        {/* First Side Benefit */}
        <div className="bg-gray-50 rounded-lg p-2 shadow-sm">
          <div className="space-y-1">
            <h2 className="text-3xl font-semibold text-gray-900">
              {sideBenefits[0].title}
            </h2>
            <p className="text-lg text-gray-600 -mt-14">
              {sideBenefits[0].description}
            </p>
          </div>
          <div className="w-full">
            <div className="relative rounded-lg overflow-hidden p-1">
              <img
                src="/images/5.svg"
                alt={sideBenefits[0].imageAlt}
                className="w-full h-auto object-cover rounded-lg -mt-44"
              />
            </div>
          </div>
        </div>

        {/* Second Side Benefit */}
        <div className="rounded-lg p-1 shadow-sm">
          <div className="space-y-1 mb-1">
            <h2 className="text-3xl font-semibold text-gray-900">
              {sideBenefits[1].title}
            </h2>
            <p className="text-lg text-gray-600">
              {sideBenefits[1].description}
            </p>
          </div>
          <div className="w-full">
            <div className="relative rounded-lg overflow-hidden p-1">
              <img
                src="/images/6.svg"
                alt={sideBenefits[1].imageAlt}
                className="w-full h-auto object-cover rounded-lg -mt-44"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;