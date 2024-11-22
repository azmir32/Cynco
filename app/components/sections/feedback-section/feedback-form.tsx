import { useFetcher } from '@remix-run/react';
import { useState } from 'react';
import { StarRating } from '~/components/sections/feedback-section/star-rating';
import type { FeedbackError } from '~/types/feedback';

interface FeedbackFormProps {
  errors?: FeedbackError;
}

export function FeedbackForm({ errors }: FeedbackFormProps) {
  const fetcher = useFetcher();
  const [rating, setRating] = useState<number>(0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Submit Your Feedback</h2>
      <fetcher.Form method="post" className="space-y-4">
        {errors?._form && (
          <div className="text-red-600" role="alert">
            {errors._form}
          </div>
        )}

        <StarRating
          value={rating}
          onChange={setRating}
          error={errors?.rating}
        />
        <input type="hidden" name="rating" value={rating} />

        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium mb-2"
          >
            Your Feedback
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={4}
            className="w-full border rounded-md p-2"
            placeholder="Share your experience..."
          />
          {errors?.comment && (
            <p className="text-red-600 text-sm mt-1">
              {errors.comment}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          disabled={fetcher.state === 'submitting'}
        >
          {fetcher.state === 'submitting'
            ? 'Submitting...'
            : 'Submit Feedback'}
        </button>
      </fetcher.Form>
    </div>
  );
}