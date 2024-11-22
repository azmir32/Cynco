import type { Feedback } from '~/types/feedback';

interface FeedbackItemProps {
    feedback: Feedback;
  }
  
  export function FeedbackItem({ feedback }: FeedbackItemProps) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {Array.from({ length: feedback.rating }).map((_, i) => (
              <span key={i} className="text-yellow-400">
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">
            {new Date(feedback.createdAt).toLocaleDateString()}
          </span>
        </div>
        <p className="text-gray-700">{feedback.comment}</p>
      </div>
    );
  }
  