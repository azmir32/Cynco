import { ReactNode } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const Testimonial = ({ quote, author, role, company }: TestimonialProps) => {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4">
      <div className="flex flex-col items-center text-center space-y-6">
        <blockquote className="text-xl md:text-3xl lg:text-4xl font-medium text-gray-700 max-w-3xl">
          "{quote}"
        </blockquote>
        
        <footer className="mt-4 text-gray-600">
          <span className="font-medium">{author}</span>
          {role && company && (
            <span className="before:content-[',_'] ml-1">
              {role} at {company}
            </span>
          )}
        </footer>
      </div>
    </section>
  );
};

// Example usage component
const TestimonialSection = () => {
  return (
    <Testimonial
      quote="LedgerUp is like having another employee on the team. They save me 30-40 hours a month just on entering bills and invoices immediately."
      author="Kristina"
      role="Controller"
      company="Millennium"
    />
  );
};

export default TestimonialSection;