import { FeedbackItem } from './feedback-item';
import type { Feedback } from '~/types/feedback';

interface FeedbackListProps {
  feedback: Feedback[];
}

export function FeedbackList({ feedback }: FeedbackListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Recent Feedback</h2>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} feedback={item} />
      ))}
    </div>
  );
}