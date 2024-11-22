import type { Feedback } from '~/utils/db.server';
import { formatDate } from '~/utils/db.server';

interface FeedbackCardProps {
  feedback: Feedback;
}

export function FeedbackCard({ feedback }: FeedbackCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {Array.from({ length: feedback.rating }).map((_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
        </div>
        <span className="text-sm text-gray-500">
          {formatDate(feedback.createdAt)}
        </span>
      </div>
      <p className="text-gray-700 line-clamp-3 mb-4">{feedback.comment}</p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <h4 className="font-medium text-gray-900">{feedback.userName}</h4>
          <p className="text-sm text-gray-500">{feedback.userRole}</p>
        </div>
      </div>
    </div>
  );
}