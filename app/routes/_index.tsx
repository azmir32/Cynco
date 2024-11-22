import { json, type LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { type MetaFunction } from '@remix-run/react';
import { OverviewServices } from '~/components/sections/overview-services';
import { TrustedCompanies } from '~/components/sections/trusted-companies';
import { trustedCompanies } from '~/constants/companies';
import { FeaturesSection } from '~/components/sections/features';
import ProductCapabilities from '~/components/sections/ProductCapabilities';
import { FeedbackSection } from '~/components/sections/feedback-section';
import { db } from '~/utils/db.server';
import type { Feedback } from '~/types/feedback';
import TestimonialSection from '~/components/sections/testimonial';
import ProductBenefits from '~/components/sections/product-benefits';
import { CallToAction } from '~/components/sections/Call-to-action';

interface HomePageData {
  title: string;
  description: string;
  recentFeedback: Feedback[];
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Home | Cynco.io' },
    { name: 'Tech', content: 'Welcome to our application' },
  ];
};

export const loader: LoaderFunction = async () => {
  // Fetch recent feedback using mock database
  const recentFeedback = await db.feedback.findMany({
    take: 6,
  });

  const data: HomePageData = {
    title: 'Cynco.io',
    description: 'Discover amazing Features and Services',
    recentFeedback,
  };

  return json(data);
};

export default function HomePage() {
  const data = useLoaderData<HomePageData>();

  return (
    <main>
      <div className="space-y-1">
        {/* Existing sections */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <OverviewServices />
          </div>
        </section>

        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <TrustedCompanies companies={trustedCompanies} />
          </div>
        </section>

        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FeaturesSection />
          </div>
        </section>

        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ProductCapabilities />
          </div>
        </section>

        {/* Feedback Section 1*/}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <TestimonialSection />
          </div>
        </section>

        {/* product benefit*/}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <ProductBenefits />
          </div>
        </section>
        {/* CTA Section */}
        <section id="cta" className="relative py-2 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <CallToAction />
          </div>
        </section>
      </div>
    </main>
  );
}