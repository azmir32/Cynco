import { useFetcher } from '@remix-run/react';
import { useState } from 'react';
import { StarRating } from './star-rating';
import { FeedbackCard } from './feedback-card';
import type { Feedback } from '~/types/feedback';

interface FeedbackSectionProps {
  recentFeedback: Feedback[];
}

export function FeedbackSection({ recentFeedback }: FeedbackSectionProps) {
  const fetcher = useFetcher();
  const [rating, setRating] = useState<number>(0);

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Join thousands of satisfied customers who trust our services
          </p>
        </div>

        {/* Feedback Form */}
        <div className="mx-auto max-w-2xl mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <fetcher.Form method="post" className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">
                  Share Your Experience
                </h3>
                <StarRating
                  value={rating}
                  onChange={setRating}
                />
                <input type="hidden" name="rating" value={rating} />
              </div>

              <div>
                <textarea
                  name="comment"
                  rows={4}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Tell us about your experience..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  disabled={fetcher.state === 'submitting'}
                >
                  {fetcher.state === 'submitting'
                    ? 'Submitting...'
                    : 'Submit Feedback'}
                </button>
              </div>
            </fetcher.Form>
          </div>
        </div>

        {/* Recent Feedback Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recentFeedback.map((feedback) => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))}
        </div>
      </div>
    </div>
  );
}
