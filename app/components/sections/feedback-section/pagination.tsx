import { Link } from '@remix-run/react';
import type { PaginationData } from '~/types/feedback';

interface PaginationProps {
  pagination: PaginationData;
  baseUrl: string;
}

export function Pagination({ pagination, baseUrl }: PaginationProps) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: pagination.pages }).map((_, i) => (
        <Link
          key={i + 1}
          to={`${baseUrl}?page=${i + 1}`}
          className={`px-4 py-2 rounded-md ${
            pagination.current === i + 1
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  );
}
